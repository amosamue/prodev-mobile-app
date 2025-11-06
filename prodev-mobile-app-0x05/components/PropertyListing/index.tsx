import { FlatList } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";
import { Property } from "../../interfaces";

interface Props {
  data: Property[];
}

export default function PropertyListing({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PropertyListingCard property={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
