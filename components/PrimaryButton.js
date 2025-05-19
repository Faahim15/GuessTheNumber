import { Text, View, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable andrioid_ripple={{ color: "#640233" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#72063c",
    marginVertical: 8,
    borderRadius: 8,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
