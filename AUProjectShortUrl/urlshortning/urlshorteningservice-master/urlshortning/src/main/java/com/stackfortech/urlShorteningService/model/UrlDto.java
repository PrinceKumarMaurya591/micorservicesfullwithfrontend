package com.stackfortech.urlShorteningService.model;

public class UrlDto
{
    private String url;
    private String expirationDate;  //optional
    private String clientIpAddress;

    public String getClientIpAddress() {
		return clientIpAddress;
	}

	public void setClientIpAddress(String clientIpAddress) {
		this.clientIpAddress = clientIpAddress;
	}

	public UrlDto(String clientIpAddress, String url, String expirationDate) {
        this.url = url;
        this.expirationDate = expirationDate;
        this.clientIpAddress=clientIpAddress;
    }

    public UrlDto() {
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }

    @Override
    public String toString() {
        return "UrlDto{" +
                "url='" + url + '\'' +
                 ",clientIpAddress="+ clientIpAddress+
                ", expirationDate='" + expirationDate + '\'' +
                
                '}';
    }
}
