import Card from "../card/card.components";
import { Monster } from "../../App";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[]
}


const CardList = ({ monsters }:CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
