
import "./User.css"
import { useEffect, useState } from "react";
function User({nume, facultate, userSpeacial}){

    const [numarulMeus, setNumarulMeus] = useState(15);
    const [aFostApasat, setaFostApasat] = useState(true);
    const[numarapasari, setNumarDeApasari] = useState(0)

    function handleClick(){

        // console.log(`Numele meu este ${nume}`)
        setNumarulMeus((valoareaAnterioara) => {
            const valoareaNoua = valoareaAnterioara + 1;
            return valoareaNoua;
        });
        // setNumarulMeus ++;
    }
    function handleDecrement(){
        setNumarulMeus((valoareaAnterioara) => {
            const valoareaNoua = valoareaAnterioara - 1;
            return valoareaNoua
        })
    }
    function handleUSerClick(){
        setaFostApasat((valoareaAnterioara) => {
            return !valoareaAnterioara;
    })
    }
    useEffect(() => {
        setNumarDeApasari((valoareaAnterioara) => {
            console.log(valoareaAnterioara);
            return valoareaAnterioara + 1;
            
    })
    },[numarulMeus]);

    const stringFormar = `Stringul meu ${nume}`;
    let numeprelucrat = "user: " + nume;
    return(<div className="user">
        {userSpeacial && <p>{nume} este foarte special</p>}
        {/* <h2 className={ `user_all ${userSpeacial ? "userSpeacial": "userNormal"}`}>{numeprelucrat}</h2> */}
        <h2 style = {{backgroundColor: aFostApasat ? "rgb(100,200,100": "#e52a30"}} onClick ={handleUSerClick}>{numeprelucrat} </h2>
        <p>{facultate}</p>
        <p>{numarulMeus}</p>
        <p> butoanele au fost apasate de {numarapasari}</p>
        <button onClick={handleClick}>incremnetare</button>
        <button onClick={handleDecrement}>decremenatre</button>
    </div>)
}
export default User;