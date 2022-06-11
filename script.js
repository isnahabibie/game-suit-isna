class start {
    constructor() {
        this.player = "player"
        this.bot = "bot"
        this.playerOption;
        this.pemenang = ""
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option){
        this.playerOption = option;
    }
}
let start = new start();
function pilih (params){
    start.setPlayerOption = params;
    console.log("kamu milih:", start.getPlayerOption);
}
