package com.example.CafeManagementbackend.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Cafeutils {
    public static ResponseEntity<String>getResponseEntity(String response, HttpStatus httpStatus){
        return new ResponseEntity<String>("{\"message\":\""+response+"\"}",httpStatus);
    }

}
