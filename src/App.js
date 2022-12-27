import { useState } from "react"
import Header from "./components/Header"

import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import { FeedbackProvider } from "./Context/FeedbackContext"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import About from "./Pages/About"
import AboutLink from "./AboutLink"
import FeedbackData from "./data/feedbackData"

function App() {
    const [compData, setFeedback]=useState(FeedbackData)   
    
  return (
    <FeedbackProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route path="/" element=
          {
            <>
              <div className="container">
              <FeedbackForm></FeedbackForm>
              <FeedbackList></FeedbackList>
              </div>
              <AboutLink></AboutLink>  
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </FeedbackProvider>
  )
}

export default App