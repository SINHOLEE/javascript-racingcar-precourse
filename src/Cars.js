import Car from "./Car.js";

export default class Cars {
	constructor(splitedCarNames) {
		// 1급 객체로 유지하기 위해
		this.cars = splitedCarNames.map((carName) => new Car(carName));
	}
	/**
	 * racingCount 만큼 반복해서 게임실행하는 메서드
	 * @params racingCount {number}
	 * **/
	resetCarsDistanceZero = () => {
		const resetedCars = this.cars.map((car) => car.resetDistance());
		this.cars = resetedCars;
	};

	play = (racingCount) => {
		for (let i = 0; i < racingCount; i++) {
			const newCars = this.cars.map((car) => car.goOrStop());
			this._setCars(newCars);
		}
		const winners = this.filterWinners();
	};
	_setCars = (cars) => {
		this.cars = cars;
	};

	getMaxDistanceCar = () => {
		const maxCar = this.cars.reduce((prevCar, car) => {
			if (prevCar === null) {
				return car;
			} else if (prevCar.greaterThan(car)) {
				return prevCar;
			} else {
				return car;
			}
		}, null);
		return maxCar;
	};

	filterWinners = () => {
		const maxCar = this.getMaxDistanceCar();
		return this.cars.filter((car) => car.equalTo(maxCar));
	};
}
