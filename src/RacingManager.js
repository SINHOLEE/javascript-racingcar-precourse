import Cars from "./Cars.js";

class RacingManager {
	constructor() {
		this.cars = null;
		this.racingCount = null;
	}
	play = () => {
		this.cars.play(this._getRacingCount());
	};
	_getRacingCount = () => {
		return this.racingCount;
	};
	insertRacingCount = (number) => {
		if (!this._isInt(number)) {
			alert("정수만 입력해주세요.");
			return false;
		}

		if (parseInt(number) < 1) {
			alert("0보다 큰 정수를 입력해 주세요.");
			return false;
		}
		if (
			this.racingCount !== null &&
			confirm("이미 시도할 횟수를 입력했습니다. 새롭게 등록하시겠습니까?")
		) {
			this.cars.resetCarsDistanceZero();
		}
		this._setRacingCount(parseInt(number));

		return true;
	};
	_isInt = (inputNumber) => {
		return (
			inputNumber % 1 === 0 && parseInt(inputNumber).toString() === inputNumber
		);
	};
	_setRacingCount = (number) => {
		this.racingCount = number;
	};
	//필요없는 메서드
	getCars = () => {
		return this.cars;
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
	_genSplitedCarNames = (carNames) => {
		try {
			const splitedCarNames = carNames.split(",");
			return splitedCarNames;
		} catch (error) {
			alert("콤마로 나뉘지 않습니다.");
			return null;
		}
	};
	_isOverFiveCharsAtLeastOne = (cars) => {
		return cars.some((car) => this._isOverThanFiveCharsOrZero(car));
	};

	_isOverThanFiveCharsOrZero = (carName) => {
		return carName.length > 5 || carName.length === 0;
	};

	_initCars = (splitedCarNames) => {
		if (this.cars === null) {
			this.cars = new Cars(splitedCarNames);
			return;
		}
		if (confirm("이미 입력받은 데이터가 있습니다. 새로 등록하시겠습니까?")) {
			this.cars = new Cars(splitedCarNames);
		}
	};
}

export default new RacingManager();
