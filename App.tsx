import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { PickerForm } from "./src/components/pickerForm";
import { styles } from "./src/assets/styles/styles";
import { CustomerTile } from "./src/components/CustomerDetailsTile";
import { PersonalDetails } from "./src/components/PersonalDetailsTile";
import { CustomerLocationTile } from "./src/components/CustomerLocation";
import { NetworkTile } from "./src/components/NetworkTile";
import { OtherDetails } from "./src/components/OtherDetails";
import { DemandGraph } from "./src/components/DemandGraph";
import { ConsumptionGraph } from "./src/components/ConsumptionGraph";

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView
        style={{
          height: 100,
          backgroundColor: "lightblue",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Admin
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Masters
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Connection
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Billing
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Spot Billing
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Metering
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Collection
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Disconnection
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Approval
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15
            }}
          >
            Reports
          </Text>
        </View>
      </SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlignVertical: "center",
            marginRight: 15,
          }}
        >
          Customer History
        </Text>
        <Text style={{ textAlignVertical: "center" }}>
          {new Date().toString()}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <PickerForm
          pickerList={{
            Division: ["division1", "division2", "division3"],
            "Sub Division": ["sd1", "sd2", "sd3"],
            "Financial Year": ["2019", "2020", "2021"],
            "Connection Id": "120340023",
            "RR No": "83993",
          }}
        />
        <CustomerTile />
        <PersonalDetails />
        <View style={{ flexDirection: "column" }}>
          <NetworkTile />
          <CustomerLocationTile />
        </View>
        <OtherDetails />
        <DemandGraph />
        <ConsumptionGraph />
      </View>
    </ScrollView>
  );
};

export default App;
