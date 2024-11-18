package com.jeffrey.jeffreysblog.utils.jwtUtils.interceptors;

import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jeffrey.jeffreysblog.utils.jwtUtils.JWTUtils;
import jakarta.annotation.Nonnull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class JWTInterceptors implements HandlerInterceptor {
    @Override
    public boolean preHandle(@Nonnull jakarta.servlet.http.HttpServletRequest request, @Nonnull jakarta.servlet.http.HttpServletResponse response, @Nonnull Object handler) throws Exception {
        Map<String,Object> map = new HashMap<>();
        // 获取请求头中令牌
        String token = request.getHeader("token");
        try {
            // 验证令牌
            JWTUtils.verify(token);
            return true;  // 放行请求
        } catch (SignatureVerificationException e) {
            log.error(e.getMessage());
            map.put("msg","无效签名！");
        }catch (TokenExpiredException e){
            log.error(e.getMessage());
            map.put("msg","token过期");
        }catch (AlgorithmMismatchException e){
            log.error(e.getMessage());
            map.put("msg","算法不一致");
        }catch (Exception e){
            log.error(e.getMessage());
            map.put("msg","无权限，请先登录");
        }
        map.put("state",false);  // 设置状态
        // 将map以json的形式响应到前台  map --> json  (jackson)
        String json = new ObjectMapper().writeValueAsString(map);
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(json);
        return false;
    }
}
