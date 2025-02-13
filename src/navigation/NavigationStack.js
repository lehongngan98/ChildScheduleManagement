import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../SplashScreen/SplashScreen";
import HomeScreen from "../view/HomeScreen";
import { useState } from "react";
import { useEffect } from "react";
import {
  RequestResetPassword,
  ResetPassword,
  SignIn,
  SignUp,
  Verification,
} from "../view/auth";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../redux/reducers/authReducer";

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



const AuthenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RequestResetPassword"
        component={RequestResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const NavigationStack = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const { getItem } = useAsyncStorage("auth");

  const auth = useSelector(authSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    checkLogin();

    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const checkLogin = async () => {
    const res = await getItem();

    if (res) {
      dispatch(addAuth(JSON.parse(res)));
      console.log("res :", res);
    } else {
      // Xử lý trường hợp không tìm thấy thông tin đăng nhập
    }
  };

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : auth.accesstoken ? (
        <MainNavigator />
      ) : (
        <AuthenNavigation />
      )}
      {/* {isShowSplash ? <SplashScreen /> : <AuthenNavigation />} */}
    </>
  );
};

export default NavigationStack;
