package com.jeffrey.jeffreysblog.utils.config;

import com.jeffrey.jeffreysblog.utils.interceptors.JWTInterceptors;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new JWTInterceptors())
                .addPathPatterns("/test")  // 其他接口token验证
                .excludePathPatterns("/account/login");  // 所有用户都放行
    }
}
