import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart, StackedBarChart } from "react-native-chart-kit";

const data = {
  labels: ["April", "May", "June"],
  datasets: [
    {
      data: [80, 99, 43],
      color: (opacity = 1) => `rgba(0, 117, 0, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Consumption"], // optional
};

const chartConfig = {
  backgroundGradientFrom: "green",
  backgroundGradientFromOpacity: 0.3,
  backgroundGradientTo: "darkgreen",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

// Reference: https://www.npmjs.com/package/react-native-chart-kit

export const ConsumptionGraph = () => {
  return (
    <View
      style={{
        margin: 20,
        width: Dimensions.get("window").width - 40,
        marginRight: 25,
        height: 350,
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
          Consumption: From Apr-2021 to Mar-2022
        </Text>
        <View style={{ flexDirection: "row" }}>
          <LineChart
            style={{ marginHorizontal: 20, justifyContent: "center" }}
            // yLabelsOffset={-5}
            data={data}
            width={Dimensions.get("window").width * 0.6}
            height={220}
            chartConfig={chartConfig}
            fromZero={true}
          />
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  height: 20,
                  width: 30,
                  zIndex: 99,
                  backgroundColor: "green",
                  marginBottom: 10,
                  marginRight: 5,
                }}
              ></View>
              <Text>Consumption</Text>
            </View>
            <View
              style={{
                borderColor: "black",
                borderWidth: 0.4,
                width: 250,
                height: 100,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Total Consumption: 10275.00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
