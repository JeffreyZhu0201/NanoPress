/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-04-01 13:31:46
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-04-01 13:31:46
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

	// post := r.Group("/post")
	// {
	// 	post.GET("/", GetPostsHandler)
	// 	post.GET("/:id", GetPostHandler)
	// }

	// comment := r.Group("/comment")
	// {
	// 	comment.GET("/", GetCommentsHandler)
	// }

}
