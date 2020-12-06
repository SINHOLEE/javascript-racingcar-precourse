import Cars from "./Cars.js";

class RacingManager {
	constructor() {
		this.cars = null;
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
		this.cars.play(this._getRacingCount());
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
	insertCarNames = (carNames) => {
		if (!this._isCarNamesValid(carNames)) {
			return false;
		}
		// 중복된 작업이긴 한데 아직 잘 모르겠다.
		const splitedCarNames = this._genSplitedCarNames(carNames);
		this._initCars(splitedCarNames);
		return true;
	};
	getCars = () => {
		return this.cars;
	};

	_initCars = (splitedCarNames) => {
		if (this.cars !== null) {
			if (confirm("이미 입력받은 데이터가 있습니다. 새로 ")) {
				this.cars = new Cars(splitedCarNames);
			}
			return;
		}
		this.cars = new Cars(splitedCarNames);
	};

	_isCarNamesValid = (carNames) => {
		const splitedCarNames = this._genSplitedCarNames(carNames);
		if (!splitedCarNames) {
			return false;
		}
		if (this._isOverFiveCharsAtLeastOne(splitedCarNames)) {
			alert("5글자가 넘거나 공백인 이름이 있습니다.");
			return false;
		}
		return true;
	};

	_isOverFiveCharsAtLeastOne = (cars) => {
		return cars.some((car) => this._isOverThanFiveCharsOrZero(car));
	};

	_isOverThanFiveCharsOrZero = (carName) => {
		return carName.length > 5 || carName.length === 0;
	};

	_genSplitedCarNames = (carNames) => {
		try {
			const splitedCarNames = carNames.split(",");
			return splitedCarNames;
		} catch (error) {
			alert("콤마로 나뉘지 않습니다.");
			return null;
		}
	};
}

export default new RacingManager();
