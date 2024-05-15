package com.microservices.User.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservices.User.service.UniqueIdentifierService;





@RestController
@RequestMapping("/patient")
public class UniqueIdentifierController {

    @Autowired
    private UniqueIdentifierService uniqueIdentifierService;

    @GetMapping("/{patientId}/identifier")
    public ResponseEntity<String> getUniqueIdentifier(@PathVariable Long patientId) {
        String uniqueIdentifier = uniqueIdentifierService.generateUniqueIdentifier(patientId);
        return new ResponseEntity<>(uniqueIdentifier, HttpStatus.OK);
    }
}
