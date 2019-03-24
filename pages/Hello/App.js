/*
@author Yusuf Turhan Papurcu <yusufturhanp@gmail.com>
*/
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Almanca Soru Uygulamasına</Text>
        <Text style={styles.welcome}>Hoş Geldiniz</Text>
        <TouchableOpacity style={styles.go} onPress={() => { this.props.navigation.navigate("Sorular") }}>
          <Text style={styles.welcome}>Başla</Text>
        </TouchableOpacity>
      </View>
    );
  }
}