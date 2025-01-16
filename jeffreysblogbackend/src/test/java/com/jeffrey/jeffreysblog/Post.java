package com.jeffrey.jeffreysblog;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    private String id;
    private String title;
    private String authorId;
    private String readNum;
    private Date date;
    private String content;
    private Object categoryId;
}
