import React from "react";
import { View, Text } from "react-native";

export const PersonalDetails = (props: any) => {
  return (
    <View
      style={{
        margin: 20,
        width: 300,
        height: 300,
        backgroundColor: "white",
        borderTopColor: "darkblue",
        borderTopWidth: 4,
      }}
    >
        <View style={{marginHorizontal: 10}}>
      <Text style={{ fontSize: 20, textAlign: "center", marginVertical: 10 }}>
        Personal Details
      </Text>
      <Text style={{ marginLeft: 5, marginVertical: 3, fontWeight: "bold" }}>
        PAN Card No
      </Text>
      <Text style={{marginHorizontal: 5, marginBottom: 2}}>
          AADCK7544B
      </Text>
      <Text style={{ marginLeft: 5, marginVertical: 3, fontWeight: "bold" }}>
        E-Mail
      </Text>
      <Text style={{marginHorizontal: 5, marginBottom: 2}}>
          -
      </Text>
      <Text style={{ marginLeft: 5, marginVertical: 3, fontWeight: "bold" }}>
        Voter ID
      </Text>
      <Text style={{marginHorizontal: 5, marginBottom: 2}}>
          -
      </Text>
      <Text style={{ marginLeft: 5, marginVertical: 3, fontWeight: "bold" }}>
        Aadhaar Number
      </Text>
      <Text style={{marginHorizontal: 5, marginBottom: 2}}>
          -
      </Text>
      <Text style={{ marginLeft: 5, marginVertical: 3, fontWeight: "bold" }}>
        Ration Card Type
      </Text>
      <Text style={{marginHorizontal: 5, marginBottom: 2}}>
          -
      </Text>
      <Text style={{ marginLeft: 5, marginVertical: 3, fontWeight: "bold" }}>
        Caste
      </Text>
      <Text style={{marginHorizontal: 5, marginBottom: 2}}>
          -
      </Text>
    </View>
    </View>
  );
};
