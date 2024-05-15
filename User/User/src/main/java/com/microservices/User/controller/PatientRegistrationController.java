package com.microservices.User.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservices.User.entity.Patient;
import com.microservices.User.service.PatientService;

//PatientRegistrationService

@RestController
@RequestMapping("/api/patients")
public class PatientRegistrationController {

 @Autowired
 private PatientService patientRegistrationService;

 @PostMapping
 public ResponseEntity<Patient> registerPatient(@RequestBody Patient patient) {
     Patient registeredPatient = patientRegistrationService.registerPatient(patient);
     return new ResponseEntity<>(registeredPatient, HttpStatus.CREATED);
 }

 @GetMapping("/{patientId}")
 public ResponseEntity<Patient> getPatientDetails(@PathVariable Long patientId) {
     Patient patient = patientRegistrationService.getPatientDetails(patientId);
     return new ResponseEntity<>(patient, HttpStatus.OK);
 }

 @PutMapping("/{patientId}")
 public ResponseEntity<Patient> updatePatientDetails(@PathVariable Long patientId, @RequestBody Patient updatedPatient) {
     Patient patient = patientRegistrationService.updatePatientDetails(patientId, updatedPatient);
     return new ResponseEntity<>(patient, HttpStatus.OK);
 }
}
