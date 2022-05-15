package product.service.impl;
/*
    Created by Trinh Khai
    Date: 15/05/2022
    Time: 14:21
*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import product.model.Category;
import product.repository.ICategoryRepository;
import product.service.ICategoryService;

import java.util.Optional;
@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Override
    public Page<Category> findAll(String name, Pageable pageable) {
        return iCategoryRepository.findAllByCategoryNameContaining(name, pageable);
    }

    @Override
    public Optional<Category> findById(Integer id) {
        return iCategoryRepository.findById(id);
    }

    @Override
    public void save(Category category) {
        iCategoryRepository.save(category);
    }
}
