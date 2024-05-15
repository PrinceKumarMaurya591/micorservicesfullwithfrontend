package com.microservices.User.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.microservices.User.dto.OrderResponse;
import com.microservices.User.dto.ProductResponse;
import com.microservices.User.dto.UserDetailsWithOrderResponse;
import com.microservices.User.dto.UserDetailsWithProductResponse;
import com.microservices.User.dto.UserRequest;
import com.microservices.User.entity.User;
import com.microservices.User.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    
    @GetMapping("/{userId}/product")
    public ProductResponse getProductDetailsForUser(@PathVariable Long userId) {
        // Fetch product details for the user using the UserService
        return userService.getProductByIdFromProductService(userId);
    }
    
    @GetMapping("/{userId}/details")
    public UserDetailsWithProductResponse getUserDetailsWithProduct(@PathVariable Long userId) {
        // Fetch user and product details using the UserService
        return userService.getUserDetailsWithProduct(userId);
    }
    

    @GetMapping("/{userId}/order")
    public OrderResponse getOrderDetailsForUser(@PathVariable Long userId) {
        // Fetch order details for the user using the UserService
        return userService.getOrderByIdFromOrderService(userId);
    }
    
    
    @GetMapping("/{userId}/order/details")
    public UserDetailsWithOrderResponse getUserDetailsWithOrder(@PathVariable Long userId) {
        // Fetch user and order details using the UserService
        return userService.getUserDetailsWithOrder(userId);
    }
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody UserRequest userRequest) {
    	System.out.println("hello user creating ");
        return userService.createUser(userRequest);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody UserRequest userRequest) {
        return userService.updateUser(id, userRequest);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
