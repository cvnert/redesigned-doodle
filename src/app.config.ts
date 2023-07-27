export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/Category/index",
    "pages/Cart/index",
    "pages/Profile/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#000",
    selectedColor: "deepskyblue",
    list: [
      {
        pagePath: "pages/Index/index",
        iconPath: "./static/IndexFalse.png",
        selectedIconPath: "./static/IndexTrue.png",
        text: "首页",
      },
      {
        pagePath: "pages/Category/index",
        iconPath: "./static/CategoryFalse.png",
        selectedIconPath: "./static/CategoryTrue.png",
        text: "分类",
      },
      {
        pagePath: "pages/Cart/index",
        iconPath: "./static/CartFalse.png",
        selectedIconPath: "./static/CartTrue.png",
        text: "购物车",
      },
      {
        pagePath: "pages/Profile/index",
        iconPath: "./static/ProfileFalse.png",
        selectedIconPath: "./static/ProfileTrue.png",
        text: "我的",
      },
    ],
  },
});
