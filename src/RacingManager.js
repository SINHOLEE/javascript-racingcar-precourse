import Car from "./Car.js";

class RacingManager {
	constructor() {
		this.cars = [];
		this.racingCount = 0;
	}

	insertRacingCount = (number) => {
		if (!this._isInt(number)) {
			alert("정수만 입력해주세요.");
			return false;
		}

		if (parseInt(number) < 1) {
			alert("0보다 큰 정수를 입력해 주세요.");
			return false;
		}
		this._setRacingCount(parseInt(number));
		return true;
	};

	play = () => {
		for (let i = 0; i < this._getRacingCount(); i++) {
			const new_cars = this.cars.map((car) => car.goOrStop());
			console.log(new_cars);
		}
	};

	_isInt = (inputNumber) => {
		return (
			inputNumber % 1 === 0 && parseInt(inputNumber).toString() === inputNumber
		);
	};
	_setRacingCount = (number) => {
		this.racingCount = number;
	};

	_getRacingCount = () => {
		return this.racingCount;
	};
	insertCarNames = (carnames) => {
		if (!this._isCarNamesValid(carnames)) {
			return false;
		}
		// 중복된 작업이긴 한데 아직 잘 모르겠다.
		const splitedCars = this._genSplitedCars(carnames);
		this._setCars(splitedCars);
		return true;
	};
	getCars = () => {
		return this.cars;
	};

	_setCars = (carnames) => {
		this.cars = carnames.map((carname) => new Car(carname));
	};

	_isCarNamesValid = (carnames) => {
		const splitedCars = this._genSplitedCars(carnames);
		if (!splitedCars) {
			return false;
		}
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
