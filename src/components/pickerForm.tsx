import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

export const PickerForm = (props: { pickerList: any }) => {
  const { pickerList } = props;
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
      {[...Object.keys(pickerList)].map((item) => {
        console.log("Item is: ", item, typeof pickerList[item]);
        const [pickerState, setPickerstate] = useState(pickerList[0]);
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "red", margin: 10, fontWeight: "bold" }}>
              <Text style={{ color: "black" }}>{item}</Text>*
            </Text>
            {typeof pickerList[item] === "object" ? (
              <Picker
                itemStyle={{ height: 50 }}
                style={{ width: 150, position: "absolute", marginLeft: 140 }}
                selectedValue={pickerState}
                onValueChange={(v: any, index: number) => {setPickerstate(pickerList[index]); console.log("Pickerstate: ", pickerState)}}
              >
                {pickerList[item].map?.((i: string | undefined) => (
                  <Picker.Item label={i} value={pickerState} key={i} />
                ))}
              </Picker>
            ) : (
              <Text>{pickerList[item]}</Text>
            )}
          </View>
        );
      })}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View style={{ marginHorizontal: 5 }}>
          <Button mode="contained" onPress={() => {}} disabled={true} labelStyle={{fontSize:10, color: "black"}} style={{backgroundColor: "#EEEEEE"}}>Show</Button>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <Button mode="contained"  onPress={() => {}} disabled={false} labelStyle={{fontSize:10, color: "black"}} style={{backgroundColor: "#EEEEEE"}}>Reset</Button>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <Button mode="contained"  onPress={() => {}} disabled={false} labelStyle={{fontSize:10, color: "black"}} style={{backgroundColor: "#EEEEEE"}}>Exit</Button>
        </View>
      </View>
    </View>
  );
};
