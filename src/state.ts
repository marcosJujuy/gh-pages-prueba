type Jugada = "piedra" | "papel" | "tijeras";
type Game = {
    computerPlay: Jugada,
    myPlay: Jugada,
}
const state = {
    data: {
        currentGame:{
            computerPlay: "",
            myPlay: ""
        },
        history:[{

        }]
    },
    setMove(move: Jugada){
        const currentState = this.getState();
        currentState.currentGame.myPlay ;
    },
    pushToHistory(play:Game){
        const currentState = this.getState();
        currentState.history(play);
    },
    whoWins(myPlay:Jugada, computerPlay:Jugada){
        const ganeConTijeras: Boolean = myPlay == "tijeras" && computerPlay == "papel";
        const ganeConPiedra: Boolean = myPlay == "piedra" && computerPlay == "tijeras";
        const ganeConPapel: Boolean = myPlay == "papel" && computerPlay == "piedra";
        const gane = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(true);
    },

};

// state.setMove("piedra");
state.pushToHistory({computerPlay:"piedra", myPlay:"tijeras"});