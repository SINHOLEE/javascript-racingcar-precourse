import racingManager from "./RacingManager.js";

class DomController {
	constructor() {
		this.racingManager = racingManager;
		this.$carNamesInput = document.getElementById("car-names-input");
		this.$carNamesSubmit = document.getElementById("car-names-submit");
		this.$racingCountInput = document.getElementById("racing-count-input");
		this.$racingCountSubmit = document.getElementById("racing-count-submit");
		this.$carNames = document.getElementById("car-names");
		this.$racingCount = document.getElementById("racing-count");
		this.$GameResult = document.getElementById("game-result");
	}

	init = () => {
		this.setGameResultVisibility(false);
		this.setRacingCountVisibility(false);
		this.$carNamesSubmit.addEventListener("click", this.handleCarNamesSubmit);
		this.$racingCountSubmit.addEventListener(
			"click",
			this.handleRacingCountSubmit
		);
	};
	/**
	 * car names 받는 함수
	 * 받기만하고, game인스턴스가 setCars()메서드를 실행
	 * 에러를 뿜으면 그대로, 에러가 없으면 setRacingCountVisibility(true)실행
	 *
	 * **/
	handleRacingCountSubmit = (e) => {
		const inputRacingCount = this.$racingCountInput.value;
		if (this.racingManager.insertRacingCount(inputRacingCount)) {
			this.setGameResultVisibility(true);
		}
		this.$GameResult.innerHTML += this.racingManager.createHTML();
	};

	handleCarNamesSubmit = (e) => {
		const InputCarnames = this.$carNamesInput.value;
		if (this.racingManager.insertCarNames(InputCarnames)) {
			this.setRacingCountVisibility(true);
		}
	};
	/**
	 * 결과창 display 설정
	 * @params {boolean }
	 * **/
	setGameResultVisibility = (visible) => {
		this.$GameResult.style.display = visible ? "block" : "none";
	};
	/**
	 * racing 횟수 받는 element display 설정
	 * @params {boolean }
	 * **/
	setRacingCountVisibility = (visible) => {
		this.$racingCount.style.display = visible ? "block" : "none";
	};
}

export default new DomController();
