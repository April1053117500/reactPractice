import React, { Component } from 'react';
import logo from './logo.svg';
import ThemeContext from './theme-context'
import ThemedBar from './components/ThemedBar'
import './App.css';
import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'

const tags = ['恐龙', '足球小组','哈哈']

const themes = {
  light:{
    classnames:'btn btn-primary',
    bgColor:'#eee',
    color:'#000'
  },
  dark:{
    classnames: 'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments:[
          'this is my first reply'
      ],
      theme:'light'
    }
    this.addComment = this.addComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme(theme){
    this.setState({
      theme:theme
    })
  }
  addComment(comment){
    this.setState({
      comments:[...this.state.comments, comment]
    })
  }
  deleteComment(index){
    this.state.comments = this.state.comments.filter((comment,idx)=>{
      return idx !== index
    })
    this.setState({
      comments:this.state.comments
    })
  }
  render(){
    const { comments } = this.state
    return (
        <ThemeContext.Provider value={themes[this.state.theme]}>
          <div className="App">
            <CommentList
                comments={comments}
                onDeleteComment={this.deleteComment}
            />
            <CommentBox
                commentsLength={comments.length}
                onAddComment={this.addComment}
            />
            <DigitalClock />
            <LikesButton />
            <NameCard name="wuyijuan"
                      number={12345678910}
                      isHuman
                      tags={tags}
            />
    
            <a href="#theme-switcher"
               className="btn btn-light"
               onClick={()=>{this.changeTheme('light')}}
            >
              浅色主题
            </a>
            <a href="#theme-switcher"
               className="btn btn-secondary"
               onClick={()=>{this.changeTheme('dark')}}
            >
              深色主题
            </a>
            <ThemedBar></ThemedBar>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
        
          </div>
        </ThemeContext.Provider>
    );
  }
}

export default App;
