import {questions} from './data'
import {Entete} from './header'
import { Question } from './Question'
export function App(){
     return(
        <div>
            <Entete titre={" Quize de Mathematiques :"} />
            {questions.map((e)=>
                <Question question={e} />
            )}
        </div>
     )
}