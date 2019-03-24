/*
@author Yusuf Turhan Papurcu <yusufturhanp@gmail.com>
*/
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class App extends Component {
  constructor(props) {
    super(props)
    const { navigation } = this.props
    const puan = navigation.getParam("puan", 0)
    let message = ""
    if (puan >= 0 && puan <= 20) {
      message = "Sıkı Çalış !!"
    }
    else if (puan > 20 && puan <= 40) {
      message = "Biraz Daha Çalışmalısın."
    }
    else if (puan > 40 && puan <= 60) {
      message = "Haydi Olacak"
    }
    else if (puan > 60 && puan <= 80) {
      message = "Güzeeel"
    }
    else if (puan > 80) {
      message = "Muntazam Bir Tablo Gibi"
    }
    this.state = { puan: puan, message: message }
  }
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text>{this.state.message}</Text>
        <Text>Puan : {this.state.puan}</Text>
      </View>
    )
  }
}