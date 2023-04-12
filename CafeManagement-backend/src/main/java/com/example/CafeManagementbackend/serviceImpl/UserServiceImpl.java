package com.example.CafeManagementbackend.serviceImpl;

import com.example.CafeManagementbackend.error.Cafeutils;
import com.example.CafeManagementbackend.model.User;
import com.example.CafeManagementbackend.repo.UserRepo;
import com.example.CafeManagementbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private  final UserRepo userRepo;
    @Override
    public ResponseEntity<String> signup(Map<String, String> requestMap) {
        try{
            if(this.validateSignupMap(requestMap)){
                User user= userRepo.findByEmailId(requestMap.get("email"));
                if(Objects.isNull(user)){
                    userRepo.save(this.getUserFromMap(requestMap));
                    return Cafeutils.getResponseEntity("Successfully Registered", HttpStatus.OK);
                }else{
                    return Cafeutils.getResponseEntity("Email exists",HttpStatus.BAD_REQUEST);
                }
            }else {
                return  Cafeutils.getResponseEntity("Invalid Data",HttpStatus.BAD_REQUEST);
            }
            }catch (Exception exception) {
            exception.printStackTrace();
        }
        return  Cafeutils.getResponseEntity("Something Went Wrong", HttpStatus.INTERNAL_SERVER_ERROR);
    }



    private boolean validateSignupMap(Map<String, String> requestMap) {
        if(requestMap.containsKey("firstName")
                && requestMap.containsKey("lastName")
        && requestMap.containsKey("userName")
        && requestMap.containsKey("email")
        && requestMap.containsKey("password")){
            return true;
        }
        return  false;
    }
    private User getUserFromMap(Map<String, String> requestMap) {
        User user= new User();
        user.setFirstName(requestMap.get("firstName"));
        user.setLastName(requestMap.get("lastName"));
        user.setUserName(requestMap.get("userName"));
        user.setEmail(requestMap.get("email"));
        user.setPassword(requestMap.get("password"));
        user.setStatus("false");
        user.setRole("user");
        return user;

    }
}
