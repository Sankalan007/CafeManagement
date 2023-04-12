package com.example.CafeManagementbackend.repo;

import com.example.CafeManagementbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends JpaRepository<User,Integer> {

    User findByEmailId(@Param("email") String email);
}
