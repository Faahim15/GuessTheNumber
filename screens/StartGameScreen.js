import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        maxLength={2}
        style={styles.numberInput}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "rgb(67, 6, 36)",
    borderRadius: 8,
    elevation: 8,
  },
  numberInput: {
    height: 60,
    width: 60,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
});
