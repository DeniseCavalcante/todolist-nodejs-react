import React, { Component } from "react";

// const List = props => (
//     // JSX como é escrito - ul
//   <ul>
//     {props.items.map(item => (
//       <li>{item.titulo}</li>
//     ))}
//   </ul>
//   // babel transpila JSX para Javascript DOM Virtual
// );

class List extends Component {
  render() {
    return (
      <ul>
        {/* recebe o valor do app - map para renderizar a lista */}
        {this.props.items.map(item => (
          <li>{item.titulo}</li>
        ))}
      </ul>
    );
  }
}

// exportar um recurso para a aplicação
export default List;
