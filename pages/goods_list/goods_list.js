// pages/goods_list/goods_list.js
import regeneratorRuntime from "../../lib/runtime/runtime";
import { request } from "../../request/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cat_id: 0,
    tabs: [
      {
        id: 0,
        value: "综合",
        isActive: true,
      },
      {
        id: 1,
        value: "销量",
        isActive: false,
      },
      {
        id: 2,
        value: "价格",
        isActive: false,
      },
    ],
    goods_list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cat_id: options.cat_id,
    });
     getGoods(){
       console.log('ss')
     }
  },

  // 请求数据
  // async getGoods() {
  //   const res = await request({
  //     url: "/goods/search",
  //   });
  //   this.setData({
  //     goods_list: res,
  //   });
  // },

  thandle_tab(e) {
    let tabs = this.data.tabs;
    let index = e.detail.index;
    // console.log(tabs);
    // 修改数组 方法一
    for (let a of tabs) {
      a.isActive = false;
    }
    this.data.tabs[index].isActive = true;
    // console.log(index)
    // 修改数组d  方法二

    // tabs.forEach((v, i) =>
    //   i == index ? (v.isActive = true) : (v.isActive = false)
    // );
    // console.log(this.data.tabs[index]);

    this.setData({
      tabs,
    });
  },
});
