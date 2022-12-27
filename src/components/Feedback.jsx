import Card from './Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


function Feedback({itemData}) {
    const {deleteFeedback, editFeedbackFunction}=useContext(FeedbackContext)
    
  return (
    <>
        <Card>
            <div className='num-display'>
                {itemData.rating}
            </div>
            <button onClick={()=>deleteFeedback(itemData.id)} className='close'>
                <FaTimes color='purple'></FaTimes>
            </button>
            <button  className='edit' onClick={()=>editFeedbackFunction(itemData)}>
                <FaEdit color='purple'></FaEdit>
            </button>
            <div className='text-display'>
                {itemData.text}
            </div>
        </Card>
    </>
  )
}

export default Feedback


