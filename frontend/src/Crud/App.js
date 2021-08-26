import React, {Component} from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoad: false,
    }
  }

  componentDidMount(){
    //fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://localhost:5001/api/Skill/Showjson')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items :json,
      })
    });
  }

  render (){

    var {isLoaded, items} = this.state;

    if (!isLoaded){
      return <div>Loading ....</div>;
    }

    else{

     
    return(
      <div className="App">
          <ul>
            {items.map(item => (
                <li key={items.id}>
                  Id:{items.name} | Name:{items.username}
                </li>
            ))};
            
          </ul>
      </div>
    );
    }
  }
}

export default App;
