package thi_thuc_hanh_api.service;
/*
    Created by Trinh Khai
    Date: 20/05/2022
    Time: 15:58
*/

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import thi_thuc_hanh_api.model.Article;

public interface IArticleService extends IGeneralService<Article>{
    Page<Article> findAll(Double area, Double price, String direction, Pageable pageable);
}
