import { users } from "@/db/users";
import { View } from "@tarojs/components";
import { List, Image } from "antd-mobile";
import React from "react";

function DataList() {
  return (
    <View>
      <List header="商品列表">
        {users.map((user) => (
          <List.Item
            key={user.name}
            prefix={
              <Image
                src={user.avatar}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={user.description}
          >
            {user.name}
          </List.Item>
        ))}
      </List>
    </View>
  );
}

export default DataList;
