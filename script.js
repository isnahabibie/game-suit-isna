class Start {
  constructor() {
    this.playerName = "Player";
    this.botName = "BOT";
    this.playerOption;
    this.botOption;
    this.winner = "";
  }

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  botBrain() {
    const option = ["kertas", "gunting", "batu"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  winCalculation() {
    if (this.botOption == "kertas" && this.playerOption == "gunting") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "kertas" && this.playerOption == "batu") {
      return (this.winner = this.botName);
    } else if (this.botOption == "gunting" && this.playerOption == "kertas") {
      return (this.winner = this.botName);
    } else if (this.botOption == "gunting" && this.playerOption == "batu") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "batu" && this.playerOption == "kertas") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "batu" && this.playerOption == "gunting") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "DRAW");
    }
  }

  matchResult() {
    if (this.winner != "DRAW") {
      return `${this.winner} MENANG!`;
    } else {
      return this.winner;
    }
  }
}

function pickOption(params) {
  const start = new Start();
  start.setPlayerOption = params;
  start.botBrain();
  start.setBotOption = start.botBrain();
  start.winCalculation();

  // const inGame = document.getElementById("inGame");
  const result = document.getElementById("result");

  // inGame.textContent = "..."
  result.textContent = "...";

  setTimeout(() => {
    // inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
    result.textContent = start.matchResult();
  }, 1500);
}
