import '../styles/FlashCards.css';
import Banner from './Banner';

const handleClick=(object,reponse,answare)=>{ /* change style blok reponse when we clik them, compare the index of clicked element and the answare within object variable. */
    if (object.Answare == reponse){
        document.getElementById(`${answare}-${reponse}`).style.backgroundColor='green';
        document.getElementById("a").classList.add("R");
        document.getElementById("button").style.visibility='visible'
    }
    else{
        document.getElementById(`${answare}-${reponse}`).style.backgroundColor='red';
        document.getElementById("a").classList.add("R");
        document.getElementById(`${object.possibleAnswers[object.Answare]}-${object.Answare}`).style.backgroundColor='green';
        document.getElementById("button").style.visibility='visible'
    }
    
}
const getRandomInt=(lengthOfarray)=>{
    return Math.floor(Math.random() * lengthOfarray)
}
const changeCard=()=>{
    window.location.reload();
}

const FlashCard=(props)=>{
    const chapiter=props.Chapiter;
    const length=getRandomInt(chapiter.length);
    const Question=chapiter[length].Question;
    const Number=chapiter[length].Number;
    const Image=chapiter[length].Image;
    const possibleAnswers=chapiter[length].possibleAnswers;

    
    
    
    
    return (<>
        <Banner title={chapiter[length].chapitre}/>
    <div className="contenue">
        <div className="flashcard">
            <div className="flashCarde" id='a'>
                <div className="flashCardeFace">
                 <h2>Q:{Number}</h2>
                    <p>{Question}</p>
    
                </div>
                <div className="flashCardeBack">
                <img src={Image} alt='Polynome' width='100%' height='100%'/>
                </div>
            </div>
        </div>
        <div className="reponses">
            {
                possibleAnswers.map((answare,index)=>(
                    <div className='reponse' key={`${answare}-${index}`} id={`${answare}-${index}`}  onClick={()=>handleClick(chapiter[length],index,answare)}>{answare} </div>
                ))
            }
        </div>
        <button  id='button' style={{visibility: 'hidden'}} className='button' onClick={changeCard}>Suivant</button>
        
    </div>
    </>)
}
export default FlashCard;