import Banner from "../../component/Banner"
import Box2 from "../../component/Box2";


function Anglais(){
    const Anglais=["Vocabulaire","Verbes irrégulier"];
    return (
        <div>
        <Banner title="Anglais"/>
        <Box2 matiere={Anglais}/>
        </div>
    )

}
export default Anglais;