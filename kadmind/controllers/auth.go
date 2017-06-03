package controllers

import "github.com/astaxie/beego"

// Operations about object
type AuthController struct {
	beego.Controller
}

type MsgLoginRet struct {
	Code    int
	Message string
	Token   string
}

// @router /login [post]
func (c *AuthController) Login() {
	username := c.GetString("username")
	password := c.GetString("password")

	beego.Debug(username, password)

	c.Data["json"] = MsgLoginRet{
		Code:    0,
		Message: "LoginOK",
	}

	c.ServeJSON()
}

func authCheck(username, password string) bool {
	return username == "admin" && password == "litao"
}

func init() {
	// authPlugin := auth.NewBasicAuthenticator(authCheck, "Error")
	// beego.InsertFilter("*", beego.BeforeRouter, authPlugin)
}
