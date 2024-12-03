package com.jeffrey.jeffreysblog.entity;

import com.alibaba.fastjson.JSONObject;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    private String postId;
    private String title;
    private Object author;
    private String readNum;
    private Date date;
    private String content;
    private Object  category;
}
