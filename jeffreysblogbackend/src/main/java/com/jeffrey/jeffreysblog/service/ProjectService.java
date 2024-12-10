package com.jeffrey.jeffreysblog.service;

import com.jeffrey.jeffreysblog.common.Result;
import com.jeffrey.jeffreysblog.entity.Project;
import org.springframework.stereotype.Service;

@Service
public interface ProjectService {
    Project stringfyParam(Project project);

    Project parseParam(Project project);

    Result addProject(Project project);

    Result deleteProject(String projectId);

    Result updateProject(Project project);

    Result getProjectById(String projectId);

    Result getRangeProjects(Integer beginPage, Integer count);

    Result getAllProjects();
}
