package com.microservices.User.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservices.User.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
