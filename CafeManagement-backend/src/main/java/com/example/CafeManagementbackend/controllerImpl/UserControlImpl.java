package com.example.CafeManagementbackend.controllerImpl;

import com.example.CafeManagementbackend.controller.UserControl;
import com.example.CafeManagementbackend.error.Cafeutils;
import com.example.CafeManagementbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequiredArgsConstructor
@CrossOrigin
@RestController
public class UserControlImpl implements UserControl {
    private final UserService userService;
    @Override
    public ResponseEntity<String> signup(Map<String, String> requestMap) {
        try{
            return userService.signup(requestMap);
        }catch(Exception ex){
            ex.printStackTrace();

        }
        return Cafeutils.getResponseEntity("Something Went Wrong", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
