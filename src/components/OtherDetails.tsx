import React, { useState } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { RadioButton, Button, DataTable } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

export const OtherDetails = (props: any) => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <View
      style={{
        margin: 20,
        width: Dimensions.get("window").width-40,
        marginRight: 25,
        height: 150,
        backgroundColor: "white",
        borderTopColor: "darkblue",
        borderTopWidth: 4,
        alignContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, marginVertical: 10, marginLeft: 10 }}>
        Other Details
      </Text>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title style={{marginRight: -25}}>Tarriff</DataTable.Title>
        <DataTable.Title style={{marginRight: -30}}>Service Date</DataTable.Title>
        <DataTable.Title style={{marginRight: -15}} >Sanction Load</DataTable.Title>
        <DataTable.Title style={{marginRight: -5}} >Sanction HP</DataTable.Title>
        <DataTable.Title style={{marginRight: -5}} >Meter Constant</DataTable.Title>
        <DataTable.Title style={{marginRight: 5}} >Contract Demand</DataTable.Title>
        <DataTable.Title style={{marginRight: 20}} >Average Consumption</DataTable.Title>
        <DataTable.Title style={{marginRight: 5}} >Type of installation</DataTable.Title>
        <DataTable.Title style={{marginRight: -20}} >Status</DataTable.Title>
        <DataTable.Title style={{marginRight: 5}} >Disconnection Date</DataTable.Title>
        <DataTable.Title style={{marginRight: 5}} >Reading Date</DataTable.Title>
        <DataTable.Title style={{marginRight: -15}} >Due Date</DataTable.Title>
        <DataTable.Title>Rebate</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell style={{marginRight: -25}}>HT-2(a)(iii)</DataTable.Cell>
        <DataTable.Cell style={{marginRight: -30}}>10/6/2021</DataTable.Cell>
        <DataTable.Cell style={{marginRight: -15}} >100.0</DataTable.Cell>
        <DataTable.Cell style={{marginRight: -5}} >0.0</DataTable.Cell>
        <DataTable.Cell style={{marginRight: -5}} >500.0</DataTable.Cell>
        <DataTable.Cell style={{marginRight: 5}} >100.0</DataTable.Cell>
        <DataTable.Cell style={{marginRight: 20}} >4457.0</DataTable.Cell>
        <DataTable.Cell style={{marginRight: 5}} >-</DataTable.Cell>
        <DataTable.Cell style={{marginRight: -20}} >Live</DataTable.Cell>
        <DataTable.Cell style={{marginRight: 5}} >-</DataTable.Cell>
        <DataTable.Cell style={{marginRight: 5}} >01st June</DataTable.Cell>
        <DataTable.Cell style={{marginRight: -15}} >15th June</DataTable.Cell>
        <DataTable.Cell>No Rebate</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    </View>
  );
};
