import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const goToMenu = () => {
    router.push("/menu");
  };
  return (
    <View>
      <Text>Index expo</Text>
      {/* Bouton Principal : Voir le Menu */}
      <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
        <Text style={styles.menuButtonText}>Voir le Menu</Text>
        <Text style={styles.menuButtonArrow}>➡️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Bouton Menu Principal
  menuButton: {
    backgroundColor: "#a35905ff",
    margin: 20,
    marginTop: 0,
    padding: 18,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  menuButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  menuButtonArrow: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
