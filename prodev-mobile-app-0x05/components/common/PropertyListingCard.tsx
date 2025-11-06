import { View, Text, Image, TouchableOpacity } from "react-native";
import { Property } from "../../interfaces";
import { propertyCardStyle } from "../../styles/_propertyCardStyle";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  property: Property;
}

export default function PropertyListingCard({ property }: Props) {
  return (
    <TouchableOpacity style={propertyCardStyle.card}>
      <Image source={{ uri: property.image }} style={propertyCardStyle.image} />

      <View style={propertyCardStyle.content}>
        <Text style={propertyCardStyle.title}>{property.title}</Text>
        <Text style={propertyCardStyle.location}>{property.location}</Text>
        <Text style={propertyCardStyle.price}>${property.price}/mo</Text>
      </View>

      {property.isSaved && (
        <Ionicons
          name="bookmark"
          size={22}
          color="#007AFF"
          style={propertyCardStyle.icon}
        />
      )}
    </TouchableOpacity>
  );
}
