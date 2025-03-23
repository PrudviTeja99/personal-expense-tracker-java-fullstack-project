package com.teja.auth.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class UserAuthService {
    private static final Logger log = LoggerFactory.getLogger(UserAuthService.class);
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ObjectMapper objectMapper;
    @Value("${authorization.server.keycloak.tokenURL}")
    private String tokenURL;
    @Value("${authorization.server.keycloak.grant-type}")
    private String grant_type;
    @Value("${authorization.server.keycloak.client-id}")
    private String client_id;
    @Value("${authorization.server.keycloak.client-secret}")
    private String client_secret;
    @Value("${authorization.server.keycloak.redirect-url}")
    private String redirect_url;
    public String userLogin(String code){
        try{
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
            MultiValueMap<String,String> formData = new LinkedMultiValueMap<>();
            formData.add("grant_type",grant_type);
            formData.add("client_id",client_id);
            formData.add("redirect_uri",redirect_url);
            formData.add("client_secret",client_secret);
            formData.add("code",code);
            HttpEntity httpEntity = new HttpEntity(formData,httpHeaders);
            ResponseEntity<String> accessTokenResponse = restTemplate.exchange(tokenURL, HttpMethod.POST,httpEntity,String.class);
            JSONObject accessTokenResponseJSONObject = new JSONObject(accessTokenResponse.getBody());
            return accessTokenResponseJSONObject.getString("access_token");
        }
        catch (Exception exception){
            log.error("Unable to login");
            throw new RuntimeException("Unable to login");
        }
    }
}
