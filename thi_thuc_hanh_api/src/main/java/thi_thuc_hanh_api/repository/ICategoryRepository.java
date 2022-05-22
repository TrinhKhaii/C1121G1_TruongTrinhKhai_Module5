package thi_thuc_hanh_api.repository;
/*
    Created by Trinh Khai
    Date: 20/05/2022
    Time: 14:56
*/

import org.springframework.data.jpa.repository.JpaRepository;
import thi_thuc_hanh_api.model.Category;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {

}
