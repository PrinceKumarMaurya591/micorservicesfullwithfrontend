package com.microservices.User.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.microservices.User.dto.OrderResponse;
import com.microservices.User.dto.ProductResponse;
import com.microservices.User.dto.UserDetailsWithOrderResponse;
import com.microservices.User.dto.UserDetailsWithProductResponse;
import com.microservices.User.dto.UserRequest;
import com.microservices.User.entity.User;
import com.microservices.User.repo.UserRepository;

import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    
    @Autowired
    private WebClient.Builder webClientBuilder;

    // Other methods...

    public ProductResponse getProductByIdFromProductService(Long productId) {
        // Make a GET request to the Product Service to get product details by ID
        return webClientBuilder.build()
                .get()
                .uri("http://localhost:9091/api/products/{productId}", productId)
                .retrieve()
                .bodyToMono(ProductResponse.class)
                .block();
    }
    
    
    
    public UserDetailsWithProductResponse getUserDetailsWithProduct(Long userId) {
        User user = getUserById(userId);
        ProductResponse product = getProductByIdFromProductService(userId);

        // Map user and product details to UserDetailsWithProductResponse
        UserDetailsWithProductResponse response = new UserDetailsWithProductResponse();
        response.setUserId(userId);
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());

        if (product != null) {
            response.setProductId(product.getId());
            response.setProductName(product.getName());
            response.setProductPrice(product.getPrice());
        }

        return response;
    }
    

    public OrderResponse getOrderByIdFromOrderService(Long orderId) {
        // Make a GET request to the Order Service to get order details by ID
        return webClientBuilder.build()
                .get()
                .uri("http://localhost:9090/api/orders/{orderId}", orderId)
                .retrieve()
                .bodyToMono(OrderResponse.class)
                .block();
    }
    
    
    
    public UserDetailsWithOrderResponse getUserDetailsWithOrder(Long userId) {
        User user = getUserById(userId);
        OrderResponse order = getOrderByIdFromOrderService(userId);

        // Map user and order details to UserDetailsWithOrderResponse
        UserDetailsWithOrderResponse response = new UserDetailsWithOrderResponse();
        response.setUserId(userId);
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());

        if (order != null) {
            response.setOrderId(order.getId());
            response.setCustomarName(order.getCustomerName());
            // Add other order-related fields as needed
        }

        return response;
    }
    
    
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(UserRequest userRequest) {
        // Convert UserRequest to User
    	System.out.println("username------"+userRequest.getUsername());
        User newUser = new User();
        newUser.setUsername(userRequest.getUsername());
        newUser.setEmail(userRequest.getEmail());

        // Save the new user to the database
        return userRepository.save(newUser);
    }

    public User updateUser(Long id, UserRequest userRequest) {
        // Find the user by id
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()) {
            // Update the fields of the existing user
            User existingUser = optionalUser.get();
            existingUser.setUsername(userRequest.getUsername());
            existingUser.setEmail(userRequest.getEmail());

            // Save the updated user to the database
            return userRepository.save(existingUser);
        } else {
            // If the user with the given id is not found, you may choose to throw an exception or return null
            return null;
        }
    }

    public void deleteUser(Long id) {
        // Delete the user by id
        userRepository.deleteById(id);
    }
}
