package thi_thuc_hanh_api.service.impl;
/*
    Created by Trinh Khai
    Date: 21/05/2022
    Time: 16:16
*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thi_thuc_hanh_api.model.Category;
import thi_thuc_hanh_api.repository.ICategoryRepository;
import thi_thuc_hanh_api.service.ICategoryService;

import java.util.Optional;
@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Override
    public Iterable<Category> findAll() {
        return iCategoryRepository.findAll();
    }

    @Override
    public Optional<Category> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void save(Category category) {

    }
}
