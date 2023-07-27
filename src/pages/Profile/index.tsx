import TopBar from "@/components/TopBar";
import { View } from "@tarojs/components";
import React from "react";

function Profile() {
  const topConfig = {
    title: "我的",
    back: () => {
      console.log("我的");
    },
  };
  return (
    <View>
      <TopBar {...topConfig}></TopBar>
    </View>
  );
}

export default Profile;
