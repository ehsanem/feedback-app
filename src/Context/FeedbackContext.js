import { createContext,useEffect,useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext= createContext()

export const FeedbackProvider=({children})=> {
    const [loadingStat,setLoadingStat]=useState(true)
    const [compData, setFeedback]=useState([])
    const [editfeedbackState,setEditFeedback]=useState({
        item:{},
        edit:false
    }) 
    const addFeedback= async (feedbackData) =>{
        const response= await fetch('/feedback',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(feedbackData) 
    })
        const data = await response.json()
        console.log(data)
        setFeedback([data,...compData])
      }
    
    const deleteFeedback=(id)=>{
        const fetchData=fetch(`/feedback/${id}`,{
            method:'DELETE'
        })
        setFeedback(compData.filter((item)=>item.id !==id))
    }

    const editFeedbackFunction=(item)=>{
        setEditFeedback({
        item,
        edit:true 
    })}
    const updateFeedback=async (id,upFeedback)=>{
        const response =await fetch(`/feedback/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application-json'
            },
            body:JSON.stringify(upFeedback) 
        })
        const data=await response.json()
        setFeedback(
            compData.map((item)=>(item.id === id ? {...item,...data} :item)
        ))
    }
    useEffect(()=>{fetchData()},[])
    
    const fetchData= async ()=>{
        const response = await fetch('http://localhost:5000/feedback')
        const data= await response.json()
        setFeedback(data)
        setLoadingStat(false)
    }
    
    return (
        <FeedbackContext.Provider value={{
            compData,
            addFeedback,
            deleteFeedback,
            editFeedbackFunction,
            updateFeedback,
            loadingStat,
            editfeedbackState
        }}>
        {children}
        </FeedbackContext.Provider>
    )
    
}

export default FeedbackContext