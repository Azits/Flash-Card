import Banner from "../../component/Banner"
import Box2 from "../../component/Box2";


function Analyse(){
    const analyse=["Nombre Réele","Fonction Réele","Fonction Usuel", "Suite","Limite et continuité"];
    return (
        <div>
        <Banner title="Analyse"/>
        <Box2 matiere={analyse}/>
        </div>
    )

}
export default Analyse;