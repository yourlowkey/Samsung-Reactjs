// function Car({car:{brand}}){
//     return <h2>I am a {brand}  </h2>
// }
// export default Car ;
import React from "react";
class Car extends React.Component{
    constructor({car:{brand,model,color}}){
        super();
        this.state = {
            brand: "Ford",
            model:"Mustang ",
            color:"blue",
            year : 1990,
        };
    }
    changeColor = (a) => {
        
            if (this.state.color != "blue") 
            this.setState({color:"blue"})
            else this.setState({color: a});
      
       
    }
    render() {
        return (
          <div className={`text-${this.state.color}-100`}>
            <h1>My {this.state.brand}</h1>
            <p>
              It is a {this.state.color}
              {this.state.model}
              from {this.state.year}.
            </p>
            <button onClick={this.changeColor("red")}>change color</button>
            <button onClick={this.changeColor("yellow")}>change color</button>
            <button onClick={this.changeColor("pink")}>change color</button>
          </div>
        );
      }
}
export default Car ;