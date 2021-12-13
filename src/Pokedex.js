import react,{Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component {

    render(){
        const res= this.props.isWinner? 'Winner' : 'Loser';

        return (
            <div className="Pokedex">
                <h3 className={`Pokedex-${res}`}>{res} Hand!</h3>
                <h4>Total EXP: {this.props.exp }</h4>
                <div className="Pokedex-cards">
                {this.props.pokemons.map(p=>
                <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />)}
                </div>
            </div>
        )
    }
}

export default Pokedex