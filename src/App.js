import React, { Component } from "react";

class App extends Component {
  
  state = {
    showTime:new Date()
    }
    componentDidMount(){
      setInterval(()=>{
        this.setState({showTime:new Date()})
      },1000);
        }
  render() { 
    return ( <div>
showTime:{this.state.showTime.toLocaleTimeString()}
    </div> );
  }
}
 
export default App;
