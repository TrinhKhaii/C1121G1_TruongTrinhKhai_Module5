package product.service;
/*
    Created by Trinh Khai
    Date: 15/05/2022
    Time: 14:20
*/

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import product.model.Category;

import java.util.Optional;

public interface ICategoryService {
    Page<Category> findAll(String name, Pageable pageable);

    Optional<Category> findById(Integer id);

    void save(Category category);
}
