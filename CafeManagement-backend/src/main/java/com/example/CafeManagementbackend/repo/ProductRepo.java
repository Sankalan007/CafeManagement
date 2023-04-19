package com.example.CafeManagementbackend.repo;

import com.example.CafeManagementbackend.model.Product;
import com.example.CafeManagementbackend.wrapper.ProductWrapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product,Integer> {
List<ProductWrapper> getAllProducts();

}
