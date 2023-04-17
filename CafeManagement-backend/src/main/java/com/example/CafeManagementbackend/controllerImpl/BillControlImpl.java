package com.example.CafeManagementbackend.controllerImpl;

import com.example.CafeManagementbackend.controller.BillControl;
import com.example.CafeManagementbackend.service.BillService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
@RestController
@RequiredArgsConstructor

public class BillControlImpl implements BillControl {

    @Autowired
    private BillService billService;
    @Override
    public ResponseEntity<String> generateBill(Map<String, Object> requestMap) {
        try{
            return billService.generateBill(requestMap);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
