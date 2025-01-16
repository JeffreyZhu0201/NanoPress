package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.mapper.AuthorMapper;
import com.jeffrey.jeffreysblog.service.AuthorService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthorServiceImpl implements AuthorService {

    @Resource
    AuthorMapper authorMapper;

    public Result getAuthorNameById(String authorId) {

        String authorName = authorMapper.getAuthorNameById(authorId);
        if(authorName != null) {
            Map<String,Object> map = new HashMap<>();
            map.put("authorName",authorName);
            return Result.success("200","success",map);
        } else {
            return Result.success("200","faild",null);
        }
    }
}
