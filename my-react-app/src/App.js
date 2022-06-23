import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import MyTable from './components/MyTable.js'
import { useEffect, useState } from 'react';
import axios from 'axios';

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

 
  

  function print() {
    var x = "";
    for (var i = 0; i <= games.length; i++) {
      x += <p>{games[i]}</p>
      return x;
    }
  }
  const [searchTerm, setSearchTerm]=useState("");
  const [data,setData]= useState([]);
  const [games,setGames]= useState([]);
  useEffect(() => {
    fetch("https://62b049b8b0a980a2ef4f73a7.mockapi.io/newgames")
      .then(res => res.json())
      .then(data => { setGames(data) })
  }, [])
  


  const searchStudent =() =>{
    console.log(searchTerm);
    let result =null; 
    if (searchTerm.length>0){
      result = games.filter((game)=>{
        let firstName =game.name.toLowerCase();
        return firstName.indexOf(searchTerm.toLowerCase()) == 0;
      })
    } else result = games;
    console.log(result);
    setData(result);
  }
  return (
    <div className="App">
      <Navbar />
      <h2 className='text-4xl'> Danh sach tro choi dien tu</h2>
      <div>{print()}</div>

      <div className="row">
        <div className="col-sm-6">
          <div className="input-group">
          <input value={searchTerm} onInput={e => setSearchTerm(e.target.value)}/>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={searchStudent}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>ten game</th>
            <th>nha phat hanh</th>
            <th>gia ban</th>
            <th>action</th>
          </tr></thead>
        <tbody>
          <MyTable game = {data} />
          <tr className='colspan-4'>
            <Button>Sắp xếp theo thứ tự</Button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Sắp xếp theo giá bán</button>
          </tr>
        </tbody>
        
      </Table>
    </div>
  );
}

export default App;
