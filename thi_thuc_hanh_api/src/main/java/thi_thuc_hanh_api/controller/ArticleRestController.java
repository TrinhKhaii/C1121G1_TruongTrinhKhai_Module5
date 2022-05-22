package thi_thuc_hanh_api.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import thi_thuc_hanh_api.dto.ArticleDTO;
import thi_thuc_hanh_api.model.Article;
import thi_thuc_hanh_api.model.Category;
import thi_thuc_hanh_api.service.IArticleService;

import javax.validation.Valid;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/*
    Created by Trinh Khai
    Date: 21/05/2022
    Time: 13:18
*/
@RestController
@RequestMapping(value = "/api/article")
@CrossOrigin
public class ArticleRestController {
    @Autowired
    private IArticleService iArticleService;

    @GetMapping(value = "")
    public ResponseEntity<Page<Article>> getArticleList(@RequestParam("areaSearch") Optional<Double> areaSearch,
                                                        @RequestParam("priceSearch") Optional<Double> priceSearch,
                                                        @RequestParam("directionSearch") Optional<String> directionSearch,
                                                        @RequestParam("sortSelect") Optional<String> sortSelect,
                                                        Pageable pageable) {
        Double areaSearchVal = areaSearch.orElse(0.0);
        Double priceSearchVal = priceSearch.orElse(0.0);
        String directionSearchVal = directionSearch.orElse("");
        String sortSelectVal = sortSelect.orElse("");
        Sort sort = Sort.by("id").ascending();
        if (sortSelectVal.equals("DESC")) {
            sort = Sort.by("post_date").descending();
        } else if (sortSelectVal.equals("ASC")) {
            sort = Sort.by("post_date").ascending();
        }

        Page<Article> articlePage = iArticleService.findAll(areaSearchVal, priceSearchVal, directionSearchVal, PageRequest.of(pageable.getPageNumber(), 3, sort));
        if (articlePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(articlePage, HttpStatus.OK);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<Map<String, String>> saveArticle(@Valid @RequestBody ArticleDTO articleDTO,
                                                           BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Article article = new Article();
        Category category = new Category();
        BeanUtils.copyProperties(articleDTO, article);
        BeanUtils.copyProperties(articleDTO.getCategoryDTO(), category);
        article.setCategory(category);
        iArticleService.save(article);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Article> findArticleById(@PathVariable("id") Integer id) {
        Optional<Article> articleOptional = iArticleService.findById(id);
        return articleOptional.map(article -> new ResponseEntity<>(article, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @PatchMapping(value = "update/{id}")
    public ResponseEntity<Map<String, String>> updateArticle(@PathVariable("id") Integer id,
                                                 @Valid @RequestBody ArticleDTO articleDTO,
                                                 BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.OK);
        }
        Article article = new Article();
        Category category = new Category();
        BeanUtils.copyProperties(articleDTO, article);
        BeanUtils.copyProperties(articleDTO.getCategoryDTO(), category);
        article.setId(id);
        article.setCategory(category);
        iArticleService.save(article);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(value = "delete")
    public ResponseEntity<Void> deleteArticle(@RequestBody Article article) {
        if (article != null) {
            article.setDeleteFlag(true);
            iArticleService.save(article);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
