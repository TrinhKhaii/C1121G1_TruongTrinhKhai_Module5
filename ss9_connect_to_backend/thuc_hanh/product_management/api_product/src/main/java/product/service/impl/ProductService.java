package product.service.impl;

import product.model.Product;
import product.repository.IProductRepository;
import product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

/*
    Created by Trinh Khai
    Date: 14/05/2022
    Time: 09:38
*/
@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;


    @Override
    public Page<Product> findAll(String name, String manufacturer, Pageable pageable) {
        return iProductRepository.findAllByDeleteFlagAndNameContainingAndManufacturerContaining(false, name, manufacturer, pageable);
    }

    @Override
    public Optional<Product> findById(Integer id) {
        return iProductRepository.findById(id);
    }

    @Override
    public void save(Product product) {
        iProductRepository.save(product);
    }
}
