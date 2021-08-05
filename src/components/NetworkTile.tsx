import * as React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";

export const NetworkTile = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View
      style={{
        margin: 20,
        width: 300,
        height: expanded? 180: 70,
        backgroundColor: "white",
        borderTopColor: "darkblue",
        borderTopWidth: 4,
      }}
    >
      <List.Accordion
        title="Network details"
        left={(props) => (
          <List.Icon {...props} icon="lan-connect" color="black" />
        )}
        expanded={expanded}
        titleNumberOfLines={2}
        titleStyle={{ color: "black" }}
        onPress={handlePress}
        style={{backgroundColor: "white"}}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </View>
  );
};
