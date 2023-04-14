package com.example.CafeManagementbackend.controllerImpl;

import com.example.CafeManagementbackend.controller.ProductControl;
import com.example.CafeManagementbackend.service.ProductService;
import com.example.CafeManagementbackend.wrapper.ProductWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class ProductControlImpl implements ProductControl {
    @Autowired
    ProductService productService;
    @Override
    public ResponseEntity<String> addProduct(Map<String, String> requestMap) {
        try{
            return productService.addProduct(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>("There is internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<List<ProductWrapper>> getAllProduct() {
        try{
            return productService.getAllProduct();
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<String> updateProduct(Map<String, String> requestMap) {
        try{
           return productService.updateProduct(requestMap);

        }catch(Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong with updating",HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
