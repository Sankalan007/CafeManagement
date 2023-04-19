package com.example.CafeManagementbackend.service;

import com.example.CafeManagementbackend.wrapper.UserWrapper;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface UserService {
    public ResponseEntity<String>signup(Map<String,String> requestMap);

    ResponseEntity<String> login(Map<String, String> requestMap);

    ResponseEntity<List<UserWrapper>> getAllUser();
}
