// npm start para rodar o projeto
import React, { Component } from "react";
import "./App.css";
// importando um recurso - componente
import List from "./Componentes/List";
// realizar chamadas para a api
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    // inicializar o estado
    this.state = {
      items: []
    };
  }

  // montagem da página - chamando a lista de todo da api
  componentDidMount() {
    axios.get("http://localhost:5000/postits").then(res => {
      const items = res.data;
      console.log(items);
      // alterar o estado fora do construtor
      // alterando pelo valor que eu receber da API
      this.setState({ items: items.postits });
      console.log(this.state.items);
    });
  }

  render() {
    return (
      <div className="App">
        {/* Chamando o componente e passando a lista de items que eu quero mostrar */}
        <List items={this.state.items} />
        {/* <ul>
          {this.state.items.map(item => (
            <li>{item.titulo} - {item.descricao}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default App;
