
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Algebra from "./Pages/First/Algebra";
import Analyse from "./Pages/First/Analyse";
import LIFAP1 from "./Pages/First/LIFAP1"
import LIFASR3 from "./Pages/First/LIFASR3"
import SharedLayout from "./Pages/First/SharedLayout"
import Home from "./Pages/First/Home";
import FlashCard from './component/FlashCardAndAnswer';
import Anglais from './Pages/First/Anglais';
import {reelNb,reelFonction,Suite,LimiteAndContinuity,usualFonction} from './Data/Analyse';
import {Somme,Application,Logique,NbComplexe,Arithmétique,Polynome} from "./Data/Algebra"
function App() {
    return (
          <BrowserRouter >
          
              <Routes>
                    <Route path="/" element={<SharedLayout />} >
                        <Route index element={<Home />} />
                        <Route path="Algebra" element={<Algebra />} />
                        <Route path="Analyse" element={<Analyse />} />
                        <Route path='Anglais' element={<Anglais />}/>
                        <Route path="LIFAP1" element={<LIFAP1 />} />
                        <Route path="LIFASR3" element={<LIFASR3 />} />
                        <Route path='Nombre Réele' element={<FlashCard  Chapiter={reelNb}/>} />
                        <Route path='Fonction Réele' element={<FlashCard Chapiter={reelFonction}/>}/>
                        <Route path='Fonction Usuelles' element={<FlashCard Chapiter={usualFonction}/>} />
                        <Route path='Suite' element={<FlashCard Chapiter={Suite} />}/>
                        <Route path='Limite et Continuité' element={<FlashCard Chapiter={LimiteAndContinuity}/>}/>
                        <Route path='Somme' element={<FlashCard Chapiter={Somme} />}/>
                        <Route path='Application' element={<FlashCard Chapiter={Application} />}/>
                        <Route path='Logique' element={<FlashCard Chapiter={Logique} />}/>
                        <Route path='Nb Complexe' element={<FlashCard Chapiter={NbComplexe} />}/>
                        <Route  path='Arithmétique' element={<FlashCard Chapiter={Arithmétique} />}/>
                        <Route path='Polynome' element={<FlashCard Chapiter={Polynome} />}/>


                    </Route>
                
              </Routes>
          </BrowserRouter>
    );
  }
  
  export default App;
