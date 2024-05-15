package com.stackfortech.urlShorteningService.model;

import java.time.LocalDateTime;

public class UrlResponseDto
{
    private String originalUrl;
    private String shortLink;
    private String expirationDate;
    private String clientIpAddress;

    public String getClientIpAddress() {
		return clientIpAddress;
	}

	public void setClientIpAddress(String clientIpAddress) {
		this.clientIpAddress = clientIpAddress;
	}

	public UrlResponseDto(String clientIpAddress,String originalUrl, String shortLink, String expirationDate) {
        this.originalUrl = originalUrl;
        this.shortLink = shortLink;
        this.expirationDate = expirationDate;
        this.clientIpAddress=clientIpAddress;
    }

    public UrlResponseDto() {
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public void setOriginalUrl(String originalUrl) {
        this.originalUrl = originalUrl;
    }

    public String getShortLink() {
        return shortLink;
    }

    public void setShortLink(String shortLink) {
        this.shortLink = shortLink;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }

    @Override
    public String toString() {
        return "UrlResponseDto{" +
                "originalUrl='" + originalUrl + '\'' +
                ", shortLink='" + shortLink + '\'' +
                 ",clientIpAddress="+ clientIpAddress+
                ", expirationDate=" + expirationDate +
                '}';
    }
}
