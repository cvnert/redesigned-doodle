import { tabs } from "@/db/tabs";
import { View } from "@tarojs/components";
import { SideBar } from "antd-mobile";
import styles from "./SideTab.module.less";
import { useState } from "react";
import classNames from "classnames";

function SideTab() {
  const [activeKey, setActiveKey] = useState("key1");
  return (
    <View>
      <div className={styles.container}>
        <div className={styles.side}>
          <SideBar activeKey={activeKey} onChange={setActiveKey}>
            {tabs.map((item) => (
              <SideBar.Item key={item.key} title={item.title} />
            ))}
          </SideBar>
        </div>
        <div className={styles.main}>
          <div
            className={classNames(
              styles.content,
              activeKey === "key1" && styles.active
            )}
          >
            页面 1
          </div>
          <div
            className={classNames(
              styles.content,
              activeKey === "key2" && styles.active
            )}
          >
            页面 2
          </div>
          <div
            className={classNames(
              styles.content,
              activeKey === "key3" && styles.active
            )}
          >
            页面 3
          </div>
          <div
            className={classNames(
              styles.content,
              activeKey === "key4" && styles.active
            )}
          >
            页面 4
          </div>
          <div
            className={classNames(
              styles.content,
              activeKey === "key5" && styles.active
            )}
          >
            页面 5
          </div>
          <div
            className={classNames(
              styles.content,
              activeKey === "key6" && styles.active
            )}
          >
            页面 6
          </div>
        </div>
      </div>
    </View>
  );
}

export default SideTab;
