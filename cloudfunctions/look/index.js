// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: 'cloud1-0gpvrkrd5fae9e86'}
)
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    var text= event.userid
        return await db.collection('dd').aggregate()
        .lookup({
            from: 'sp',
            localField: 'sp',
            foreignField: '_id',
            as: 'bookList', 
        })
        .end()
}