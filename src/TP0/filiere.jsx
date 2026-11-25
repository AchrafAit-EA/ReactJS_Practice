export default function Filiere(){
    const filiers=["DD","ID","GE"];
    return( 
        <div>
            <h1> liste Filiere : </h1>
            <select name="" id="">
                <option value="">Choisire un filiere </option>
                {filiers.map((filiere)=>(
                 <option>{filiere}</option>
                ))}
            </select>
            </div>
    );

}