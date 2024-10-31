package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.mapper.PostMapper;
import com.jeffrey.jeffreysblog.service.PostService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PostServiceImpl implements PostService {

    @Resource
    PostMapper postMapper;

    public Boolean addPost(Post post) {
        post.setCreateDatetime(new Date()); //发布时间设置为服务器系统时间
        return postMapper.addPost(post);
    }

    public Boolean deletePost(Integer id) {
        return postMapper.deletePost(id);
    }

    public Boolean updatePost(Post post) {
        return postMapper.updatePost(post);
    }

    public Post getPostById(Integer id) {
        return postMapper.getPostById(id);
    }

}
