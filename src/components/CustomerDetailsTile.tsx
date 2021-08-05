import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton, Button } from "react-native-paper";

export const CustomerTile = (props: any) => {
  const [selectedExport, setSelectedExport] = useState("PDF");
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
      <Text style={{ fontSize: 20, textAlign: "center", marginVertical: 10 }}>
        Customer Details
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: "blue",
          marginBottom: 5,
        }}
      >
        MS Kmoils ..
      </Text>
      <Text style={{ marginLeft: 5, marginBottom: 2, fontWeight: "bold" }}>
        Address
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginHorizontal: 5,
          textAlign: "left",
          color: "blue",
          marginBottom: 5,
        }}
        numberOfLines={3}
        ellipsizeMode={"tail"}
      >
        Some random address placeholder blah blah blah blah blah blah blah blah
        blah blah
      </Text>
      <Text style={{ marginLeft: 5, marginBottom: 2, fontWeight: "bold" }}>
        Mobile Number
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginHorizontal: 5,
          textAlign: "left",
          color: "blue",
          marginBottom: 5,
        }}
      >
        +91 99999 99999
      </Text>
      <Text style={{ marginLeft: 5, marginBottom: 2, fontWeight: "bold" }}>
        Alternate Phone Number
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginHorizontal: 5,
          textAlign: "left",
          color: "blue",
          marginBottom: 5,
        }}
      >
        -
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ margin: 5, flexDirection: "row" }}>
          <RadioButton
            value={selectedExport}
            onPress={() => setSelectedExport("PDF")}
            status={selectedExport === "PDF" ? "checked" : "unchecked"}
          />
          <Text style={{ textAlignVertical: "center", marginTop: 10 }}>
            PDF
          </Text>
        </View>
        <View style={{ margin: 5, flexDirection: "row" }}>
          <RadioButton
            value={selectedExport}
            onPress={() => setSelectedExport("Excel")}
            status={selectedExport === "Excel" ? "checked" : "unchecked"}
          />
          <Text style={{ textAlignVertical: "center", marginTop: 10 }}>
            Excel
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button key={"paymentDetails"} mode="contained" onPress={() => {}} labelStyle={{fontSize:10, color: "black"}} style={{marginLeft: 10, marginRight: 4, backgroundColor: "#EEEEEE"}}>Payment Details</Button>
        <Button key={"customerDetails"} mode="contained" onPress={() => {}} labelStyle={{fontSize:10, color: "black"}} style={{marginRight: 10, backgroundColor: "#EEEEEE"}}>Customer Details</Button>
      </View>
    </View>
  );
};
