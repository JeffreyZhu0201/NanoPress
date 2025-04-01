/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:31:46
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-01 23:53:56
 * @FilePath: \go-backend\routes\routes.go
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
		tags.POST("/createtag", controller.CreateTag)
		tags.DELETE("/deletetag", controller.DeleteTag)
	}

	post := r.Group("/post")
	{
		// user permission
		post.GET("/:id", controller.GetPostById)
		post.GET("/search", controller.GetPostsBySearch)
		post.GET("/range", controller.GetRangedPostsNotDeleted)
		post.GET("/", controller.GetRangedPostsNotDeleted)
		post.POST("/create", controller.CreatePost)
		post.POST("/delete", controller.DeletePost)
		post.POST("/update", controller.UpdatePost)

		// admin permission
		post.GET("/getall", controller.GetRangedPosts)
		post.POST("/create", controller.CreatePost)
		post.POST("/delete", controller.DeletePost)

	}

	// comment := r.Group("/comment")
	// {
	// 	comment.GET("/", GetCommentsHandler)
	// }

}
