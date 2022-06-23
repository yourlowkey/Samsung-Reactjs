import { useState } from "react";
import React from "react";
import Table from 'react-bootstrap/Table'
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
  const { game } = props;
  const [sortedField, setSortedField] = React.useState(null);
  let sortedGames = [...game];
  sortedGames.sort((a, b) => {
    if (setSortedField !== null)
    return a.sortedField - b.sortedField;
  })
  

  const gamelist = games.map((item) => {
    var x;
    { x = (item.price < 6) ? "bg-red-100" : (item.price > 30) ? "bg-green-100" : "" };
    console.log(x);
    <tr className={x} key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.publisher}</td>
      <td>{item.price}</td>
      <td>
      </td>
    </tr>
  })

  return (<Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>id</th>
        <th onClick={() => setSortedField('name')}>ten game</th>
        <th>nha phat hanh</th>
        <th onClick={() => setSortedField('price')}>gia ban</th>
        <th>action</th>
      </tr></thead>
    <tbody>
      {gamelist}
    </tbody>

  </ Table>
  )



}
export default MyTable;