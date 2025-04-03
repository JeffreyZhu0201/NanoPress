/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:31:46
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-03 16:59:59
 * @FilePath: \NanoPress\go-backend\routes\routes.go
 * @Description: File Description Here...
 *
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved.
 */

package routes

import (
	"go-backend/controller"
	"go-backend/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	auth := r.Group("/auth")
	{
		auth.POST("/register", controller.RegisterHandler)
		auth.POST("/login", controller.LoginHandler)
	}

	r.GET("/", middleware.JWTAuthMiddleware, func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "Welcome to the API!",
		})
	})

	tags := r.Group("/tag")
	{
		tags.GET("/", controller.GetTags)
		tags.GET("/:id", controller.GetTagById)
		tags.POST("/createtag", controller.CreateTag)
		tags.DELETE("/deletetag", controller.DeleteTag)
		tags.POST("/update", controller.UpdateTag)
	}

	post := r.Group("/post")
	{
		// user permission
		post.GET("/:id", controller.GetPostById)                  //+
		post.GET("/search", controller.GetPostsBySearch)          //+
		post.GET("/", controller.GetRangedPostsNotDeleted)        //+
		post.POST("/create", controller.CreatePost)               //+
		post.POST("/delete", controller.DeletePost)               //+
		post.POST("/update", controller.UpdatePost)               //+
		post.GET("/getbyautherid", controller.GetPostsByAutherId) //+
		post.GET("/getbytagid", controller.GetPostsByTagId)       //+

		// admin permission
		post.GET("/getall", controller.GetRangedPosts) //+

	}

	// comment := r.Group("/comment")
	// {
	// 	comment.GET("/", GetCommentsHandler)
	// }

}
