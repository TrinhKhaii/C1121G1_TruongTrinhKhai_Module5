package thi_thuc_hanh_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import thi_thuc_hanh_api.model.Category;
import thi_thuc_hanh_api.service.ICategoryService;

/*
    Created by Trinh Khai
    Date: 21/05/2022
    Time: 16:46
*/
@RestController
@RequestMapping(value = "/api/category")
@CrossOrigin
public class CategoryRestController {
    @Autowired
    private ICategoryService iCategoryService;

    @RequestMapping(value = "")
    public ResponseEntity<Iterable<Category>> getCategoryList() {
        Iterable<Category> categoryIterable = iCategoryService.findAll();
        return new ResponseEntity<>(categoryIterable, HttpStatus.OK);
    }
}
