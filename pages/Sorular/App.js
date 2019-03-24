/*
@author Yusuf Turhan Papurcu <yusufturhanp@gmail.com>
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './style';

let data = {
	"kademe1": {
		"id1": {
			"Soru": "Nasilsin1",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		},
		"id2": {
			"Soru": "Nasilsin2",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		}
	},
	"kademe2": {
		"id1": {
			"Soru": "Nasilsin3",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		},
		"id2": {
			"Soru": "Nasilsin4",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		}
	},
	"kademe3": {
		"id1": {
			"Soru": "Nasilsin5",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		},
		"id2": {
			"Soru": "Nasilsin6",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		}
	},
	"kademe4": {
		"id1": {
			"Soru": "Nasilsin7",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		},
		"id2": {
			"Soru": "Nasilsin8",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		}
	},
	"kademe5": {
		"id1": {
			"Soru": "Nasilsin9",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		},
		"id2": {
			"Soru": "Nasilsin10",
			"A": "Cok iyi",
			"B": "iyi",
			"C": "Eh iste",
			"D": "Kotu",
			"E": "Cok Kotu",
			"Cevap": "A"
		}
	}
}
export default class App extends Component {

	render() {
		return (
			<View style={styles.main}>
				<View style={styles.container1}>
					<Text style={{ fontFamily: "Quicksand", fontSize: 20 }}>Almanca Soru Uygulamasi</Text>
				</View>
				<Soru navigation = {this.props.navigation} />
			</View>
		)
	}
}

randInt = (min, max) => {
	let range = max - min;

	let rand = Math.floor(Math.random() * (range + 1));
	return min + rand;
}

class Soru extends Component {
	constructor(props) {
		super(props)
		this.state = { soru: {}, puan : 0 }
	}
	componentWillMount() {
		retrieveData().then(() => { this.setState({ soru: soru ,puan : puan}) })
	}
	render() {
		return (
			<View style={styles.soruMain}>
				<Text style={styles.soruText}>
					{this.state.soru.Soru}
				</Text>
				<TouchableOpacity style = {styles.soruSecenek}>
					<Text style = {styles.soruSecenekText}>
						{this.state.soru.A}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {styles.soruSecenek}>
					<Text style = {styles.soruSecenekText}>
						{this.state.soru.B}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {styles.soruSecenek}>
					<Text style = {styles.soruSecenekText}>
						{this.state.soru.C}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {styles.soruSecenek}>
					<Text style = {styles.soruSecenekText}>
						{this.state.soru.D}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style = {styles.soruSecenek}>
					<Text style = {styles.soruSecenekText}>
						{this.state.soru.E}
					</Text>
				</TouchableOpacity>
				<Text style = {[styles.soruSecenekText,{marginTop:50}]}>Puan : {this.state.puan}</Text>
				<TouchableOpacity onPress = {()=>{this.props.navigation.navigate("Finish")}}><Text style = {[styles.soruSecenekText,{marginTop:20}]}>Cikis</Text></TouchableOpacity>
			</View>
		)
	}

}

retrieveData = async () => {
	try {
		const value = await AsyncStorage.getItem('Score');
		if (value !== null) {
			puan = parseInt(value);
			let id = randInt(1, 2);
			let kademe = ""
			if (puan >= 0 && puan <= 20) {
				kademe = "kademe1"
			}
			else if (puan > 20 && puan <= 40) {
				kademe = "kademe2"
			}
			else if (puan > 40 && puan <= 60) {
				kademe = "kademe3"
			}
			else if (puan > 60 && puan <= 80) {
				kademe = "kademe4"
			}
			else if (puan > 80 && puan < 100) {
				kademe = "kademe5"
			}
			else if (puan === 100) {
				this.props.navigation.navigate(`Finish`)
			}
			soruText = "data." + kademe + ".id" + id
			soru = eval(soruText)
			return soru,puan
		}
	} catch (error) {
		console.log(error);
	}
};

/*
<TouchableOpacity onPress = {()=>{
	retrieveData().then((soru)=>{this.setState({soru:soru})})
	}}>
	<Text>State Yenile</Text>
</TouchableOpacity>
*/
