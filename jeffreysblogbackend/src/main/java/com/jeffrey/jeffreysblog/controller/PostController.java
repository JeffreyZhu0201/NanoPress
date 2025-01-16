package com.jeffrey.jeffreysblog.controller;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Category;
import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.service.CategoryService;
import com.jeffrey.jeffreysblog.service.PostService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {
    @Resource
    public PostService postService;

    @Resource
    private CategoryService categoryService;

    @PostMapping(value = "/addpost")
    public Result addPost(@RequestBody Post post) {
       return postService.addPost(post);
    }

    @PostMapping("/deletepost")
    public Result deletePost(@RequestParam(value = "postId") String postId) {
        return postService.deletePost(postId);
    }

    @PostMapping("/updatepost")
    public Result updatePost(@RequestBody Post post) {
        return postService.updatePost(post);
    }

    @GetMapping("/getpostbyid")
    public Result getPostById(@RequestParam(value="postId") String postId){
        return postService.getPostById(postId);
    }

    @GetMapping("/getrangeposts")
    public Result getRangePosts(@RequestParam(value = "beginPage") Integer beginPage,@RequestParam(value = "count") Integer count) {
        return postService.getRangePosts(beginPage,count);
    }

    @GetMapping("/getallposts")
    public Result getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/getcategorybyid")
    public Result getCategoryById(@RequestParam(value = "categoryId") String categoryId) {
        return categoryService.getCategoryById(categoryId);
    }

    @PostMapping("/addcategory")
    public Result addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    @PostMapping("/deletecategory")
    public Result deleteCategory(@RequestParam(value = "categoryId") String categoryId) {
        return categoryService.deleteCategory(categoryId);
    }

    @PostMapping("/updatecategory")
    public Result updateCategory(Category category) {
        return categoryService.updateCategory(category);
    }
}
