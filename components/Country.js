import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gStyle } from "../styles/gStyle";

export default function Country({ route }) {
  const { country, capital, population, img, key } = route.params.item;
  const handleDelete = route.params.handleDelete;

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.text}> Country Page </Text>
      <View style={styles.container}>
        <Image style={{ width: "100%", height: 300 }} src={img} />
        <Text style={gStyle.countryInfo}>
          Country: <Text style={gStyle.countryData}>{country}</Text>{" "}
        </Text>
        <Text style={gStyle.countryInfo}>
          Capital: <Text style={gStyle.countryData}>{capital}</Text>{" "}
        </Text>
        <Text style={gStyle.countryInfo}>
          Population: <Text style={gStyle.countryData}>{population}</Text>{" "}
        </Text>
        <AntDesign
          name="delete"
          size={30}
          color="red"
          onPress={() => handleDelete(key)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 20,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
  },
});
