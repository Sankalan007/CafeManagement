package com.example.CafeManagementbackend.repo;

import com.example.CafeManagementbackend.model.User;
import com.example.CafeManagementbackend.wrapper.UserWrapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {

    User findByEmailId(@Param("email") String email);
    List<UserWrapper>getAllUser();

    @Override
    Optional<User> findById(Integer integer);

    List<UserWrapper>getByUsername(@Param("username") String currentUser);
}
