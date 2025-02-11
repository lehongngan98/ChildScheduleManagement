import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../SplashScreen/SplashScreen";
import HomeScreen from "../view/HomeScreen";
import { useState } from "react";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigationContainer"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const NavigationStack = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    // checkLogin();

    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {/* {isShowSplash ? (
          <SplashScreen />
        ) : auth.accesstoken ? (
          <MainNavigator />
        ) : (
          <AuthenNavigation />
        )} */}
      {isShowSplash ? <SplashScreen /> : <HomeScreen />}
    </>
  );
};

export default NavigationStack;
