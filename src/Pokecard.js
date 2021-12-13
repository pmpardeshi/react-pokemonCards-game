import react,{Component} from 'react'
import './Pokecard.css'


const Api =  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
const padToThree = number=>(number <= 999 ? `00${number}`.slice(-3):number)

class Pokecard extends Component {

    render(){
        const {id, name, type, base_experience} = this.props;
        let imgSrc = `${Api}${padToThree(id)}.png`
        // ${id}.png"
        return (
            <div className="Pokecard">
                <h3 className="Pokecard-name">{name}</h3>
                <div className="Pokecard-img">
                <img src={imgSrc} alt="pokemon" />
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">Exp: {base_experience}</div>
            </div>
        )
    }
}

export default Pokecard