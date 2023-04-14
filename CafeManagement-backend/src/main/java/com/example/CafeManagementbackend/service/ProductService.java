package com.example.CafeManagementbackend.service;

import com.example.CafeManagementbackend.wrapper.ProductWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface ProductService {
    ResponseEntity<String> addProduct(Map<String, String> requestMap);

    ResponseEntity<List<ProductWrapper>> getAllProduct();


    ResponseEntity<String> updateProduct(Map<String, String> requestMap);
}
