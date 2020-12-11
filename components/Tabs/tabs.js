// components/Tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    _tabs(e) {
      let index = e.currentTarget.dataset.index;
      this.triggerEvent('thandle_tab', {index})
      // console.log(this.properties.tabs[index])
    },
  },
});
