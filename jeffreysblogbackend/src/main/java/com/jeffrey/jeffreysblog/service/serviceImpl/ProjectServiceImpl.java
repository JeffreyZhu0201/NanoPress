package com.jeffrey.jeffreysblog.service.serviceImpl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.entity.Project;
import com.jeffrey.jeffreysblog.mapper.PostMapper;
import com.jeffrey.jeffreysblog.mapper.ProjectMapper;
import com.jeffrey.jeffreysblog.service.PostService;
import com.jeffrey.jeffreysblog.service.ProjectService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class ProjectServiceImpl implements ProjectService {

    @Resource
    ProjectMapper projectMapper;

    public Project stringfyParam(Project project){
//        project.setAuthor(JSON.toJSONString(project.getAuthor()));
//        project.setCategory(JSON.toJSONString(project.getCategory()));
        return project;
    }

    public Project parseParam(Project project){
//        project.setAuthor(JSON.parseObject(project.getAuthor().toString()));
//        project.setCategory(JSONObject.parseArray(project.getCategory().toString()));
        return project;
    }

    public Result addProject(@NotNull Project project) {
        project.setDate(new Date()); //发布时间设置为服务器系统时间
        project.setProjectId(String.valueOf(UUID.randomUUID()));
//        stringfyParam(project);

        if(projectMapper.addProject(project)){
            parseParam(project);
            return Result.success("200","插入成功",project);
        }
        else{
            return Result.error("400","插入失败",null);
        }
    }

    public Result deleteProject(String projectId) {
        if(projectMapper.deleteProject(projectId)){
            Map<String,String> map = new HashMap<>();
            map.put("projectId",projectId);
            return Result.success("200","删除成功",map);
        }
        else{
            return Result.error("400","删除失败",null);
        }
    }

    public Result updateProject(Project project) {
        project.setDate(new Date()); //发布时间设置为服务器系统时间
        stringfyParam(project);
        if(projectMapper.updateProject(project)){
            parseParam(project);
            return Result.success("200","更新成功",project);
        }
        else{
            return Result.error("400","更新失败",null);
        }
    }

    public Result getProjectById(String projectId) {
        Project project = projectMapper.getProjectById(projectId);
        if(project != null){
            parseParam(project);
            return Result.success("200","获取成功",project);
        }
        else{
            return Result.error("400","获取失败",null);
        }
    }

    @Override
    public Result getRangeProjects(Integer beginPage, Integer count) {
        List<Project> projects = projectMapper.getRangeProjects((beginPage-1)*count,count);
        projects.forEach(this::parseParam);
        Map<String,Object> map = new HashMap<>();
        Integer postsLength = projectMapper.getLength();
        map.put("projects",projects);
        map.put("count",postsLength);
        return Result.success("400","获取成功",map);
    }

    @Override
    public Result getAllProjects(){
        List<Project> projects = projectMapper.getAllProjects();
        projects.forEach(this::parseParam);
        return Result.success(projects);
    }
}
