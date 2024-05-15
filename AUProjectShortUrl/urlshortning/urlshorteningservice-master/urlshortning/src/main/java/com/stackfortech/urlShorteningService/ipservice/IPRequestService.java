package com.stackfortech.urlShorteningService.ipservice;

import jakarta.servlet.http.HttpServletRequest;

public interface IPRequestService {
	
	String getClientIp(HttpServletRequest request);

}
