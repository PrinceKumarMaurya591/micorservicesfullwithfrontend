package com.javatechie.config;

import java.util.Base64;

public class Base64DecoderUtil {
	
	public static Long decodedUserId(String encodedUserId) {
		byte[] decodedBytes=Base64.getDecoder().decode(encodedUserId);
		String decodedString = new String(decodedBytes);
		
		//Assuming Decoded String is long value
		return Long.parseLong(decodedString);
	}

	
	public static String decodedUserName(String encodedUserName) {
		byte[] decodedBytes=Base64.getDecoder().decode(encodedUserName);
		String decodedString = new String(decodedBytes);
		
		//Assuming Decoded String is long value
		return decodedString;
	}

	
}
