package com.javatechie.config;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Base64.Decoder;
@Component
public class Decrypt {
    public String decrypt(String data) throws Exception {
        try {
            String key = "rrhysrg54e75sy6y";
            String iv = "rrhysrg54e75sy6y";

            Decoder decoder = Base64.getDecoder();
            byte[] encrypted1 = decoder.decode(data);

            Cipher cipher = Cipher.getInstance("AES/CBC/NoPadding");
            SecretKeySpec keyspec = new SecretKeySpec(key.getBytes(), "AES");
            IvParameterSpec ivspec = new IvParameterSpec(iv.getBytes());
            cipher.init(Cipher.DECRYPT_MODE, keyspec, ivspec);

            byte[] original = cipher.doFinal(encrypted1);
            String originalString = new String(original);

            return originalString.trim();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
