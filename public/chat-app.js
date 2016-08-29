class ChatApp extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <div>
        <UsersList users={this.state.users} />
      </div>
    )
  }
}

class UsersList extends React.Component {

  render() {
    return (
      <div className='users'>
        <h3>Online Users </h3>
        <ul>
          {
            this.props.users.map((user, i) => {
              return (
                <li key={i}> {user} </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ChatApp/>, document.getElementById('app'))
