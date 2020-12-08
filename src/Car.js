export default class Car {
	constructor(name, distance = 0) {
		this.name = name;
		this.distance = distance;
	}
	resetDistance = () => {
		const { name } = { ...this };
		return new Car(name);
	};

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
		return this._getDistance() - car._getDistance() > 0;
	};
	equalTo = (car) => {
		return this._getDistance() === car._getDistance();
	};
	createHTML = () => {
		return `<div class=name-${this.name}>${this.name}:${"-".repeat(
			this.distance
		)}</div>`;
	};
}
