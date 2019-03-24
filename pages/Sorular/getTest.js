
function randInt(min,max){
	var range = max - min;
	var rand = Math.floor(Math.random() * (range + 1));
	return min + rand;
}
console.log(randInt(1,2))