import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
import TopBar from "@/components/TopBar";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Swiper, Toast } from "antd-mobile";
import DataList from "./components/DataList";
import RecommenDation from "./components/recommendation";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });
  //topbar
  const back = () => {
    console.log("返回");
  };
  const topConfig = {
    title: "首页",
    back,
  };

  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  //swiper
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className="content"
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));

  return (
    <View className="index">
      <TopBar {...topConfig} />
      <Swiper>{items}</Swiper>
      <RecommenDation />
      <DataList />
      <BottomNavigation />
    </View>
  );
}
