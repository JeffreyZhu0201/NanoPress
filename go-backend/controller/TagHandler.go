/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 19:17:50
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-02 23:45:06
 * @FilePath: \go-backend\controller\TagHandler.go
 * @Description: 标签处理器，提供创建、删除、更新和获取标签的接口
 *
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved.
 */
package controller

import (
	"go-backend/Var"
	"go-backend/models"
	"go-backend/utils"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// CreateTag 创建标签的处理函数
func CreateTag(c *gin.Context) {
	// 获取标签参数
	tagName, exist := c.GetQuery("tag_name")
	if !exist {
		// 如果参数不存在，返回错误响应
		c.JSON(http.StatusBadRequest, models.Response{Code: 500, Message: Var.PARAMS_ERR})
		return
	}
	log.Default().Println(tagName)

	// 检查标签是否已存在
	var existingTag models.Tag
	if err := utils.DB.Model(&models.Tag{}).Where("tag_name = ?", tagName).First(&existingTag).Error; err == nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_EXIST})
		return
	}

	// 创建新标签
	var tag models.Tag
	tag.TagName = tagName
	if err := utils.DB.Model(&models.Tag{}).Create(&tag).Error; err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_ADD_FAILED})
		return
	}
	// 返回成功响应
	c.JSON(http.StatusAccepted, models.Response{Code: 200, Message: Var.TAG_ADD_SUCCESSFULLY, Data: tag})
}

// DeleteTag 删除标签的处理函数
func DeleteTag(c *gin.Context) {
	// 获取标签ID
	id, exist := c.GetQuery("tag_id")
	if !exist {
		// 如果参数不存在，返回错误响应
		c.JSON(http.StatusBadRequest, models.Response{Code: 500, Message: Var.PARAMS_ERR})
		return
	}
	// 将字符串ID转换为uint
	parsedID, err := strconv.ParseUint(id, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}
	var tag models.Tag
	tag.ID = uint(parsedID)
	log.Default().Println(tag.ID)

	// 删除标签
	if err := utils.DB.Where("id = ?", tag.ID).Delete(&models.Tag{}).Error; err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_DELETE_FAILED})
		return
	} else {
		// 返回成功响应
		c.JSON(http.StatusAccepted, models.Response{Code: 200, Message: Var.TAG_DELETE_SUCCESSFULLY, Data: map[string]interface{}{"ID": tag.ID}})
	}
}

// UpdateTag 更新标签的处理函数
func UpdateTag(c *gin.Context) {
	// 获取标签ID
	id, exist := c.GetQuery("tag_id")
	if !exist {
		// 如果参数不存在，返回错误响应
		c.JSON(http.StatusBadRequest, models.Response{Code: 500, Message: Var.PARAMS_ERR})
		return
	}

	// 绑定请求体中的标签数据
	var tag models.Tag
	if err := c.ShouldBind(&tag); err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 将字符串ID转换为uint
	id_uint, err := strconv.ParseInt(id, 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 查找并更新标签
	if err := utils.DB.First(&tag, id_uint).Error; err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_UPDATE_FAILED})
		return
	}
	// 返回成功响应
	c.JSON(http.StatusAccepted, models.Response{Code: 200, Message: Var.TAG_UPDATE_SUCCESSFULLY, Data: map[string]interface{}{"tag": tag}})
}

// GetTags 获取所有标签的处理函数
func GetTags(c *gin.Context) {
	var tagsArray []models.Tag

	// 查询所有标签
	if err := utils.DB.Model(&models.Tag{}).Find(&tagsArray).Error; err != nil {
		c.JSON(http.StatusBadRequest, models.Response{Code: 400, Message: Var.TAG_GET_FAILED})
		return
	} else {
		// 返回成功响应
		c.JSON(http.StatusAccepted, models.Response{Code: 200, Message: Var.TAG_GET_SUCCESSFULLY, Data: map[string]interface{}{"tags": tagsArray}})
		return
	}
}
