package com.microservices.User.dto;

public class UserDetailsWithProductResponse {

    private Long userId;
    private String username;
    private String email;

    private Long productId;
    private String productName;
    private double productPrice;
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}
	public UserDetailsWithProductResponse(Long userId, String username, String email, Long productId,
			String productName, double productPrice) {
		super();
		this.userId = userId;
		this.username = username;
		this.email = email;
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
	}
	public UserDetailsWithProductResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

    
}
