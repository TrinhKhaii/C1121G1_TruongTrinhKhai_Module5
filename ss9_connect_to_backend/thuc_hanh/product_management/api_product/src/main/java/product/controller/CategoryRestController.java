package product.controller;
/*
    Created by Trinh Khai
    Date: 15/05/2022
    Time: 14:20
*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import product.model.Category;
import product.repository.ICategoryRepository;
import product.service.ICategoryService;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/category")
@CrossOrigin
public class CategoryRestController {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping(value = {"", "/search"})
    public ResponseEntity<Page<Category>> getCategoryList(@RequestParam("searchName") Optional<String> searchName,
                                                          @PageableDefault(value = 10)Pageable pageable) {
        String searchNameValue = searchName.get();
        Page<Category> categoryPage = iCategoryService.findAll(searchNameValue, pageable);
        if (categoryPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryPage, HttpStatus.OK);
    }


}
