class Car {
	constructor(name) {
		this.name = name;
		this.distance = 0;
	}

	goOrStop = () => {
		const randomIntBtwZeroAndNine = Math.floor(Math.random() * 10);
		if (randomIntBtwZeroAndNine >= 4) {
			this.addOneDistance();
		}
	};

	addOneDistance = () => {
		this.distance++;
	};
}
