package product.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.validation.BindingResult;
import product.dto.ProductDTO;
import product.model.Product;
import product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/*
    Created by Trinh Khai
    Date: 14/05/2022
    Time: 09:31
*/

@RestController
@RequestMapping(value = "/api/product")
@CrossOrigin("*")
public class ProductRestController {
    @Autowired
    private IProductService iProductService;

    @GetMapping(value = {"", "/search"})
    public ResponseEntity<Page<Product>> showProductList(@RequestParam("searchName") Optional<String> searchName,
                                                         @RequestParam("searchManufacturer") Optional<String> searchManufacturer,
                                                         @PageableDefault(value = 3) Pageable pageable) {
        String searchNameValue = searchName.orElse("");
        String searchManufacturerValue = searchManufacturer.orElse("");
        Page<Product> productPage = iProductService.findAll(searchNameValue, searchManufacturerValue, pageable);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<Map<String, String>> addNewProduct(@Valid @RequestBody ProductDTO productDTO,
                                                             BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/edit/{id}")
    public ResponseEntity<ProductDTO> getProductEdit(@PathVariable("id") Integer id) {
        Product product = iProductService.findById(id).orElse(null);
        ProductDTO productDTO = new ProductDTO();
        if (product != null) {
            BeanUtils.copyProperties(product, productDTO);
            return new ResponseEntity<>(productDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

//    @PatchMapping(value = "/update")
//    public ResponseEntity<Map<String, String>> editProduct(@Valid @RequestBody ProductDTO productDTO,
//                                                            BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            Map<String, String> errorMap = bindingResult.getFieldErrors()
//                    .stream().collect(Collectors.toMap(
//                            e -> e.getField(), e -> e.getDefaultMessage()));
//            return new ResponseEntity<>(errorMap, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//        Product product = new Product();
//        BeanUtils.copyProperties(productDTO, product);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @PatchMapping(value = "/delete")
    public ResponseEntity<Void> deleteById(@RequestBody Product product) {
        if (product != null) {
            product.setDeleteFlag(true);
            iProductService.save(product);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
