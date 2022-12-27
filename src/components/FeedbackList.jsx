import Feedback from "./Feedback"
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"

function FeedbackList () {
    const {compData,loadingStat}=useContext(FeedbackContext)
    return loadingStat ? <div>Loading...</div> : (
        <AnimatePresence>
        {compData.map((item)=>(
            
            <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
            <div key={item.id}>
                
                <Feedback itemData={item}></Feedback>
            </div>
            </motion.div>
        ))}
        </AnimatePresence>
    )

}

export default FeedbackList