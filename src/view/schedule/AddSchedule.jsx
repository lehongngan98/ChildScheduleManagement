import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Switch,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import themeContext from "../../context/themeContext";
import { PaperProvider } from "react-native-paper";
import HeaderScreen from "../../components/header/HeaderScreen";

const AddSchedule = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [isExam, setIsExam] = useState(false);
  const [isWeekly, setIsWeekly] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const [lessons, setLessons] = useState([
    { label: "Tiết 1 - Tiết 3", value: "1-3" },
    { label: "Tiết 4 - Tiết 6", value: "4-6" },
    { label: "Tiết 7 - Tiết 9", value: "7-9" },
  ]);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setShowPicker(!showPicker);
    setDate(currentDate);
  };

  return (
    <PaperProvider>
      <HeaderScreen title="Tạo thời khóa biểu mới" />

      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Date Picker */}
          <TouchableOpacity
            onPress={() => setShowPicker(!showPicker)}
            style={styles.datePicker}
          >
            <Text>
              Ngày {date.getDate()}, Tháng {date.getMonth() + 1},{" "}
              {date.getFullYear()}
            </Text>
            <Ionicons name="chevron-down" size={20} />
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
              style={{ marginBottom: 12 }}
            />
          )}

          {/* Text Inputs */}
          <TextInput
            placeholder="Tên môn học"
            style={styles.input}
            value={subjectName}
            onChangeText={setSubjectName}
          />
          <TextInput
            placeholder="Tên giảng viên giảng dạy"
            style={styles.input}
            value={teacherName}
            onChangeText={setTeacherName}
          />

          {/* DropDown for Tiết học */}
          <DropDownPicker
            open={open}
            value={selectedLesson}
            items={lessons}
            setOpen={setOpen}
            setValue={setSelectedLesson}
            setItems={setLessons}
            placeholder="Chọn tiết học"
            style={styles.dropdown}
            dropDownContainerStyle={{ borderColor: "#ccc" }}
          />

          {/* Switch: Lịch học / Lịch thi */}
          <View style={styles.switchRow}>
            <View
              style={[styles.labelBox, !isExam ? styles.activeBoxBlue : null]}
            >
              <Text style={{ color: !isExam ? "#fff" : "#000" }}>Lịch học</Text>
            </View>
            <Switch
              value={isExam}
              onValueChange={() => setIsExam(!isExam)}
              thumbColor={isExam ? "#fff" : "#fff"}
              trackColor={{ false: "#ccc", true: "red" }}
            />
            <View
              style={[styles.labelBox, isExam ? styles.activeBoxRed : null]}
            >
              <Text style={{ color: isExam ? "#fff" : "#000" }}>Lịch thi</Text>
            </View>
          </View>

          {/* Weekly toggle */}
          <View style={styles.switchRow}>
            <Text>Bổ sung thành định kỳ hàng tuần</Text>
            <Ionicons
              name={isWeekly ? "checkmark-circle-outline" : "ellipse-outline"}
              size={24}
              color={isWeekly ? "green" : "#ccc"}
              onPress={() => setIsWeekly(!isWeekly)}
              style={{ marginLeft: 8 }}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>TẠO LỊCH</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PaperProvider>
  );
};

export default AddSchedule;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  datePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  dropdown: {
    marginBottom: 15,
    borderColor: "#ccc",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  labelBox: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    marginHorizontal: 10,
  },
  activeBoxBlue: {
    backgroundColor: "#7ce0f9",
    borderColor: "#7ce0f9",
  },
  activeBoxRed: {
    backgroundColor: "#f55",
    borderColor: "#f55",
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});
