package com.jeffrey.jeffreysblog.mapper;


import com.jeffrey.jeffreysblog.entity.Post;
import com.jeffrey.jeffreysblog.entity.Project;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ProjectMapper {

    Boolean addProject(@Param("project") Project project);

    Boolean deleteProject(String projectId);

    Boolean updateProject(@Param("project") Project project);

    Project getProjectById(@NonNull String projectId);

    List<Project> getRangeProjects(Integer beginIndex, Integer count);

    List<Project> getAllProjects();

    Integer getLength();

}
