package com.javatechie.config;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.stereotype.Component;

import java.util.Base64;


@Component
public class EncryptString {
    private static final String CHARACTER_ENCODING = "UTF-8";
    private static final String CIPHER_TRANSFORMATION = "AES/CBC/PKCS5PADDING";
    private static final String AES_ENCRYPTION_ALGORITHM = "AES";

    public static String encrypt(final String plainText, final String enckey) throws Exception {
        String encryptedText = "";
        try {
            final Cipher cipher = Cipher.getInstance(CIPHER_TRANSFORMATION);
            final byte[] key = enckey.getBytes(CHARACTER_ENCODING);
            final SecretKeySpec secretKey = new SecretKeySpec(key, AES_ENCRYPTION_ALGORITHM);
            final IvParameterSpec ivParameterSpec = new IvParameterSpec(key);
            cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivParameterSpec);
            final byte[] cipherText = cipher.doFinal(plainText.getBytes(CHARACTER_ENCODING));
            final Base64.Encoder encoder = Base64.getEncoder();
            encryptedText = encoder.encodeToString(cipherText);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
        return encryptedText;
    }
}
