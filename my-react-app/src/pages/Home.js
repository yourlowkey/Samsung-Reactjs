
import MyTable from "../components/MyTable.js";
import { useEffect, useState } from "react";

function App() {
  // const games = [
  //   {
  //     "name": "name 1",
  //     "price": 86,
  //     "publisher": "publisher 1",
  //     "id": "1"
  //   },
  //   {
  //     "name": "name 2",
  //     "price": 61,
  //     "publisher": "publisher 2",
  //     "id": "2"
  //   },
  //   {
  //     "name": "name 3",
  //     "price": 4,
  //     "publisher": "publisher 3",
  //     "id": "3"
  //   },
  //   {
  //     "name": "name 4",
  //     "price": 26,
  //     "publisher": "publisher 4",
  //     "id": "4"
  //   },
  //   {
  //     "name": "name 5",
  //     "price": 15,
  //     "publisher": "publisher 5",
  //     "id": "5"
  //   },]
  // const game_list = [];

  // for (var i =0; i <games.length; i++){
  //    game_list.push((<tr>
  //     <td>{games[i].id}</td>
  //     <td>{games[i].name}</td>
  //     <td>{games[i].publisher}</td>
  //     <td>{games[i].price}</td>
  //     <td>
  //       <button>Edit</button>
  //       <button>Delete</button>
  //     </td>
  //   </tr>))
  // }
  //     data array la` students ; break down functional programming cho cac tham so
  //  const nameFilter = (student)=>{
  //   let firstName =student.firstName.toLoweCase();
  //   return firstName.indexOf("m")==0
  //  }
  //  var studentList = students.filter(nameFilter);
  //  const student_list =studentList.map();

  // function print() {
  //   var x = "";
  //   for (var i = 0; i <= games.length; i++) {
  //     x += <p>{games[i]}</p>;
  //     return x;
  //   }
  // }
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62b049b8b0a980a2ef4f73a7.mockapi.io/newgames';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data); //setStudents(data)
      });
  }, [searchTerm]);

  // const searchStudent = () => {
  //   console.log(searchTerm);
  //   let result = null;
  //   if (searchTerm.length > 0) {
  //     result = games.filter((game) => {
  //       let firstName = game.name.toLowerCase();
  //       return firstName.indexOf(searchTerm.toLowerCase()) == 0;
  //     });
  //   } else result = games;
  //   console.log(result);
  //   setData(result);
  // };
  return (
    <div className="App">
      <h2 className="text-4xl"> Danh sach tro choi dien tu</h2>
      {/* <div>{print()}</div> */}

      <div className="row">
        <div className="col-sm-6">
          <div className="input-group">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
            
            </div>
          </div>
        </div>
      </div>
      <MyTable game={data} />
    </div>
  );
}

export default App;
