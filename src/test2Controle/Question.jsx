import { useState } from "react";
export function Question({question}){
    const [reponse, setreponse] = useState(null)
    const[message,setMessage] = useState("")
    function Corriger(num){
            setreponse(num)
            num == question.réponseCorrect?setMessage("C'est une bonne réponse !"):setMessage("C'est une mauvaise réponse !")
        }
    return(
        <div>
            <fieldset>
                <h2>{question.enoncé}</h2>
                <div>
                    {question.options.map((e)=>
                        <button onClick={()=>Corriger(e)} >{e}</button>
                    )}
                </div>
                {message && (<p style={{color: reponse == question.réponseCorrect?"green":"red"}}>{message}</p>)}
            </fieldset>
        </div>
    )
}