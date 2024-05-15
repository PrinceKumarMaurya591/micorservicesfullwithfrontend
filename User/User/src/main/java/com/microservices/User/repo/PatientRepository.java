package com.microservices.User.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservices.User.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{

}
