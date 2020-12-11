// pages/category/category.js
import regeneratorRuntime from "../../lib/runtime/runtime";
import { request } from "../../request/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    // 右侧数据
    catRight: [],
    // 左侧被点击的
    active_cat: 0,
    // 右侧内容滚动条距离顶部的位置
    scrollTop: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    使用缓存技术
      1、先判断一下本地存储中有没有旧的数据
          {time:Date.now(),data:[...]}
      2、没有旧数据 直接发送新请求
      3、有旧数据 同属 旧数据没有过期 就使用 本地数据
    */

    // 获取本地存储数据
    const Cates = wx.getStorageSync("categories");
    // console.log(Cates);
    if (Cates) {
      //判断是否过期 ，时间为10s(1000 * 10) ,5分钟（1000 * 60）
      if (Date.now() - Cates.time > 1000 * 10) {
        // console.log('已过期')
        //  重新发请求
        this.getCategories();
      } else {
        // 分类数据
        this.setData({
          categories: Cates.data,
          catRight: Cates.data[0].children,
        });
      }
    } else {
      //  不存在 发送请求获取数据
      this.getCategories();
    }
  },

  // 获取商品分类数据
  // getCategories() {
  //   request({
  //     url: "/categories",
  //   })
  //     .then((res) => {
  //       // console.log(res)
  //       this.setData({
  //         categories: res.data.message,
  //         catRight: res.data.message[0].children,
  //       });
  //       // 把数据存进 本地
  //       wx.setStorageSync("categories", {
  //         time: Date.now(),
  //         data: this.data.categories,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  async getCategories() {
    // 使用es7 的 async  await 来发送请求
    const res = await request({url: "/categories"})
    // console.log(res)
        this.setData({
          categories: res,
          catRight: res[0].children,
        });
        // 把数据存进 本地
        wx.setStorageSync("categories", {
          time: Date.now(),
          data: res,
        });
  },

  // 获取点击左侧索引
  actived(e) {
    let _this = this;
    let active_cat = e.currentTarget.dataset.index;
    let catRight = _this.data.categories[active_cat].children;
    _this.setData({
      active_cat,
      catRight,
      scrollTop: 0,
    });
  },
  

  // // async 结合 await 使用
  // async Study(){
  //   let res = await this.timeout()
  //   console.log(res)
  // },

  // // 异步的定时器
  // timeout(){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log('疫苗马上可以打')
  //       resolve('定时器执行完成的返回')
  //     })
  //   })
  // }
});
