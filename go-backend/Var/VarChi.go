package Var

//系统相关常量
const (
	SYSTEM_ERROR                  = "系统错误"
	SYSTEM_SUCCESS                = "操作成功"
	SYSTEM_FAIL                   = "操作失败"
	SYSTEM_NOT_FOUND              = "资源未找到"
	SYSTEM_UNAUTHORIZED           = "未授权访问"
	SYSTEM_FORBIDDEN              = "禁止访问"
	SYSTEM_BAD_REQUEST            = "错误的请求"
	SYSTEM_INTERNAL_ERROR         = "内部服务器错误"
	SYSTEM_SERVICE_UNAVAILABLE    = "服务不可用"
	SYSTEM_TIMEOUT                = "请求超时"
	SYSTEM_UNSUPPORTED_MEDIA_TYPE = "不支持的媒体类型"
	SYSTEM_METHOD_NOT_ALLOWED     = "不允许的方法"
	SYSTEM_CONFLICT               = "请求冲突"
	SYSTEM_UNPROCESSABLE_ENTITY   = "无法处理的实体"
	SYSTEM_TOO_MANY_REQUESTS      = "请求过多"
	SYSTEM_NOT_IMPLEMENTED        = "未实现的功能"
	TOKEN_INVALID                 = "无效的令牌"
	PARAMS_ERR                    = "参数错误"
	DB_ERR                        = "数据库错误"
)

//用户相关常量
const (
	USER_EXIST                   = "用户已存在"
	USER_NOT_EXIST               = "用户不存在"
	USER_REGISTER_SUCCESS        = "注册成功"
	USER_REGISTER_FAIL           = "注册失败"
	USER_LOGIN_SUCCESS           = "登录成功"
	USER_LOGIN_FAIL              = "登录失败"
	USER_LOGOUT_SUCCESS          = "登出成功"
	USER_LOGOUT_FAIL             = "登出失败"
	USER_UPDATE_SUCCESS          = "用户信息更新成功"
	USER_UPDATE_FAIL             = "用户信息更新失败"
	USER_DELETE_SUCCESS          = "用户删除成功"
	USER_DELETE_FAIL             = "用户删除失败"
	USER_PASSWORD_INCORRECT      = "密码错误"
	PASSWORD_HASHING_FAILED      = "密码加密失败"
	USER_PASSWORD_RESET_SUCCESS  = "密码重置成功"
	USER_PASSWORD_UPDATE_SUCCESS = "密码更新成功"
	USER_ADD_SUCCESSFULLY        = "用户添加成功"
)

const (
	TAG_ADD_SUCCESSFULLY    = "标签添加成功"
	TAG_ADD_FAILED          = "标签添加失败"
	TAG_DELETE_FAILED       = "标签删除失败"
	TAG_DELETE_SUCCESSFULLY = "标签删除成功"
	TAG_GET_FAILED          = "标签获取失败"
	TAG_GET_SUCCESSFULLY    = "标签获取成功"
	TAG_EXIST               = "标签已存在"
	TAG_UPDATE_FAILED       = "标签更新失败"
	TAG_UPDATE_SUCCESSFULLY = "标签更新成功"
)

const (
	POST_GET_SUCCESSFULLY    = "获取帖子成功"
	POST_GET_FAILED          = "获取帖子失败"
	POST_ADD_SUCCESSFULLY    = "帖子添加成功"
	POST_ADD_FAILED          = "帖子添加失败"
	POST_DELETE_SUCCESSFULLY = "帖子删除成功"
	POST_UPDATE_FAILED       = "帖子更新失败"
	POST_UPDATE_SUCCESSFULLY = "帖子更新成功"
	POST_DELETE_FAILED       = "帖子删除失败"
	POST_NOT_FOUND           = "帖子不存在"
)
