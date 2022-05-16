package product.controller;
/*
    Created by Trinh Khai
    Date: 15/05/2022
    Time: 14:20
*/

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import product.dto.CategoryDTO;
import product.dto.ProductDTO;
import product.model.Category;
import product.model.Product;
import product.service.ICategoryService;

import javax.validation.Valid;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/category")
@CrossOrigin
public class CategoryRestController {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping(value = {"", "/search"})
    public ResponseEntity<Page<Category>> getCategoryList(@RequestParam("searchName") Optional<String> searchName,
                                                          @PageableDefault(value = 10)Pageable pageable) {
        String searchNameValue = searchName.orElse("");
        Page<Category> categoryPage = iCategoryService.findAll(searchNameValue, pageable);
        if (categoryPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryPage, HttpStatus.OK);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<Map<String, String>> addNewCategory(@Valid @RequestBody CategoryDTO categoryDTO,
                                                              BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Category category = new Category();
        BeanUtils.copyProperties(categoryDTO, category);
        iCategoryService.save(category);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/edit/{id}")
    public ResponseEntity<CategoryDTO> getCategoryEdit(@PathVariable("id") Integer id) {
        Category category = iCategoryService.findById(id).orElse(null);
        CategoryDTO categoryDTO = new CategoryDTO();
        if (category != null) {
            BeanUtils.copyProperties(category, categoryDTO);
            return new ResponseEntity<>(categoryDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping(value = "delete/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable("id") Integer id) {
        Optional<Category> categoryOptional = iCategoryService.findById(id);
        if (categoryOptional.isPresent()) {
            iCategoryService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
