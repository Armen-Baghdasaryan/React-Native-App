import { StyleSheet, View, Button } from "react-native";
import { gStyle } from "../styles/gStyle";
import { Formik } from "formik";
import { TextInput } from "react-native";

export default function Form({ addArticle }) {
  return (
    <View style={gStyle.main}>
      <Formik
        initialValues={{ country: "", capital: "", population: "", img: "" }}
        onSubmit={(values, action) => {
          addArticle(values)
          action.resetForm()
        }}
      >
        {(props) => {
          return (
            <View style={styles.formWrapper}>
              <TextInput
                value={props.values.country}
                placeholder="Enter Country"
                onChangeText={props.handleChange("country")}
                style={styles.textInput}
              />
              <TextInput
                value={props.values.capital}
                placeholder="Enter Capital"
                onChangeText={props.handleChange("capital")}
                style={styles.textInput}
              />
              <TextInput
                value={props.values.population}
                placeholder="Enter Population"
                onChangeText={props.handleChange("population")}
                keyboardType="numeric"
                style={styles.textInput}
              />
              <TextInput
                value={props.values.img}
                placeholder="Add Img Url"
                onChangeText={props.handleChange("img")}
                style={styles.textInput}
              />
              <Button title="Add" onPress={props.handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  textInput: {
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    borderStyle: 'dotted'
  },
});
