package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.mapper.PostMapper;
import com.jeffrey.jeffreysblog.service.PostService;
import jakarta.annotation.Resource;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PostServiceImpl implements PostService {

    @Resource
    PostMapper postMapper;

    public Result addPost(@NotNull Post post) {
        post.setCreateDatetime(new Date()); //发布时间设置为服务器系统时间
        if(postMapper.addPost(post)){
            return Result.success("200","插入成功",post);
        }
        else{
            return Result.error("400","插入失败",null);
        }
    }

    public Result deletePost(Integer id) {
        if(postMapper.deletePost(id)){
            return Result.success("200","删除成功",id);
        }
        else{
            return Result.error("400","删除失败",null);
        }
    }

    public Result updatePost(Post post) {
        if(postMapper.updatePost(post)){
            return Result.success("200","更新成功",null);
        }
        else{
            return Result.error("400","更新失败",null);
        }
    }

    public Result getPostById(Integer id) {
        Post post = postMapper.getPostById(id);
        if(post != null){
            return Result.success("200","获取成功",post);
        }
        else{
            return Result.error("400","获取失败",null);
        }
    }

    @Override
    public Result getRangePosts(Integer beginPage, Integer count) {

        return Result.success("400","获取成功",postMapper.getRangePosts((beginPage-1)*count,count));
    }
}
