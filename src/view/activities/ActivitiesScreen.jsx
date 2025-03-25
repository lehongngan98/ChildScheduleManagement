import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import themeContext from "../../context/themeContext";
import { PaperProvider } from "react-native-paper";
import HeaderScreen from "../../components/header/HeaderScreen";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";

const ActivitiesScreen = ({ navigation }) => {
  const theme = useContext(themeContext);

  const activities = [
    {
      id: 1,
      title: "Hoạt động thể chất",
      icon: "🏃",
      duration: "45 phút",
      start: "16 giờ 45 phút",
    },
    {
      id: 2,
      title: "Học tập",
      icon: "📘",
      duration: "180 phút",
      start: "18 giờ 00 phút",
    },
    {
      id: 3,
      title: "Vệ sinh cá nhân",
      icon: "🧼",
      duration: "20 phút",
      start: "21 giờ 30 phút",
    },
  ];
  return (
    <PaperProvider>
      <HeaderScreen
        title="Thời gian biểu"
        showAddIcon="true"
        onPress={() => navigation.navigate("AddActivities")}
      />

      {activities.length === 0 ? (
        <View style={{ flex: 1 }}>
          <View style={styles.noScheduleContainer}>
            <Image
              source={require("../../img/imgTab/run.png")}
              style={styles.image}
            />
            <Text style={styles.noText}>
              Hiện tại không có thời gian biểu nào
            </Text>
            <Text style={styles.noText}>
              Bạn hãy tạo thời gian biểu cho trẻ
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate("AddSchedule")}
            >
              <Text style={styles.addButtonText}>THÊM THỜI GIAN BIỂU MỚI</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>Thời gian biểu của Nguyễn Văn Y</Text>
          <ScrollView>
            {activities.map((item) => (
              <View key={item.id} style={styles.card}>
                <Text style={styles.title}>
                  {item.icon} {item.title}
                </Text>
                <Text>
                  Thời lượng:{" "}
                  <Text style={{ color: "#33CC66" }}>{item.duration}</Text>
                </Text>
                <Text>
                  Thời gian bắt đầu:{" "}
                  <Text style={{ color: "#33CC66" }}>{item.start}</Text>
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </PaperProvider>
  );
};

export default ActivitiesScreen;

const styles = StyleSheet.create({
  noScheduleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  noText: {
    fontSize: 14,
    textAlign: "center",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#33CC66",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  container: { padding: 16, flex: 1, backgroundColor: "#fff" },
  header: { fontSize: 16, marginBottom: 12, fontWeight: "bold" },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
  },
  title: {
    color: "#00B0FF",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
});
