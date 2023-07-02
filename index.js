/*import { Personagem } from "./modules/personagem.js";
import {PersonagemView} from "./components/personagem-view.js";
import { Mago } from "./components/mago.js"
import {Arqueiro} from "./components/arqueiro.js";
import { ArqueiroMago } from "./components/arqueiroMago.js";

const magoAntonio= new Mago('Antonio',4,'fogo',4,3)

const magaJulia= new Mago('Julia',8,'gelo',7,10)

const ArqueiroMagoChico= new ArqueiroMago ('Chico',7,10,'ar',4,8)

const arqueiroElso= new Arqueiro ('Elso',7,5)

const personagens=[magoAntonio,magaJulia,ArqueiroMagoChico,arqueiroElso];

new PersonagemView(personagens).render();

*/


import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./components/mago.js"
import { Arqueiro } from "./components/arqueiro.js"
import { ArqueiroMago } from "./components/arqueiroMago.js"
import { Guerreiro } from "./components/guerreiro.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroLucas= new Guerreiro('Lucas',9)
const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico,guerreiroLucas]

new PersonagemView(personagens).render()

