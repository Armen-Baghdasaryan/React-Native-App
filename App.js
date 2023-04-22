import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { useState } from "react";
import MainStack from "./navigate";
import AppLoading from "expo-app-loading";

const font = () =>
  Font.loadAsync({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

export default function App() {
  const [fonts, setFonts] = useState(false);

  if (!fonts) {
    return (
      <AppLoading
        startAsync={font}
        onFinish={() => setFonts(true)}
        onError={(err) => console.log(err)}
      />
    );
  } else {
    return <MainStack />;
  }
}

const styles = StyleSheet.create({
  container: {},
  text: {},
});
