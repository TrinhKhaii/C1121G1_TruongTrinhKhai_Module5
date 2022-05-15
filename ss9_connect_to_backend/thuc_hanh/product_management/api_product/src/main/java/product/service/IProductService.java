package product.service;
/*
    Created by Trinh Khai
    Date: 14/05/2022
    Time: 09:32
*/

import product.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IProductService {
    Page<Product> findAll(String name, String manufacturer, Pageable pageable );

    Optional<Product> findById(Integer id);

    void save(Product product);
}
