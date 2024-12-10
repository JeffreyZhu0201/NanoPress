package com.jeffrey.jeffreysblog.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    private String projectId;
    private String title;
    private String intro;
    private Date date;
    private String content;
}
