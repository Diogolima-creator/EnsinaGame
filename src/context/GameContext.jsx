import { createContext, useContext, useReducer} from "react";

//Context
const initialData = {
    gradeSelected: '',
    subjectSelected:'',
    reviewResults: [],
    answerCorrects: 0,
    gradeSelectedPos: 0,
    subjectSelectedPos: 0
}

const GameContext = createContext(undefined);

//Reducer
export const GameAction = {
    setgradeSelected: "setgradeSelected",
    setsubjectSelected: "setsubjectSelected",
    setreviewResults: "setreviewResults",
    setanswerCorrects: "setanswerCorrects",
    setgradeSelectedPos: "setgradeSelectedPos",
    setsubjectSelectedPos: "subjectSelectedPos"
}

const gameReducer = (state,action = GameAction) => {
    switch(action.type){
        case GameAction.setgradeSelected:
            return {...state, gradeSelected: action.payload};
        case GameAction.setsubjectSelected:
            return {...state, subjectSelected: action.payload}; 
        case GameAction.setreviewResults:
            return {...state, reviewResults: action.payload}; 
        case GameAction.setanswerCorrects:
            return {...state, answerCorrects: action.payload}; 
        case GameAction.setgradeSelectedPos:
            return {...state, gradeSelectedPos: action.payload}; 
        case GameAction.setsubjectSelectedPos:
            return {...state, subjectSelectedPos: action.payload}; 
        default:
            return state;
    }
}

export const GameProvider = ( { children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialData)
    const value = { state, dispatch}
    return(
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}

export const useGame = () => {
    const context = useContext(GameContext);
    if(context === undefined){
        throw new Error('useForm precisa se usado dentro do GameProvider')
    }
    return context;
}