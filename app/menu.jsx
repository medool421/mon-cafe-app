import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function PremiumMenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();

  // Liste des boissons
  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      price: "25 MAD",
      category: "hot",
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400",
      description: "Café italien intense et corsé",
      rating: 4.8,
      popular: true,
    },
    {
      id: 2,
      name: "Cappuccino",
      price: "30 MAD",
      category: "hot",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
      description: "Espresso avec mousse de lait crémeuse",
      rating: 4.9,
      popular: true,
    },
    {
      id: 3,
      name: "Latte",
      price: "32 MAD",
      category: "hot",
      image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400",
      description: "Café doux avec lait chaud et latte art",
      rating: 4.7,
      popular: false,
    },
    {
      id: 4,
      name: "Iced Coffee",
      price: "35 MAD",
      category: "cold",
      image:
        "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400",
      description: "Café glacé rafraîchissant",
      rating: 4.6,
      popular: true,
    },
    {
      id: 5,
      name: "Mocha",
      price: "35 MAD",
      category: "hot",
      image:
        "https://images.unsplash.com/photo-1649023384041-555d35454897?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1071",
      description: "Mélange parfait de café et chocolat",
      rating: 4.9,
      popular: true,
    },
    {
      id: 6,
      name: "Frappuccino",
      price: "38 MAD",
      category: "cold",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400",
      description: "Boisson glacée crémeuse et gourmande",
      rating: 4.5,
      popular: false,
    },
  ];

  // Catégories
  const categories = [
    { id: "all", name: "Tout", icon: "☕" },
    { id: "hot", name: "Chaud", icon: "🔥" },
    { id: "cold", name: "Froid", icon: "🧊" },
  ];

  // Filtrer les boissons par catégorie
  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Header avec gradient */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notre Menu</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Message de bienvenue animé */}

        <View style={styles.welcomeBanner}>
          <Text style={styles.welcomeText}>
            Découvrez nos cafés d'exception !
          </Text>
        </View>

        {/* Catégories */}
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScroll}
          >
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === cat.id && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(cat.id)}
              >
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === cat.id && styles.categoryTextActive,
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* Section Populaires */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>⭐ Nos Favoris</Text>
            <Text style={styles.sectionSubtitle}>Les plus appréciés</Text>
          </View>

          {filteredItems
            .filter((item) => item.popular)
            .map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuCard}
                activeOpacity={0.9}
              >
                {/* Image de la boisson */}
                <Image
                  source={{ uri: item.image }}
                  style={styles.menuImage}
                  resizeMode="cover"
                />

                {/* Badge Popular */}
                <View style={styles.popularBadge}>
                  <Text style={styles.popularText}>⭐ Popular</Text>
                </View>

                {/* Informations */}
                <View style={styles.menuInfo}>
                  <View style={styles.menuHeader}>
                    <Text style={styles.menuName}>{item.name}</Text>
                    <View style={styles.ratingContainer}>
                      <Text style={styles.ratingStar}>★</Text>
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                  </View>

                  <Text style={styles.menuDescription}>{item.description}</Text>

                  <View style={styles.menuFooter}>
                    <Text style={styles.menuPrice}>{item.price}</Text>
                    <TouchableOpacity style={styles.addButton}>
                      <Text style={styles.addButtonText}>🧺➕</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        {/* Section Autres Boissons */}
        {filteredItems.filter((item) => !item.popular).length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>☕ Autres Boissons</Text>
              <Text style={styles.sectionSubtitle}>À découvrir</Text>
            </View>

            {filteredItems
              .filter((item) => !item.popular)
              .map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.menuCard}
                  activeOpacity={0.9}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.menuImage}
                    resizeMode="cover"
                  />

                  <View style={styles.menuInfo}>
                    <View style={styles.menuHeader}>
                      <Text style={styles.menuName}>{item.name}</Text>
                      <View style={styles.ratingContainer}>
                        <Text style={styles.ratingStar}>★</Text>
                        <Text style={styles.ratingText}>{item.rating}</Text>
                      </View>
                    </View>

                    <Text style={styles.menuDescription}>
                      {item.description}
                    </Text>

                    <View style={styles.menuFooter}>
                      <Text style={styles.menuPrice}>{item.price}</Text>
                      <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>Ajouter</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        )}

        {/* Espace en bas */}
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF3C7",
    // fontFamily: "Jaro_400Regular",
  },
  header: {
    // fontFamily: "Jaro_400Regular",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#D97706",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 26,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  welcomeBanner: {
    backgroundColor: "#3f270cff",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  welcomeText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  categoriesContainer: {
    marginVertical: 15,
  },
  categoriesScroll: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3f270cff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#ffffffff",
  },
  categoryButtonActive: {
    backgroundColor: "#D97706",
    borderColor: "#D97706",
  },
  categoryIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffffff",
  },
  categoryTextActive: {
    color: "black",
  },
  section: {
    marginTop: 10,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#6B7280",
  },
  menuCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  menuImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#F3F4F6",
  },
  popularBadge: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#D97706",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  popularText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  menuInfo: {
    padding: 16,
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  menuName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF3C7",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  ratingStar: {
    color: "#D97706",
    fontSize: 14,
    marginRight: 4,
  },
  ratingText: {
    color: "#D97706",
    fontSize: 13,
    fontWeight: "bold",
  },
  menuDescription: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 12,
    lineHeight: 20,
  },
  menuFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D97706",
  },
  addButton: {
    backgroundColor: "#D97706",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  addButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
