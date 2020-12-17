import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';
import './components/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#e6e6e6',
      color: '#0d0d0d',
      users: [],
      posts: []
    };
  }

  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });

        data.forEach(user => {
          user.salary = Math.floor(Math.random() * 10000) + '£';
        });
        this.setState({users: data});
      })

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          json = json.filter(user => user.id < 10);
          this.setState({posts: json});
        })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  textColorChange(event) {
    const textColor = event.target.value;
    this.setState({color: textColor});
  }

  changeUsers() {
    document.querySelector('#userList').style.display = 'block';
    document.querySelector('#postList').style.display = 'none';
  }

  changePosts() {
    document.querySelector('#postList').style.display = 'block';
    document.querySelector('#userList').style.display = 'none';
  }

  handleDelete = userId => {
    const users = this.state.users.filter(user => user.id !== userId);
    this.setState({users: users});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient, salary, image) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
            image
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Admin panel - Project 1</h1>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salary, image) => this.submitAddForm(event, name, email, isGoldClient, salary, image)}/>
        <UserList handleDelete={this.handleDelete} className="userList" users={this.state.users}/>
        <PostList className="postList" posts={this.state.posts}/>

        <div id="input">
          <h3>Change background/text color:</h3>
          <div id="label-input">
            <div>
              <label htmlFor="color-background">Background color<span className="material-icons">arrow_right_alt</span></label>
              <input type="color" name="color-background" onChange={(event) => this.changeColor(event)}/>
            </div>
            <div>
              <label htmlFor="color-text">Text color<span className="material-icons">arrow_right_alt</span></label>
              <input type="color" name="color-text" onChange={(event) => this.textColorChange(event)}/>
            </div>
          </div>
        </div>
        
        <div id="button">
          <button id="button1" onClick={() => this.changeUsers()}>Display Users</button>
          <button id="button2" onClick={() => this.changePosts()}>Display Posts</button>
        </div>
        
      </div>
    );
  }
}

export default App;
