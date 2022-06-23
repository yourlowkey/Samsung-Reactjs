

// function MyTable({game:{id,name,publisher,price}}){
//     game.sort((game , game_) => { return game_.price-game.price }).map((game) => {
//         var x;
//         { x = (game.price < 6) ? "bg-red-100" : (game.price > 30) ? "bg-green-100" : "" }
    
//         return <tr className={x} key={game.id}>
//           <td>{id}</td>
//           <td>{name}</td>
//           <td>{publisher}</td>
//           <td>{price}</td>
//           <td>
//           </td>
//         </tr>
//       });
// } 
// export default MyTable;

function MyTable(props){
  props.game.sort((game , game_) => { return game_.price-game.price }).map(function(item) {
      
      var x;
      { x = (item.price < 6) ? "bg-red-100" : (item.price > 30) ? "bg-green-100" : "" }
      console.log(item);
      return (
      
          <tr className={x} key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.publisher}</td>
          <td>{item.price}</td>
          <td>
          </td>
        </tr>
     
    )});
} 
export default MyTable;