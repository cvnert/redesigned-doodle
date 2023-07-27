import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";
import { NavBar } from "antd-mobile";
function TopBar(props) {
  console.log(props);
  return (
    <View>
      <NavBar onBack={props.back}>{props.title}</NavBar>
    </View>
  );
}
export default TopBar;
