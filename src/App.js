import { useState } from "react"
import Header from "./components/Header"
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/feedbackData"
import FeedbackList from "./components/FeedbackList"
import About from "./Pages/About"
import AboutLink from "./AboutLink"

function App() {
    const [compData, setFeedback]=useState(FeedbackData)   
    const addFeedback=(feedbackData) =>{
      feedbackData.id=uuidv4()
      setFeedback([feedbackData,...compData])
    }
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/about" element=
        {
          <About />
        }>
        </Route>
        <Route path="/" element=
        {
          <>
            <div className="container">
            <FeedbackForm handleFeedback={addFeedback}></FeedbackForm>
            <FeedbackList compData={compData}></FeedbackList>
            </div>
            <AboutLink></AboutLink>  
          </>
        }>
        </Route>

        
      </Routes>
    </Router>
  )
}

export default App