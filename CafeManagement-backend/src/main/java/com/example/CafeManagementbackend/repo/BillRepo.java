package com.example.CafeManagementbackend.repo;

import com.example.CafeManagementbackend.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepo extends JpaRepository<Bill,Integer> {
}
