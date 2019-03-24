import { StyleSheet, Platform, Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

const top = Platform.select({ android: 0, ios: 20 })

export default StyleSheet.create({
	main: {
		top: top,
	},
	container1: {
		width: width,
		height: height / 10,
		backgroundColor: `#FFF`,
		alignItems: 'center',
		justifyContent: "center",
		borderBottomWidth: 0.2
	},
	soruMain: {
		height: height / 10 * 7.8,
		width: width,
		backgroundColor: `#FFF`,
		alignItems: 'center',
	},
	soruText: {
		fontFamily: `Quicksand`,
		fontSize: 18,
		marginTop: 20
	},
	soruSecenek: {
		width: width - width / 20,
		aspectRatio: 8 / 1,
		borderRadius: 25,
		backgroundColor: `#FFF`,
		alignItems: 'center',
		justifyContent: "center",
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 5,
		shadowOpacity: 0.1,
		elevation: 2,
		marginTop: 30
	},
	soruSecenekText: {
		fontFamily: `Quicksand`,
		fontSize: 18,
	}

})
