package com.jeffrey.jeffreysblog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String id;
    private String userEmail;
    private String userName;
    private String userPassword;
    private Date registerDatetime;

}
