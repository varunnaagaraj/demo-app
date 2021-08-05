import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart, StackedBarChart } from "react-native-chart-kit";

const data = {
  legend: ["Demand", "Collection"],
  labels: ["April", "May", "June"],
  data: [
    [50000, 50000],
    [50000, 0],
    [35000, 0],
  ],
  barColors: ["red", "blue"],
};

const chartConfig = {
  backgroundGradientFrom: "black",
  backgroundGradientFromOpacity: 0.3,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `black`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

// Reference: https://www.npmjs.com/package/react-native-chart-kit

export const DemandGraph = () => {
  return (
    <View
      style={{
        margin: 20,
        width: Dimensions.get("window").width - 40,
        marginRight: 25,
        height: 325,
        backgroundColor: "white",
        borderTopColor: "darkblue",
        borderTopWidth: 4,
      }}
    >
      <Text style={{ fontSize: 20, marginVertical: 10, marginLeft: 20 }}>Demand Graph</Text>
      <View
        style={{
          flexDirection: "column",
          width: Dimensions.get("window").width * 0.6,
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "center", marginVertical: 10 }}>
          Demand v/s Collection: From Apr-2021 to Mar-2022
        </Text>
        <View style={{ flexDirection: "row" }}>
          <StackedBarChart
            style={{ marginHorizontal: 20, justifyContent: "center" }}
            yLabelsOffset={-5}
            data={data}
            hideLegend={true}
            width={Dimensions.get("window").width * 0.6}
            height={220}
            chartConfig={chartConfig}
          />
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  height: 20,
                  width: 30,
                  zIndex: 99,
                  backgroundColor: "red",
                  marginBottom: 10,
                  marginRight: 5,
                }}
              ></View>
              <Text>Demand</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  height: 20,
                  width: 30,
                  zIndex: 99,
                  backgroundColor: "blue",
                  marginRight: 5,
                }}
              ></View>
              <Text>Collection</Text>
            </View>
            <View style={{ borderColor: "black", borderWidth: 0.4, width: 250, height: 100, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Total Demand: 150000 units</Text>
              <Text>Total Collection: 50000 units</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
