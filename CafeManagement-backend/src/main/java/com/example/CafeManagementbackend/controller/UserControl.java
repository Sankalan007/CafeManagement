package com.example.CafeManagementbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@RequestMapping("/api/v1/auth")
public interface UserControl {
    @PostMapping("/register")
    public ResponseEntity<String> signup(@RequestBody Map<String,String> requestMap);
}
