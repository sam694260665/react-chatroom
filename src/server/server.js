const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//新建app
const app =express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

//类似于mysql的表 mongo里有文档、字段的概念
// const User = mongoose.model('user',new mongoose.Schema({
//     user:{type:String,require:true},
//     age:{type:Number,require:true}
// }))
// User.create({
//     user:'xiaoming',
//     age:20
// },function (err, doc) {
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.remove({age:18},function (err, doc) {
//     console.log(doc)
// })
// User.update({'user':'xiaoming'},{'$set':{age:26}},function (err, doc) {
//     console.log(doc)
// })

// app.get('/data',function (req, res) {
//     User.find({user:'xiaoming'},function (err, doc) {
//         res.json(doc)
//     })
    // res.json({name:'sam',age:21})
// })
app.listen(9093,function () {
    console.log('node start')
})