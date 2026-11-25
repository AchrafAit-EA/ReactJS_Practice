import ListService from './Listeservice.jsx'
import  {InfoService}  from './InfoServices.jsx'
import ListePersonnels from './ListePeresonels.jsx'
import ListePersonnels2  from './ListePeresonels2.jsx'

export default function App(){
    return <div>
        <ListService/>
        <InfoService/>
        <ListePersonnels/>
        <ListePersonnels2/>
    </div>
}