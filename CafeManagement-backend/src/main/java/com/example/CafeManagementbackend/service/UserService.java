package com.example.CafeManagementbackend.service;

import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface UserService {
    public ResponseEntity<String>signup(Map<String,String> requestMap);

    ResponseEntity<String> login(Map<String, String> requestMap);
}
