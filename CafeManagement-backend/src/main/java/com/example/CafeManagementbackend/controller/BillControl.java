package com.example.CafeManagementbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@RequestMapping("api/v1/")
public interface BillControl
{
    @PostMapping("bill/generateBill")
    ResponseEntity<String > generateBill(@RequestBody Map<String, Object> requestMap);

}
