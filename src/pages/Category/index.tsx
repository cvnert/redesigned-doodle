import TopBar from "@/components/TopBar";
import { View } from "@tarojs/components";
import SideTab from "./components/SideTab";

function Category() {
  const topConfig = {
    title: "分类",
    back: () => {
      console.log("分类");
    },
  };
  return (
    <View>
      <TopBar {...topConfig}></TopBar>
      <SideTab />
    </View>
  );
}

export default Category;
