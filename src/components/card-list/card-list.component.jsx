// import { Component } from "react";
import Card from '../card/card.component';
import './card-list.styles.css';

// const CardList = (props) => {
//     const { monsters } = props
const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return(
                <Card key={monster.id} monster={monster}/>
            );
        })}
    </div>
);


// class CardList extends Component{
//     render(){
//         const { monsters } = this.props

//         // console.log('CardList props =>', this.props)
//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     return(
//                         <Card key={monster.id} monster={monster}/>
//                     );
//                 })}
//             </div>
//         );
//     }
// }

export default CardList;