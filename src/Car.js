export default class Car {
	constructor(name) {
		this.name = name;
		this.distance = 0;
	}

	goOrStop = () => {
		console.log("goOrStop");
		const randomIntBtwZeroAndNine = Math.floor(Math.random() * 10);
		if (randomIntBtwZeroAndNine >= 4) {
			this.addOneDistance();
		}
		// 불변성 보장 ㄴㄴ 어떻게 해야하지?
		return this;
		// console.log(this.name, this.distance);
	};

	addOneDistance = () => {
		this.distance++;
	};
}
