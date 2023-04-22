import { StyleSheet, View, Text, Image, Modal, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { gStyle } from "../styles/gStyle";
import Form from "./Form";

export default function Main({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [countries, setCountries] = useState([
    {
      country: "Japan",
      capital: "Tokio",
      population: "70 000 000",
      key: "1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYnnLvK6MTIYPRcfZRcEQObKmLqH1IKj57g&usqp=CAU",
    },
    {
      country: "Russia",
      capital: "Moscow",
      population: "140 000 000",
      key: "2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcTCMGnk0loCIA-N24flYbE1BFtGSZqZloQ&usqp=CAU",
    },
    {
      country: "Germany",
      capital: "Berlin",
      population: "65 000 000",
      key: "3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh0MrA3Z-Sttnv9jM91MobL62DA7H1SwO2w&usqp=CAU",
    },
  ]);

  const addArticle = (article) => {
    setCountries((countries) => {
      article.key = Math.random().toString();
      return [article, ...countries];
    });
    setShowModal(false);
  };

  const handleDelete = (key) => {
    setCountries(countries.filter((country) => country.key !== key));
    navigation.navigate("Main");
  };

  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.text, styles.main]}> Main Page </Text>
      <Ionicons
        name="add-circle"
        size={34}
        color="green"
        style={styles.addIcon}
        onPress={() => setShowModal(true)}
      />
      <Modal visible={showModal}>
        <View style={styles.modal}>
          <Ionicons
            name="close-circle"
            size={34}
            color="red"
            style={styles.closeIcon}
            onPress={() => setShowModal(false)}
          />
          <Text style={styles.modalInfo}>Add Country</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              navigation.navigate("Country", { item, handleDelete })
            }
          >
            {Platform.OS === "web" ? (
              <Image style={{ width: "100%", height: 200 }} source={item.img} />
            ) : (
              <Image style={{ width: "100%", height: 200 }} src={item.img} />
            )}

            <Text style={gStyle.countryInfo}>
              Country: <Text style={gStyle.countryData}>{item.country}</Text>
            </Text>
            <Text style={gStyle.countryInfo}>
              Capital: <Text style={gStyle.countryData}>{item.capital}</Text>
            </Text>
          </TouchableOpacity>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 50,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
  },

  addIcon: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
  },

  modal: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 50,
  },

  modalInfo: {
    marginVertical: 5,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
  },

  closeIcon: {
    textAlign: "right",
  },

  main: {
    textAlign: "center",
  },
});
