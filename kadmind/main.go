package main

import (
	_ "github.com/taodev/kadmin/kadmind/routers"

	"github.com/astaxie/beego"
)

func main() {
	// 设置静态目录
	beego.SetStaticPath("/html", "html")
	beego.SetStaticPath("/static", "html/static")

	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	}
	beego.Run()
}
