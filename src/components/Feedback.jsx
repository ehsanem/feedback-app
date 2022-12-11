import Card from './Card'
import {FaTimes} from 'react-icons/fa'



function Feedback({itemData}) {
 
  return (
    <>
        <Card>
            <div className='num-display'>
                {itemData.rating}
            </div>
            <button className='close'>
                <FaTimes color='purple'></FaTimes>
            </button>
            <div className='text-display'>
                {itemData.text}
            </div>
        </Card>
    </>
  )
}

export default Feedback