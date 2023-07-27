import { View } from "@tarojs/components";
import { Grid } from "antd-mobile";
import "./recommendation.less";

function RecommenDation() {
  return (
    <View>
      <Grid columns={3} gap={8}>
        {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((item, index) => (
          <>
            <Grid.Item key={index} className="grid-demo-item-block">
              {item}
            </Grid.Item>
          </>
        ))}
      </Grid>
    </View>
  );
}

export default RecommenDation;
