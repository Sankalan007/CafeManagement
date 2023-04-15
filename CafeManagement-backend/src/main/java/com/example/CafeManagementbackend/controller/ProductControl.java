package com.example.CafeManagementbackend.controller;

import com.example.CafeManagementbackend.wrapper.ProductWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/api/v1")
public interface ProductControl {
    @PostMapping("/product/add")
    public ResponseEntity<String> addProduct(@RequestBody Map<String,String> requestMap);

    @GetMapping("/product/get")
    public ResponseEntity<List<ProductWrapper>> getAllProduct();

    @PostMapping("/product/update")
    public ResponseEntity<String> updateProduct(@RequestBody Map<String,String> requestMap);

    @PostMapping("/product/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Integer id);
}
