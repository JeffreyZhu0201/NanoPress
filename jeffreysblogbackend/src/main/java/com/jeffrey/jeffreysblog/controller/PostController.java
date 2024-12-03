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
       return postService.addPost(post);
    }

    @PostMapping("/deletepost")
    public Result deletePost(@RequestParam(value = "id") Integer id) {
        return postService.deletePost(id);
    }

    @PostMapping("/updatepost")
    public Result updatePost(@RequestBody Post post) {
        return postService.updatePost(post);
    }

    @GetMapping("/getpostbyid")
    public Result getPostById(@RequestParam(value="id") Integer id){
        return postService.getPostById(id);
    }

    @GetMapping("/getrangeposts")
    public Result getRangePosts(@RequestParam(value = "beginPage") Integer beginPage,@RequestParam(value = "count") Integer count) {
        return postService.getRangePosts(beginPage,count);
    }

}
