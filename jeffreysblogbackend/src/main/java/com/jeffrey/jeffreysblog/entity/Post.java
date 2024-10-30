package com.jeffrey.jeffreysblog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    private String id;
    private String authorId;
    private String title;
    private Date createDatetime;
    private String content;
}
