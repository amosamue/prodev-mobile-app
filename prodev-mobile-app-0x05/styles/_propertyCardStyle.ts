import { StyleSheet } from "react-native";

export const propertyCardStyle = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    color: "#007AFF",
    marginTop: 4,
  },
  location: {
    color: "#666",
    fontSize: 14,
    marginTop: 2,
  },
});
