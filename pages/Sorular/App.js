/*
@author Yusuf Turhan Papurcu <yusufturhanp@gmail.com>
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
let puan = 0
export default class App extends Component {

	render() {
		return (
			<View style={styles.main}>
				<View style={styles.container1}>
					<Text style={{ fontFamily: "Quicksand", fontSize: 20 }}>Almanca Soru Uygulaması</Text>
				</View>
				<Soru navigation={this.props.navigation} />
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
		this.retrieveData = this.retrieveData.bind(this)
		this.state = { soru: {}, }
	}
	componentWillMount() {
		const soru = this.retrieveData()
		this.setState({ soru: soru })
	}
	_checkTrue = (secenek) => {
		if (this.state.soru.Cevap === secenek) {
			puan += 10
		}
		else {
			puan -= 10
		}
	}
	retrieveData = () => {
		let id = randInt(1, 2);
		let kademe = "kademe1"
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
		else if (puan >= 100) {
			this.props.navigation.navigate("Finish", { puan: puan })
		}
		soruText = "data." + kademe + ".id" + id
		soru = eval(soruText)
		return soru

	};

	render() {
		return (
			<View style={styles.soruMain}>
				<Text style={styles.soruText}>
					{this.state.soru.Soru}
				</Text>
				<TouchableOpacity style={styles.soruSecenek} onPress={() => {
					this._checkTrue("A", puan)
					const soru = this.retrieveData()
					this.setState({ soru: soru })
				}}>
					<Text style={styles.soruSecenekText}>
						{this.state.soru.A}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.soruSecenek} onPress={() => {
					this._checkTrue("B", puan)
					const soru = this.retrieveData()
					this.setState({ soru: soru })
				}}>
					<Text style={styles.soruSecenekText}>
						{this.state.soru.B}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.soruSecenek} onPress={() => {
					this._checkTrue("C", puan)
					const soru = this.retrieveData()
					this.setState({ soru: soru })
				}}>
					<Text style={styles.soruSecenekText}>
						{this.state.soru.C}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.soruSecenek} onPress={() => {
					this._checkTrue("D", puan)
					const soru = this.retrieveData()
					this.setState({ soru: soru })
				}}>
					<Text style={styles.soruSecenekText}>
						{this.state.soru.D}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.soruSecenek} onPress={() => {
					this._checkTrue("E", puan)
					const soru = this.retrieveData()
					this.setState({ soru: soru })
				}}>
					<Text style={styles.soruSecenekText}>
						{this.state.soru.E}
					</Text>
				</TouchableOpacity>
				<Text style={[styles.soruSecenekText, { marginTop: 50 }]}>Puan : {puan}</Text>
				<TouchableOpacity onPress={() => { this.props.navigation.navigate("Finish", { puan: puan }) }}><Text style={[styles.soruSecenekText, { marginTop: 20 }]}>Çıkış</Text></TouchableOpacity>
			</View>
		)
	}

}