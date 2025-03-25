import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PaperProvider } from "react-native-paper";
import HeaderScreen from "../../components/header/HeaderScreen";

const AddActivities = ({ navigation }) => {
  return (
    <PaperProvider>
      <HeaderScreen title="Tạo thời gian biểu mới" />
      <View>
        <Text>Add Activities</Text>
      </View>
    </PaperProvider>
  );
};

export default AddActivities;

const styles = StyleSheet.create({});
