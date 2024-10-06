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

        {/* Edit Profile Button */}
        <TouchableOpacity style={themeStyles.editButton}>
          <Text style={themeStyles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Settings Options */}
        <View style={themeStyles.optionsContainer}>
          {/* Notifications */}
          <TouchableOpacity style={themeStyles.option}>
            <Text style={themeStyles.optionText}>Notifications</Text>
            <Ionicons name="notifications-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity style={themeStyles.option}>
            <Text style={themeStyles.optionText}>Settings</Text>
            <Ionicons name="settings-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
          </TouchableOpacity>

          {/* Privacy */}
          <TouchableOpacity style={themeStyles.option}>
            <Text style={themeStyles.optionText}>Privacy</Text>
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
  editButton: {
    backgroundColor: '#6A5ACD',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
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
  editButton: {
    backgroundColor: '#32cd32',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
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
});
