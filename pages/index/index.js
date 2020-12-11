//  引入用来发送请求的方法
import { request } from "../../request/index";
// const req = require("../../request/index.js")

//Page Object
Page({
  data: {
    // 轮播图数据
    swiperList: [],
    // 主页导航栏数据
    catitems: [],
    // 主页楼层数据
    floordata: [],
  },
  // 页面加载时触发
  onLoad: function (options) {
    //  获取轮播图数据
    this.getSwiperList();
    //  获取首页导航栏数据
    this.getCatitems();
    // 获取首页楼层数据
    this.getFloordata();
  },

  //  获取轮播图数据
  getSwiperList() {
    request({
      url: "/home/swiperdata",
    })
      .then((res) => {
        // console.log(res.data.message+".....")
        this.setData({
          swiperList: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //  获取首页导航栏数据
  getCatitems() {
    request({
      url: "/home/catitems",
    })
      .then((res) => {
        // console.log(res.data.message+".....")
        this.setData({
          catitems: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // 获取楼层数据
  getFloordata() {
    request({
      url: "/home/floordata",
    })
      .then((res) => {
        // console.log(res.data.message+".....")
        this.setData({
          floordata: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
