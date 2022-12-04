import {useState} from 'react'


function Feedback() {
    const [rating,SetRating]=useState(7)
    const ratingFunc=()=>{
        SetRating(
            (prev)=>{
                return prev+1
            }
        )
    }
  return (
    <>
        <div className='card'>
            <div className='num-display'>
            {rating}
            </div>
            <div className='text-display'>
                This is a feedback
            </div>
            <button onClick={ratingFunc}>
                Click me
            </button>
        </div>
    </>
  )
}

export default Feedback