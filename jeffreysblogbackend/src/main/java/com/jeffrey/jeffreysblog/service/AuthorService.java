package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.common.Result;
import org.springframework.stereotype.Service;

@Service
public interface AuthorService {

    public Result getAuthorNameById(String authorId);

}
