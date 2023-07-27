import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./BottomNavigation.less";
import { useState } from "react";
const BottomNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View className="bottom-navigation">
      <Text
        className={`nav-item ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => {
          setActiveIndex(0);
          Taro.navigateTo({ url: "/pages/Index/index" });
        }}
      >
        首页
      </Text>
      <Text
        className={`nav-item ${activeIndex === 1 ? "active" : ""}`}
        onClick={() => {
          setActiveIndex(1);
          Taro.navigateTo({ url: "/pages/Category/index" });
        }}
      >
        分类
      </Text>
      <Text
        className={`nav-item ${activeIndex === 2 ? "active" : ""}`}
        onClick={() => {
          setActiveIndex(2);
          Taro.navigateTo({ url: "/pages/Cart/index" });
        }}
      >
        购物车
      </Text>
      <Text
        className={`nav-item ${activeIndex === 3 ? "active" : ""}`}
        onClick={() => {
          setActiveIndex(3);
          Taro.navigateTo({ url: "/pages/Profile/index" });
        }}
      >
        我的
      </Text>
    </View>
  );
};
export default BottomNavigation;
