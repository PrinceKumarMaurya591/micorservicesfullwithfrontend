package com.microservices.gateway.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http
            
            .csrf(csrf->csrf.disable()); // Disable CSRF protection

        return http.build();
    }
}








//
//import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.annotation.Order;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
//import org.springframework.web.cors.reactive.CorsWebFilter;
//import org.springframework.web.filter.reactive.HiddenHttpMethodFilter;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public CorsWebFilter corsWebFilter() {
//        CorsConfiguration corsConfig = new CorsConfiguration();
//        corsConfig.applyPermitDefaultValues();
//        corsConfig.addAllowedMethod("*");
//        corsConfig.addAllowedHeader("*");
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", corsConfig);
//        return new CorsWebFilter(source);
//    }
//    
//   
//    
//  @Bean
//  public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
//      http
//          
//          .csrf(csrf->csrf.disable()); // Disable CSRF protection
//
//      return http.build();
//  }
//    
//    
//}
