import { useState } from 'react'
import React from 'react'
import Card from './Card'
import Button from './shared/Button'


function FeedbackForm({handleFeedback}) {
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
        handleFeedback(feedbackData)
        setFeedback('')
    }
    
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