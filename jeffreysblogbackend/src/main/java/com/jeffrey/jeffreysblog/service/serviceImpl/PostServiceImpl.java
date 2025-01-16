package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.mapper.PostMapper;
import com.jeffrey.jeffreysblog.service.PostService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class PostServiceImpl implements PostService {

    @Resource
    PostMapper postMapper;

    public Result addPost(@NotNull Post post) {
        post.setDate(new Date()); //发布时间设置为服务器系统时间
        post.setId(String.valueOf(UUID.randomUUID()));

        post.setCategoryId(JSONArray.toJSON(post.getCategoryId()).toString());

        if(postMapper.addPost(post)){
            post.setCategoryId(JSON.parseArray(post.getCategoryId().toString()));
            return Result.success("200","插入成功",post);
        }
        else{
            return Result.error("400","插入失败",null);
        }
    }

    public Result deletePost(String postId) {
        if(postMapper.deletePost(postId)){
            Map<String,String> map = new HashMap<>();
            map.put("postId",postId);
            return Result.success("200","删除成功",map);
        }
        else{
            return Result.error("400","删除失败",null);
        }
    }

    public Result updatePost(Post post) {
        post.setDate(new Date()); //发布时间设置为服务器系统时间
        post.setCategoryId(JSONArray.toJSON(post.getCategoryId()).toString());
        if(postMapper.updatePost(post)){
            post.setCategoryId(JSON.parseArray(post.getCategoryId().toString()));
            return Result.success("200","更新成功",post);
        }
        else{
            return Result.error("400","更新失败",null);
        }
    }

    public Result getPostById(String postId) {
        Post post = postMapper.getPostById(postId);
        if(post != null){
            post.setCategoryId(JSON.parseArray(post.getCategoryId().toString()));
            return Result.success("200","获取成功",post);
        }
        else{
            return Result.error("400","获取失败",null);
        }
    }

    @Override
    public Result getRangePosts(Integer beginPage, Integer count) {
        List<Post> posts = postMapper.getRangePosts((beginPage-1)*count,count);
        Map<String,Object> map = new HashMap<>();
        posts.forEach(post -> {
            post.setCategoryId(JSON.parseArray(post.getCategoryId().toString()));
        });
        Integer postsLength = postMapper.getLength();
        map.put("posts",posts);
        map.put("count",postsLength);
        return Result.success("400","获取成功",map);
    }

    @Override
    public Result getAllPosts(){
        List<Post> posts = postMapper.getAllPosts();
        posts.forEach(post -> {
            post.setCategoryId(JSON.parseArray(post.getCategoryId().toString()));
        });
        return Result.success(posts);
    }
}
