import React from 'react';
import './App.css';
import PropTypes from "prop-types";

//функціональний компонент

// const UserCard = ({ name, age }) => {
//   return (
//     <div>
//     {name} - {age}
//     </div>
//   );
// };

// UserCard.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// }

/////////////////////

// класовий компонент

// class UserCard extends React.Component {
//   static propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//   }

//   render() {
//     return <div>
//       {this.props.name} - {this.props.age}
//       </div>
//   }
// }

// export default class App extends React.Component {
//   render() {
//   return (
//     <div>
//       <UserCard name={2} age={24}/>
//     </div>
//   );
// }
// }

// сложные данные


// class UserCard extends React.Component {
//   static propTypes = {
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       surname: PropTypes.string.isRequired,
//       age: PropTypes.number.isRequired,
//     }).isRequired
//   }

//   render() {
//     return (
//     <div>
//       <div>{this.props.user.name}</div>
//       <div>{this.props.user.surname}</div>
//       <div>{this.props.user.age}</div>
//     </div>
//     )
//   }
// }

// export default class App extends React.Component {
//   render() {
//   return (
//     <div>
//       {/* <UserCard user={{name: "Name", surname: "Surname", age: 24}} />  */}
//       <UserCard user={{name: "Name", surname: "Surname", age: 24}}/>
//     </div>
//   );
// }
// }

// default props



class UserCard extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }).isRequired
  }

  static defaultProps = {
    user: {
      name: "Nick",
      surname: "Surname",
      age: 24,
    }
  }

  render() {
    return (
    <div>
      <div>{this.props.user.name}</div>
      <div>{this.props.user.surname}</div>
      <div>{this.props.user.age}</div>
    </div>
    )
  }
}

export default class App extends React.Component {
  render() {
  return (
    <div>
      <UserCard/>
      {/* <UserCard user={{name: "Name", surname: "Surname", age: 24}}/> */}
    </div>
  );
}
}