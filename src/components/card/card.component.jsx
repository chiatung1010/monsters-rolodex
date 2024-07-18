// import { Component } from "react";
import './card.styles.css';

// const Card = ({monster}) => {
//     const {name, email, id} = monster;
const Card = ({monster:{name, email, id}}) => {
    return(
        <div className="card-container">
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


// class Card extends Component{

//     render(){
//         const {name, email, id} = this.props.monster;
//         return(
//             <div className="card-container">
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;