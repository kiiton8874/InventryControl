import { View, Text, StyleSheet } from "react-native";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>在庫管理</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>画像</Text>
          </View>
          <View>
            <Text>商品名</Text>
            <Text>2023年10月23日</Text>
          </View>
          <View>
            <Text>800個</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>画像</Text>
          </View>
          <View>
            <Text>商品名</Text>
            <Text>2023年10月23日</Text>
          </View>
          <View>
            <Text>800個</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>画像</Text>
          </View>
          <View>
            <Text>商品名</Text>
            <Text>2023年10月23日</Text>
          </View>
          <View>
            <Text>800個</Text>
          </View>
        </View>

      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index
