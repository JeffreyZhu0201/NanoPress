package com.jeffrey.jeffreysblog.controller;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.service.PostService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
public class PostController {
    @Resource
    public PostService postService;

    @PostMapping(value = "/addpost")
    public Result addPost(@RequestBody Post post) {
        boolean res =  postService.addPost(post);
        if(res){
            return new Result("200","成功!",post);
        }
        else{
            return new Result("400","失败!",post);
        }
    }

    @PostMapping("/deletepost")
    public Result deletePost(@RequestParam(value = "id") Integer id) {
        Boolean res = postService.deletePost(id);
        if(res){
            return new Result("200","deleted success!");
        }
        else{
            return new Result("400","deleted failed!");
        }
    }

    @PostMapping("/updatepost")
    public Result updatePost(@RequestBody Post post) {
        Boolean res = postService.updatePost(post);
        if(res){
            return new Result("200","updated success!",post);
        }
        else{
            return new Result("400","updated failed!",post);
        }
    }

    @GetMapping("/getpostbyid")
    public Result getPostById(@RequestParam(value="id") Integer id){
        Post post = postService.getPostById(id);
        if(post!=null){
            return new Result("200","success",post);
        }
        else{
            return new Result("400","failed");
        }
    }
}
