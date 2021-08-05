import * as React from "react";
import { View, Text } from "react-native";
import { IconButton, List } from "react-native-paper";

export const CustomerLocationTile = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View
      style={{
        margin: 20,
        width: 300,
        height: expanded ? 180 : 70,
        backgroundColor: "white",
        borderTopColor: "darkblue",
        borderTopWidth: 4,
      }}
    >
      <List.Accordion
        title="Customer Location"
        left={(props) => (
          <List.Icon {...props} icon="account-multiple" color="black" />
        )}
        expanded={expanded}
        titleNumberOfLines={2}
        titleStyle={{ color: "black" }}
        onPress={handlePress}
        style={{ backgroundColor: "white" }}
      >
        <View
          style={{
            // marginHorizontal: 10,
            flexDirection: "row",
            // alignContent: "center",
            marginLeft: -15
          }}
        >
          <IconButton icon="map-marker-outline" />
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginVertical: 10,
              textAlignVertical: "center",
            }}
          >
            Latitude:
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginVertical: 10,
              marginLeft: 8,
              textAlignVertical: "center",
            }}
          >
            47.606209
          </Text>
        </View>
        <View
          style={{
            // marginHorizontal: 10,
            flexDirection: "row",
            // alignContent: "center",
            marginLeft: -15
          }}
        >
          <IconButton icon="map-marker-outline" />
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginVertical: 10,
              textAlignVertical: "center",
            }}
          >
            Longitude:
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginVertical: 10,
              marginLeft: 8,
              textAlignVertical: "center",
            }}
          >
            -122.332069
          </Text>
        </View>
      </List.Accordion>
    </View>
  );
};
