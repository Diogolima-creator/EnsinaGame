import { createContext, useContext, ReactNode, useState } from "react";

type GameContextProps = {
    children: ReactNode;
}

type GameContextType = {
    gradeSelected: string;
    setGradeSelected: (newState: string) => void;
    subjectSelected: string;
    setSubjectSelected: (newState: string) => void;
    reviewResults: number[];
    setReviewResults: (newState: number[]) => void;
    answerCorrects: number;
    setAnswerCorrects: (newState: number) => void;
    gradeSelectedPos: number;
    setGradeSelectedPos: (newState: number) => void;
    subjectSelectedPos: number;
    setSubjectSelectedPos: (newState: number) => void;
}

//Context
const initialData = {
    gradeSelected: '',
    setGradeSelected: () => {},
    subjectSelected:'',
    setSubjectSelected: () => {},
    reviewResults: [],
    setReviewResults: () => {},
    answerCorrects: 0,
    setAnswerCorrects: () => {},
    gradeSelectedPos: 1,
    setGradeSelectedPos: () => {},
    subjectSelectedPos: 0,
    setSubjectSelectedPos: () => {}
}

const GameContext = createContext<GameContextType>(initialData);

export const GameProvider = ( { children }:GameContextProps) => {
    const [gradeSelected, setGradeSelected] = useState(initialData.gradeSelected)
    const [subjectSelected, setSubjectSelected] = useState(initialData.subjectSelected)
    const [reviewResults, setReviewResults] = useState<number[]>(initialData.reviewResults)
    const [answerCorrects, setAnswerCorrects] = useState(initialData.answerCorrects)
    const [gradeSelectedPos, setGradeSelectedPos] = useState(initialData.gradeSelectedPos)
    const [subjectSelectedPos, setSubjectSelectedPos] = useState(initialData.subjectSelectedPos)
    
    return(
        <GameContext.Provider value={{gradeSelected, setGradeSelected, subjectSelected, setSubjectSelected,
        reviewResults, setReviewResults, answerCorrects, setAnswerCorrects, gradeSelectedPos, setGradeSelectedPos, 
        subjectSelectedPos, setSubjectSelectedPos}}>
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