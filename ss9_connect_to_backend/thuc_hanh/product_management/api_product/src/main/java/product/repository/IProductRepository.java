package product.repository;
/*
    Created by Trinh Khai
    Date: 14/05/2022
    Time: 09:31
*/

import product.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    Page<Product> findAllByDeleteFlagAndNameContainingAndManufacturerContaining(Boolean flag, String name, String manufacturer, Pageable pageable);
}
