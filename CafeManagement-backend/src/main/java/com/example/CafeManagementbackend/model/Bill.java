package com.example.CafeManagementbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;
import java.rmi.server.UID;

@Entity
@Data
@DynamicInsert
@DynamicUpdate
@Table


public class Bill implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer id;
    private String uuid;
    private String firstName;
    private String lastName;
    private String email;
    private String paymentMethod;
    private Integer totalAmount;
    private String orderType;


    @Column( columnDefinition = "json")
    private String productDetail;
    private String createdBy;
}
