import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import HomeScreen from "../Screen/HomeScreen";
import ExploreScreen from "../Screen/ExploreScreen";
import AddPostScreen from "../Screen/AddPostScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import { Entypo } from "@expo/vector-icons";

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="compass" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Add Post"
        component={AddPostScreen}
        options={{
          tabBarLabel: "Add Post",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="plus" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
