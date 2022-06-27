import { useEffect, useState } from "react";
import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from 'react-router-dom';
// function MyTable({game:{id,name,publisher,price}}){
//     game.sortgame.sort((game , game_) => { return game_.price-game.price }).map((game) => {
//         var x;
//         { x = (game.price < 6) ? "bg-red-100" : (game.price > 30) ? "bg-green-100" : "" }

//         return <tr className={x} key={game.id}>
//           <td>{id}</td>
//           <td>{name}</td>
//           <td>{publisher}</td>
//           <td>{price}</td>
//           <td>
//           </td>
//         </tr>`
//       });
// }
// export default MyTable;

function MyTable(props) {
  const [games, setGames] = useState(null);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    console.log("student table useEffect!!");
    setGames(props.game);
  }, [props.game]);

  const setSortedField = (field, type) => {
    console.log("call sorting!!");
    //const sortData = [...students];
    const sortData = games;
    if (type == "string") {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == "number") {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setGames(sortData);
  };

  var gamelist = [];
  if (games != null) {
    gamelist = games.map((item) => {

      <tr className={item.price < 6 ? "bg-red-100" : item.price > 30 ? "bg-green-100" : ""} key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.publisher}</td>
        <td>{item.price}</td>
        <td>
          <Link to={'/user/' + item.id}>Details</Link>
        </td>
      </tr>;
    });
  }

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th onClick={() => setSortedField("name", "string")}>ten game</th>
          <th>nha phat hanh</th>
          <th onClick={() => setSortedField("price", "number")}>gia ban</th>
          
        </tr>
      </thead>
      {gamelist}
    </Table>
  );
}
export default MyTable;
