package product.repository;
/*
    Created by Trinh Khai
    Date: 15/05/2022
    Time: 14:14
*/

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import product.model.Category;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {
    Page<Category> findAllByCategoryNameContaining(String name, Pageable pageable);
}
