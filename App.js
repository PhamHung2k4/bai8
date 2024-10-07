import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

function ScanScreen({ navigation }) {
  return (
    <View style={styles.scanContainer}>
      {/* Nút "Back" ở góc trên bên trái */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      {/* Ảnh scan ở giữa màn hình */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://cdn.glitch.global/fb318deb-f749-41dd-8f97-6cb42cd2267e/6dd6feb2-6f94-44b9-a271-0f8c2b2678d9.image.png?v=1728288056368' }}
          style={styles.scanImage}
        />
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"  // Mặc định mở màn hình chính
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'scan' : 'scan-outline';  // Biểu tượng cho Scan
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00bfff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scanContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,   // Khoảng cách từ trên xuống
    left: 20,  // Khoảng cách từ trái qua
    zIndex: 1, // Đặt trên các thành phần khác
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanImage: {
    width: 200,  // Chiều rộng của ảnh scan
    height: 400, // Chiều cao của ảnh scan
    resizeMode: 'contain',  // Đảm bảo ảnh không bị méo
  },
});