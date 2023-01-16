import Banner from "../../component/Banner"
import Box2 from "../../component/Box2";

function Algebra(){
    const algebra=["Somme","Application","Logique","Nb Complexe","Arithmétique","Polynome"];
    return (<>
        <Banner title="Algebre"/>
        <Box2 matiere={algebra} />
        </>
    )

}
export default Algebra