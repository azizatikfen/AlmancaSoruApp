/*
@author Yusuf Turhan Papurcu <yusufturhanp@gmail.com>
*/
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Hello from './pages/Hello/App';
import FinishRow from './pages/Finish/App';
import Soru from './pages/Sorular/App';

export class Home extends Component {
  render() {
    return (
      <Hello navigation={this.props.navigation} />
    )
  }
}

export class Finish extends Component {
  render() {
    return (
      <FinishRow navigation={this.props.navigation} />
    )
  }
}

export class Sorular extends Component {
  render() {
    return (
      <Soru navigation={this.props.navigation} />
    )
  }
}
const Navigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Finish: {
    screen: Finish
  },
  Sorular: {
    screen: Sorular
  }
},
  {
    headerMode: "none"
  })
export default createAppContainer(Navigator);
