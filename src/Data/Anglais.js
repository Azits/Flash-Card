function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function ChooseOfQuestion(Object){
    let W=["world","Translation"];
    let Q=getRandomInt(W.length);
    let C=W[Q];
    if (C ==="world"){
        return Object.world;
    }
    else{
        return Object.Translation;
    }
}
function chooseOfanqware (){
    
}
const worlds=[{ world: "get a mess", Translation:"Obtenir un gachit", id:0},{world: "dissarray",Translation:"Desordre",id:1},{world: "incrementally",Translation:"Progresssivement", id:2},{world:"Unless",Translation:"A moins que ", id:3},{world:"involving",Translation:"Impliquant", id:4},/*"To lack","Fences","Go ahead","Havoc","Cumbersome","Instead of"*/]
const answares=["Obtenir un gachit","Desordre","Progresssivement","A moins que ","Impliquant"];

export const vocabulary=[
    {
        chapitre: "Vocabulaire",
        Question:ChooseOfQuestion(worlds[getRandomInt(worlds.length)]),
        Number:1,
        possibleAnswers:[],
        Answare:0,
    
    },
]