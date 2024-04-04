import {  createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();


const ContextProvider = (props)=>{

    const [input , setInput] = useState("");

    const[recentPrompt, setRecentPrompt] = useState("");

    const[prevPrompt, setPrevPrompt] = useState([])

    const [showResult , setShowResult] = useState(false)

    const[loading,setLoading]=useState(false)

    const[resultData,setResultData] =useState("")

    function delayFunctinality(index,nextword){
        setTimeout(() => {
          setResultData(prev => prev+nextword)
        }, 75*index);
    }

    const newChat =()=>{
        setLoading(false)
        setShowResult(false)
    }

    const onRequest = async (prompt) => {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      let res 
      if(prompt !== undefined){
          res= await runChat(prompt)
          setRecentPrompt(prompt)
      }else{
        setRecentPrompt(input);
        setPrevPrompt(prev => [...prev ,input] )
        res = await runChat(input);
      }
      let resArr = res.split("**")
      let newRes="" ;
      for (let index = 0; index < resArr.length; index++) {

        if(index === 0 || index%2 !== 1){
            newRes +=resArr[index]
            
        }else{
            newRes += "<br>"+resArr[index]+"</br>"
        }
        
      }
      let newRes2 = newRes.split("*").join("</br>")
      let newResArr = newRes2.split(" ")
      for (let index = 0; index < newResArr.length; index++) {
        const nextword = newResArr[index]
        delayFunctinality(index,nextword+" ")
        
      }
      setLoading(false);
      setInput("");
    };

    
    
    const contextValue = {
      input,
      setInput,
      recentPrompt,
      setRecentPrompt,
      resultData,
      setResultData,
      loading,
      setLoading,
      showResult,
      setShowResult,
      prevPrompt,
      setPrevPrompt,
      onRequest,
      newChat, 
    };

    return (
      <Context.Provider value={contextValue}>
        {props.children}
      </Context.Provider>
    );
}

export default ContextProvider;