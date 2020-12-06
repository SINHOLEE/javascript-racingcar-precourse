export default class Car {
	constructor(name, distance = 0) {
		this.name = name;
		this.distance = distance;
	}

	goOrStop = () => {
		const randomIntBtwZeroAndNine = Math.floor(Math.random() * 10);
		const { name, distance } = { ...this };
		if (randomIntBtwZeroAndNine >= 4) {
			const newDistance = this.addOneDistance();
			return new Car(name, newDistance);
		}
		return new Car(name, distance);
	};

	addOneDistance = () => {
		return this.distance + 1;
	};
	_getDistance = () => {
		return this.distance;
	};
	greaterThan = (car) => {
		return this._getDistance() - car._getDistance() > 1;
	};
	equalTo = (car) => {
		return this._getDistance() === car._getDistance();
	};
}
