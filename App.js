import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  // Apply dark or light mode style
  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[themeStyles.container]}>
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={themeStyles.profileContainer}>
        {/* Profile Picture */}
        <Image
          style={themeStyles.profileImage}
          source={require('./assets/image.png')}
        />

        {/* User's Name */}
        <Text style={themeStyles.userName}>Arriane Dadang</Text>

        {/* Profile Section */}
        <View style={themeStyles.optionsContainer}>
          <Text style={themeStyles.heading}>Profile</Text>
          <TouchableOpacity style={themeStyles.option}>
            <Text style={themeStyles.optionText}>Manage User</Text>
            <Ionicons name="person-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          </TouchableOpacity>
        </View>

        {/* Settings Section */}
        <Text style={[themeStyles.heading, themeStyles.settingsHeading]}>Settings</Text>

        {/* Settings Options */}
        <View style={themeStyles.optionsContainer}>
          {/* Notifications */}
          <TouchableOpacity style={themeStyles.option}>
            <Text style={themeStyles.optionText}>Notifications</Text>
            <Ionicons name="notifications-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          </TouchableOpacity>

          {/* Privacy and Policy */}
          <TouchableOpacity style={themeStyles.option}>
            <Text style={themeStyles.optionText}>Privacy and Policy</Text>
            <Ionicons name="shield-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          </TouchableOpacity>

          {/* Dark Mode Toggle */}
          <View style={themeStyles.option}>
            <Text style={themeStyles.optionText}>Dark Mode</Text>
            <Switch
              trackColor={{ false: "#6A5ACD", true: "#32cd32" }}
              thumbColor={isDarkMode ? "#32cd32" : "#6A5ACD"}
              onValueChange={toggleDarkMode}
              value={isDarkMode}
            />
          </View>

          {/* Sign Out */}
          <TouchableOpacity style={themeStyles.option}>
            <Text style={[themeStyles.optionText, themeStyles.signOut]}>Sign Out</Text>
            <Ionicons name="log-out-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

// Light Mode Styles
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
    paddingBottom: 20,
    backgroundColor: '#afeeee',
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#6A5ACD',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 15,
    color: '#333',
    textAlign: 'left', 
    width: '100%',
    paddingLeft: 0, 
  },
  settingsHeading: {
    marginTop: 30, 
    marginBottom: 2,
    paddingLeft: 15,
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#6A5ACD',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  signOut: {
    color: '#ff6347',
  },
});

// Dark Mode Styles
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
    paddingBottom: 20,
    backgroundColor: '#2c2c2c',
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#32cd32',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 15,
    color: '#fff',
    textAlign: 'left', // Aligned to the left
    width: '100%',
    paddingLeft: 0,
  },
  settingsHeading: {
    marginTop: 30,
    marginBottom: 2,
    paddingLeft: 15,
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#32cd32',
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
  },
  signOut: {
    color: '#ff6347',
  },
});
