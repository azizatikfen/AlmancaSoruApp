/*
@author Yusuf Turhan Papurcu <yusufturhanp@gmail.com>
*/
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontFamily: "Quicksand",
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontFamily: "Quicksand",
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  go: {
    marginTop:30,
    width: '50%',
    aspectRatio: 4,
    borderRadius: 25,
    shadowColor: "black",
    backgroundColor:"#F5FFFF",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.2,
    elevation: 2
  }
});
