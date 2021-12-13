import react,{Component} from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends Component {
    static defaultProps = {
        pokemons : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]        
    };

    makeHands(){
        let hand1 = [];
        let hand2 = [...this.props.pokemons];

        while(hand1.length < hand2.length){
            let randInd = Math.floor(Math.random()*hand2.length);
            let randPokemon = hand2.splice(randInd, 1)[0] //splice returns array not single element hence [0]
            hand1.push(randPokemon);
        }

        return {hand1, hand2}
    }

    getExp(hand){
        return hand.reduce((sum,pokemon)=>sum+pokemon.base_experience,0);
    }

    render(){
        const {hand1, hand2} = this.makeHands()
        const exp1 = this.getExp(hand1);
        const exp2 = this.getExp(hand2);
        return (

            <div className="Pokegame">
                <div className="Pokegame-hands">
                    <Pokedex pokemons={hand1} title='hand1' exp={exp1} isWinner={exp1 > exp2} />
                    <Pokedex pokemons={hand2} title='hand2' exp={exp2} isWinner={exp2 > exp1} />
                </div>
            </div>
        )
    }
}

export default Pokegame