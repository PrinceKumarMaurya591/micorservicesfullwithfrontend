package com.microservices.product.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservices.product.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // You can add custom queries if needed
}
