package com.microservices.User.repo;

//UniqueIdentifierRepository

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservices.User.entity.UniqueIdentifier;

@Repository
public interface UniqueIdentifierRepository extends JpaRepository<UniqueIdentifier, Long> {
 
}
