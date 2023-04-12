package com.example.CafeManagementbackend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;

@NamedQuery(name="User.findByEmailId",query="select u from User u where u.email=:email")
@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name="_user")
public class User implements Serializable {
    private static  final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String userName;
    private String email;
     private String password;
     private String status;
     private String role;

}
