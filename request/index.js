
//通用地址头
const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'

export const request = (params)=>{
  return new Promise((resolve, reject)=>{
    var reqTask = wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(res) => {
        resolve(res.data.message)
      },
      fail:(err) => {
        reject(err)
      }
    });
  })
  
}

// module.exports = {
//   request:( params ) => {
//       return new Promise((resolve, reject)=>{
//         wx.request({
//           ...params,
//           success:(res) => {
//             resolve(res)
//           },
//           fail:(err) => {
//             reject(err)
//           }
//         });
//       })
      
//     }
// }