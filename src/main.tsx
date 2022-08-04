import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { GameProvider} from './context/GameContext'
import Home from './pages/Home'
import MenuSubject from './pages/MenuSubject'
import ChooseDifficulty from './pages/ChooseDifficulty'
import Surveys from './pages/Surveys'
import Redirect from './pages/Redirect'
import SurveysResults from './pages/SurverysResults'
import ReviewResults from './pages/ReviewResults'
import ChooseContent from './pages/ChooseContent';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path= '*' element = {<Redirect />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/subject' element={<MenuSubject/>}/>
          <Route path='/difficulty' element={<ChooseDifficulty/>}/>
          <Route path='/surveys' element={<Surveys/>}/>
          <Route path='/surveysResults' element={<SurveysResults/>}/>
          <Route path='/reviewResults' element={<ReviewResults/>}/>
          <Route path='/contents' element={<ChooseContent/>}/>
        </Routes>
      </BrowserRouter>
    </GameProvider>
  </React.StrictMode>
)
