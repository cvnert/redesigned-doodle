import TopBar from "@/components/TopBar";
import { View } from "@tarojs/components";
import React from "react";

function Cart() {
  const topConfig = {
    title: "购物车",
    back: () => {
      console.log("分类");
    },
  };
  return (
    <View>
      <TopBar {...topConfig}></TopBar>
    </View>
  );
}

export default Cart;
