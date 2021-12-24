import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
  LOCAL_NETWORK_IP,
}: RootTabScreenProps<"TabOne">) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${LOCAL_NETWORK_IP}:5000/all`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text>{JSON.stringify(data)}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

TabOneScreen.defaultProps = {
  LOCAL_NETWORK_IP: Constants?.manifest?.extra.LOCAL_NETWORK_IP,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
