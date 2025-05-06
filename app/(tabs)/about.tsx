import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nós somos um clube de golf muito legal. Nos encontramos toda terças as 14hrs.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#25292e',
  },
  text:{
    color:'#fff',
    fontSize:20,
    fontFamily:'Arial',
  },
})
