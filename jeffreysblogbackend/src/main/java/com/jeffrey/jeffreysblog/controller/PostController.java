package com.jeffrey.jeffreysblog.controller;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.service.PostService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class PostController {

    @Resource
    public PostService postService;

    @RequestMapping(value = "/addpost")
    public Result addPost(){
        Date createDatetime = new Date();

        Post post = new Post(null,"123321","title",createDatetime,"content");

        boolean res =  postService.addPost(post);

        if(res){
            return new Result("200","成功!",post);
        }
        else{
            return new Result("400","失败!",post);
        }
    }
}
