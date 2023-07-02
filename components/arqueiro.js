import { Personagem } from "../modules/personagem.js";

export class Arqueiro extends Personagem{
   static tipo="Arqueiro"
   static descricao="Você tem meu arco!";
   destreza

    constructor(nome,destreza){
        super(nome,);
        this.destreza=destreza;
    }
    obterInsignia(){
        if(this.destreza>=5){
            return 'Dominador de flexas';
        }
        return super.obterInsignia();
    }
}