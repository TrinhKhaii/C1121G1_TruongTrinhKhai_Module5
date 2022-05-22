package thi_thuc_hanh_api.repository;
/*
    Created by Trinh Khai
    Date: 20/05/2022
    Time: 14:55
*/

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import thi_thuc_hanh_api.model.Article;

public interface IArticleRepository extends JpaRepository<Article, Integer> {

    @Query(value = "select * from article where delete_flag = 0 and area > :area and price > :price and direction like concat('%',:direction,'%')", countQuery = "select count(*) from article where delete_flag = 0 and area > :area and price > :price and direction like concat('%',:direction,'%')",  nativeQuery = true)
    Page<Article> findAll(@Param("area") Double area, @Param("price") Double price, @Param("direction") String direction, Pageable pageable);
}
