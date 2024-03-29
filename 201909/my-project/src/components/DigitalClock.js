import React from 'react'

class DigitalClock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    return (
        <div className="digital-clock jumbotron">
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
    )
  }
}

export default DigitalClock