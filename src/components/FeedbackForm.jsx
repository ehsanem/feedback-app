import { useState,useContext, useEffect } from 'react'
import React from 'react'
import Card from './Card'
import Button from './shared/Button'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback, editfeedbackState,updateFeedback}=useContext(FeedbackContext)
    const [feedback,setFeedback]=useState('')
    const [btnStatus,setBtnStatus]=useState(true)
    const [message,setMessage]=useState('')
    const textChangeHandler= (input) =>{
        if (feedback==='') {
            setBtnStatus(true)
            setMessage(null)
        }
        else if (feedback!=='' && feedback.trim().length <= 10) {
            setBtnStatus(true)
            setMessage('Please complete the feedback')
        }
        else {
            setBtnStatus(false)
            setMessage(null)
            
        }
        setFeedback(input.target.value)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const feedbackData={
            text:feedback,
        }
        if (editfeedbackState.edit===true){
            updateFeedback(editfeedbackState.item.id,feedbackData)
        }
        else{
            addFeedback(feedbackData)
        }
        setFeedback('')

    }
    useEffect(()=>{
        if (editfeedbackState.edit===true){
            setBtnStatus(false)
            setFeedback(editfeedbackState.item.text)
        }
    },[editfeedbackState])
    
  return (
    <div>
        <Card>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <input onChange={textChangeHandler} type='text' placeholder='Write a review' value={feedback}></input>
                    <Button type={'submit'} isDisabled={btnStatus} >send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    </div>
  )
}

export default FeedbackForm