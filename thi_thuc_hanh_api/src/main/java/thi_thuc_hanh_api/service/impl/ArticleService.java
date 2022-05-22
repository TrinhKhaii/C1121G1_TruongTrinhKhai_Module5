package thi_thuc_hanh_api.service.impl;
/*
    Created by Trinh Khai
    Date: 20/05/2022
    Time: 16:00
*/

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import thi_thuc_hanh_api.model.Article;
import thi_thuc_hanh_api.repository.IArticleRepository;
import thi_thuc_hanh_api.service.IArticleService;

import java.util.Optional;
@Service
public class ArticleService implements IArticleService {
    @Autowired
    private IArticleRepository iArticleRepository;

    @Override
    public Iterable<Article> findAll() {
        return iArticleRepository.findAll();
    }

    @Override
    public Optional<Article> findById(Integer id) {
        return iArticleRepository.findById(id);
    }

    @Override
    public void save(Article article) {
        iArticleRepository.save(article);
    }

    @Override
    public Page<Article> findAll(Double area, Double price, String direction, Pageable pageable) {
        return iArticleRepository.findAll(area, price, direction, pageable);
    }
}
