import Car from "./Car.js";

class RacingManager {
	constructor() {
		this.cars = [];
	}

	getCarNames = (carnames) => {
		if (!this._isCarNamesValid(carnames)) {
			return false;
		}
		// 중복된 작업이긴 한데 아직 잘 모르겠다.
		const splitedCars = this._genSplitedCars(carnames);
		this._setCars(splitedCars);
		console.log(this.cars);
		return true;
	};

	_setCars = (carnames) => {
		this.cars = carnames.map((carname) => new Car(carname));
	};

	_isCarNamesValid = (carnames) => {
		const splitedCars = this._genSplitedCars(carnames);
		if (!splitedCars) {
			return false;
		}
		console.log({ splitedCars });
		if (this._isOverFiveCharsAtLeastOne(splitedCars)) {
			alert("5글자가 넘는 이름이 있습니다.");
			return false;
		}
		return true;
	};

	_isOverFiveCharsAtLeastOne = (cars) => {
		return cars.some((car) => this._isOverThanFiveChars(car));
	};

	_isOverThanFiveChars = (car) => {
		console.log(typeof car);
		console.log(car.length);
		return car.length > 5;
	};

	_genSplitedCars = (carnames) => {
		try {
			const splitedCars = carnames.split(",");
			return splitedCars;
		} catch (error) {
			alert("콤마로 나뉘지 않습니다.");
			return null;
		}
	};
}

export default new RacingManager();
