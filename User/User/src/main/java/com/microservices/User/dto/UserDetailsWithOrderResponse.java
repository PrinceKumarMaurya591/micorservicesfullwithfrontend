package com.microservices.User.dto;

public class UserDetailsWithOrderResponse {

    private Long userId;
    private String username;
    private String email;

    private Long orderId;
    private String customarName;
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
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public String getCustomarName() {
		return customarName;
	}
	public void setCustomarName(String customarName) {
		this.customarName = customarName;
	}
	public UserDetailsWithOrderResponse(Long userId, String username, String email, Long orderId, String customarName) {
		super();
		this.userId = userId;
		this.username = username;
		this.email = email;
		this.orderId = orderId;
		this.customarName = customarName;
	}
	public UserDetailsWithOrderResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
    
}
