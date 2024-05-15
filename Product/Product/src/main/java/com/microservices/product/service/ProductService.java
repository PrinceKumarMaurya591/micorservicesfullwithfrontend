package com.microservices.product.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import com.microservices.product.dto.ProductRequest;
import com.microservices.product.dto.ProductResponse;
import com.microservices.product.entity.Product;
import com.microservices.product.repo.ProductRepository;

import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    
   
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product createProduct(ProductRequest productRequest) {
        // Convert ProductRequest to Product
        Product newProduct = new Product();
        newProduct.setName(productRequest.getName());
        newProduct.setPrice(productRequest.getPrice());

        // Save the new product to the database
        return productRepository.save(newProduct);
    }

    public Product updateProduct(Long id, ProductRequest productRequest) {
        // Find the product by id
        Optional<Product> optionalProduct = productRepository.findById(id);

        if (optionalProduct.isPresent()) {
            // Update the fields of the existing product
            Product existingProduct = optionalProduct.get();
            existingProduct.setName(productRequest.getName());
            existingProduct.setPrice(productRequest.getPrice());

            // Save the updated product to the database
            return productRepository.save(existingProduct);
        } else {
            // If the product with the given id is not found, you may choose to throw an exception or return null
            return null;
        }
    }

    public void deleteProduct(Long id) {
        // Delete the product by id
        productRepository.deleteById(id);
    }
}
