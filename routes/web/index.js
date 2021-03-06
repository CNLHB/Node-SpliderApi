/*
 * @Author: ecitlm
 * @Date:   2017-11-30 21:04:24
 * @Last Modified by: ecitlm
 * @Last Modified time: 2018-04-14 23:35:03
 */
const app = require('express')()
const ejs = require('ejs').__express

// 这里也可以配置识别HTML
app.engine('ejs', ejs) // 配置识别ejs模板
app.set('view engine', 'ejs') // 设置模板扩展名后缀自动添加
app.set('views', './views/web') // 设置模板路径

app.get('/', function (req, res) {
  // res.header("Content-Type:text/html; charset=utf-8");
  res.render('index', {
    title: '欢迎进入IT开发者--Nodejs_express'
  })
})

module.exports = app
