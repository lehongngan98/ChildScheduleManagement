import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Appbar, PaperProvider } from "react-native-paper";
import themeContext from "../../context/themeContext";
// import Bubble from "../Bubble/Bubble";
// import DictionarySearch from "./components/DictionarySearch";
import Subject from "./components/Subject";

const HomeScreen = () => {
  const theme = useContext(themeContext);

  return (
    <PaperProvider style={{ flex: 1 }}>
      <Appbar.Header
        elevated="true"
        style={{ backgroundColor: theme.background }}
      >
        <View
          style={{
            width: "85%",
            height: "100%",
            justifyContent: "center",
            paddingLeft: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 30, color: "#3B7DED" }}>
            CMS
          </Text>
        </View>

        <TouchableOpacity>
          <Appbar.Action icon="bell" size={30} color={theme.color} />
        </TouchableOpacity>
      </Appbar.Header>

      <View style={{ flex: 1.2, backgroundColor: theme.background }}>
        {/* search bar */}
        {/* <DictionarySearch /> */}
      </View>

      <View style={{ flex: 8.8 }}>
        <ScrollView
          style={{ backgroundColor: theme.background }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Subject */}
          <Subject />

          {/* bubble */}
          {/* <Bubble /> */}
        </ScrollView>
      </View>
    </PaperProvider>
  );
};

export default HomeScreen;
