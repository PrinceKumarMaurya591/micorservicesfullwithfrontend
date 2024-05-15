package com.javatechie.controller;

import com.javatechie.config.Decrypt;
import com.javatechie.config.EncryptString;
import com.javatechie.dto.AuthRequest;
import com.javatechie.entity.UserCredential;
import com.javatechie.service.AuthService;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins="*")
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService service;

    @Autowired
    private AuthenticationManager authenticationManager;
    
 // Inject the EncryptString class for encryption
    @Autowired
    private EncryptString encryptString;

    // Inject the Decrypt class for decryption
    @Autowired
    private Decrypt decrypt;
    

    @PostMapping("/register")
    public String addNewUser(@RequestBody UserCredential user) {
    	try {
    		System.out.println("Encrypted user details:   "+user.getEmail()+user.getName()+user.getPassword());
    	 // Encrypt sensitive user data before saving
        String encryptedUserName = encryptString.encrypt(user.getName(), "rrhysrg54e75sy6y");
      System.out.println("encryptedUserName:   "+encryptedUserName);
   // Set encrypted data to user object
      user.setName(encryptedUserName);
        return service.saveUser(user);
    }
    	catch (Exception e) {
            e.printStackTrace();
            return "Error occurred: " + e.getMessage();
        }
    }
    	
    	
    @PostMapping("/token")
    public ResponseEntity<String> getToken(@RequestBody AuthRequest authRequest) {
        try {
            String encryptedUserName = encryptString.encrypt(authRequest.getUsername(), "rrhysrg54e75sy6y");
            Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(encryptedUserName, authRequest.getPassword()));
            if (authenticate.isAuthenticated()) {
                String token = service.generateToken(authRequest.getUsername());
                System.out.println("token:-"+token);
                return ResponseEntity.ok().body(token);
            } else {
                return ResponseEntity.status(HttpStatus.SC_UNAUTHORIZED).body("Invalid access");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage());
        }
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token) {
        service.validateToken(token);
        return "Token is valid";
    }
}
