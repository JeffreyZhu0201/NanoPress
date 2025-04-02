/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:34:55
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-02 20:22:50
 * @FilePath: \go-backend\controller\PostHandler.go
 * @Description: 帖子相关的处理函数
 *
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved.
 */

// 文件总体说明:
// 本文件包含了所有与帖子相关的处理函数，包括:
// - 获取指定范围的帖子
// - 获取未删除的帖子
// - 根据ID获取帖子
// - 创建新帖子
// - 更新帖子
// - 删除帖子
// - 根据用户ID获取帖子
// - 根据标签ID获取帖子
// - 根据日期获取帖子
// - 根据搜索条件获取帖子
// - 根据状态获取帖子

package controller

import (
	"go-backend/Var"
	"go-backend/models"
	"go-backend/utils"
	"log"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

// 获取指定范围的帖子
// 从请求中获取范围参数，调用服务获取帖子，并将帖子作为JSON响应返回
func GetRangedPosts(c *gin.Context) {
	var posts []models.Post
	// 获取范围参数
	start_index_string, exist_index := c.GetQuery("start_index")
	limited_string, exist_limited := c.GetQuery("limited")
	// 如果参数不存在，则设置默认值
	if !exist_index || !exist_limited {
		start_index_string = "0" // 默认起始索引为0
		limited_string = "5"    // 默认限制数量为5
	}
	// 将字符串转换为整数
	start_index_uint, err := strconv.ParseInt(start_index_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	limited_uint, err := strconv.ParseInt(limited_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 查询数据库获取帖子
	if err := utils.DB.Model(&models.Post{}).Limit(int(limited_uint)).Offset(int(start_index_uint)).Find(&posts).Error; err != nil {
		// 如果查询失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_GET_FAILED})
		return
	}
	// 返回成功响应
	c.JSON(200, models.Response{Code: 200, Message: Var.POST_GET_SUCCESSFULLY, Data: posts})
}

// 获取未删除的帖子
// 从请求中获取范围参数，调用服务获取未删除的帖子，并将帖子作为JSON响应返回
func GetRangedPostsNotDeleted(c *gin.Context) {
	var posts []models.Post
	// 获取范围参数
	start_index_string, exist_index := c.GetQuery("start_index")
	limited_string, exist_limited := c.GetQuery("limited")

	// 如果参数不存在，则设置默认值
	if !exist_index || !exist_limited {
		start_index_string = "0" // 默认起始索引为0
		limited_string = "5"    // 默认限制数量为5
	}

	// 将字符串转换为整数
	start_index_uint, err := strconv.ParseInt(start_index_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	limited_uint, err := strconv.ParseInt(limited_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 查询数据库获取未删除的帖子
	if err := utils.DB.Model(&models.Post{}).Where("deleted_at IS NULL").Limit(int(limited_uint)).Offset(int(start_index_uint)).Find(&posts).Error; err != nil {
		// 如果查询失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_GET_FAILED})
		return
	}
	// 返回成功响应
	c.JSON(200, models.Response{Code: 200, Message: Var.POST_GET_SUCCESSFULLY, Data: posts})
}

// 根据ID获取帖子
// 从请求中获取帖子ID，调用服务获取帖子，并将帖子作为JSON响应返回
func GetPostById(c *gin.Context) {
	var post models.Post
	// 获取ID参数
	id_string, exist := c.Params.Get("id")
	// 如果参数不存在，返回参数错误响应
	if !exist {
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}
	// 将字符串转换为整数
	id_uint, err := strconv.ParseInt(id_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 查询数据库获取帖子
	if err := utils.DB.Model(&models.Post{}).First(&post, id_uint).Error; err != nil {
		// 如果查询失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_GET_FAILED})
		return
	}
	// 返回成功响应
	c.JSON(200, models.Response{Code: 200, Message: Var.POST_GET_SUCCESSFULLY, Data: map[string]interface{}{"post": post}})
}

// 创建新帖子
// 从请求中获取帖子数据，调用服务创建帖子，并将创建的帖子作为JSON响应返回
func CreatePost(c *gin.Context) {
	var post models.Post
	// 绑定请求中的JSON数据到帖子对象
	if err := c.ShouldBindBodyWith(&post, binding.JSON); err != nil {
		// 如果绑定失败，返回参数错误响应
		log.Default().Println("Binding error:", err)
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	log.Default().Println(post)
	log.Default().Println(*post.AutherID)

	// 将帖子数据插入数据库
	if err := utils.DB.Create(&post).Error; err != nil {
		// 如果插入失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_ADD_FAILED})
		return
	}

	// 返回成功响应
	c.JSON(200, models.Response{
		Code:    200,
		Message: Var.POST_ADD_SUCCESSFULLY,
		Data:    map[string]interface{}{"post": post},
	})
}

// 更新帖子
// 从请求中获取帖子ID和更新数据，调用服务更新帖子，并将更新后的帖子作为JSON响应返回
func UpdatePost(c *gin.Context) {
	var post models.Post

	// 从查询参数中获取帖子ID
	id_string, exist := c.GetQuery("id")
	// 如果参数不存在，返回参数错误响应
	if !exist {
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 将字符串转换为整数
	id_uint, err := strconv.ParseInt(id_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 从数据库中加载原始记录
	if err := utils.DB.First(&post, id_uint).Error; err != nil {
		// 如果记录不存在，返回未找到响应
		c.JSON(404, models.Response{Code: 404, Message: Var.POST_NOT_FOUND})
		return
	}

	// 绑定请求中的JSON数据到帖子对象
	if err := c.ShouldBindJSON(&post); err != nil {
		// 如果绑定失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 更新数据库中的帖子数据
	if err := utils.DB.Save(&post).Error; err != nil {
		// 如果更新失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_UPDATE_FAILED})
		return
	}

	// 返回成功响应
	c.JSON(200, models.Response{
		Code:    200,
		Message: Var.POST_UPDATE_SUCCESSFULLY,
		Data:    map[string]interface{}{"post": post},
	})
}

// 删除帖子
// 从请求中获取帖子ID，调用服务删除帖子，并返回成功消息作为JSON响应
func DeletePost(c *gin.Context) {
	// 从查询参数中获取帖子ID
	id_string, exist := c.GetQuery("id")
	// 如果参数不存在，返回参数错误响应
	if !exist {
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 将字符串转换为整数
	id_uint, err := strconv.ParseInt(id_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 从数据库中删除帖子
	if err := utils.DB.Delete(&models.Post{}, id_uint).Error; err != nil {
		// 如果删除失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_DELETE_FAILED})
		return
	}

	// 返回成功响应
	c.JSON(200, models.Response{
		Code:    200,
		Message: Var.POST_DELETE_SUCCESSFULLY,
	})
}

// 根据用户ID获取帖子
// 从请求中获取用户ID，调用服务获取用户的帖子，并将帖子作为JSON响应返回
func GetPostsByAutherId(c *gin.Context) {
	var posts []models.Post
	// 从查询参数中获取用户ID
	user_id_string, exist := c.GetQuery("auther_id")
	// 如果参数不存在，返回参数错误响应
	if !exist {
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 将字符串转换为整数
	user_id_uint, err := strconv.ParseInt(user_id_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 查询数据库获取用户的帖子
	if err := utils.DB.Model(&models.Post{}).Where("auther_id = ?", user_id_uint).Find(&posts).Error; err != nil {
		// 如果查询失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_GET_FAILED})
		return
	}
	// 返回成功响应
	c.JSON(200, models.Response{Code: 200, Message: Var.POST_GET_SUCCESSFULLY, Data: map[string]interface{}{"posts": posts}})
}

// 根据标签ID获取帖子
// 从请求中获取标签ID，调用服务获取对应标签的帖子，并将帖子作为JSON响应返回
func GetPostsByTagId(c *gin.Context) {
	var posts []models.Post
	// 从查询参数中获取标签ID
	tag_id_string, exist := c.GetQuery("tag_id")
	// 如果参数不存在，返回参数错误响应
	if !exist {
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 将字符串转换为整数
	tag_id_uint, err := strconv.ParseInt(tag_id_string, 10, 32)
	if err != nil {
		// 如果转换失败，返回参数错误响应
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 查询数据库获取对应标签的帖子
	if err := utils.DB.Model(&models.Post{}).Where("tag_id = ?", tag_id_uint).Find(&posts).Error; err != nil {
		// 如果查询失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_GET_FAILED})
		return
	}
	// 返回成功响应
	c.JSON(200, models.Response{Code: 200, Message: Var.POST_GET_SUCCESSFULLY, Data: map[string]interface{}{"posts": posts}})
}

// 根据日期获取帖子
// 从请求中获取日期，调用服务获取对应日期的帖子，并将帖子作为JSON响应返回
func GetPostsByDate() {
	// 从请求中获取日期
	// 调用服务获取对应日期的帖子
	// 将帖子作为JSON响应返回
}

// 根据搜索条件获取帖子
// 从请求中获取搜索条件，调用服务获取符合条件的帖子，并将帖子作为JSON响应返回
func GetPostsBySearch(c *gin.Context) {
	var posts []models.Post
	// 从查询参数中获取搜索条件
	query_string, exist := c.GetQuery("query")
	// 如果参数不存在，返回参数错误响应
	if !exist {
		c.JSON(400, models.Response{Code: 400, Message: Var.PARAMS_ERR})
		return
	}

	// 查询数据库获取符合条件的帖子
	if err := utils.DB.Model(&models.Post{}).Where("title LIKE ?", "%"+query_string+"%").Find(&posts).Error; err != nil {
		// 如果查询失败，返回服务器错误响应
		c.JSON(500, models.Response{Code: 500, Message: Var.POST_GET_FAILED})
		return
	}
	// 返回成功响应
	c.JSON(200, models.Response{Code: 200, Message: Var.POST_GET_SUCCESSFULLY, Data: map[string]interface{}{"posts": posts}})
}

// 根据状态获取帖子
// 从请求中获取状态，调用服务获取指定状态的帖子，并将帖子作为JSON响应返回
func GetPostsByStatus() {
	// 从请求中获取状态
	// 调用服务获取指定状态的帖子
	// 将帖子作为JSON响应返回
}
