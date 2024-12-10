package com.jeffrey.jeffreysblog.controller;


import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Project;
import com.jeffrey.jeffreysblog.service.ProjectService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/project")
@Slf4j
public class ProjectController {

    @Resource
    ProjectService projectService;

    @PostMapping("/addproject")
    public Result addProject(@RequestBody Project project) {
        return projectService.addProject(project);
    }

    @PostMapping("/deleteproject")
    public Result deleteProject(@RequestParam String projectId) {
        return projectService.deleteProject(projectId);
    }

    @PostMapping("/updateproject")
    public Result updateProject(@RequestBody Project project) {
        return projectService.updateProject(project);
    }

    @GetMapping("getprojectbyid")
    public Result getProjectById(@RequestParam String projectId) {
        return projectService.getProjectById(projectId);
    }

    @GetMapping("/getrangeprojects")
    public Result getRangeProjects(@RequestParam Integer beginPage,@RequestParam Integer count) {
        return projectService.getRangeProjects(beginPage, count);
    }

    @GetMapping("/getallprojects")
    public Result getAllProjects() {
        return projectService.getAllProjects();
    }

}
