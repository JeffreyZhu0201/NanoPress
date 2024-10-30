package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.mapper.PostMapper;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {

    @Resource
    PostMapper postMapper;

    public boolean addPost(Post post) {
        return postMapper.addPost(post.getAuthorId(),post.getTitle(),post.getCreateDatetime(),post.getContent());
    }

}
