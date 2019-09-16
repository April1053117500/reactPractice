import React from 'react'

class CommentBox extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   value:''
    // }
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }
  handleSubmit(e){
    //alert(this.textInput.value)
    this.props.onAddComment(this.textInput.value)
    // 禁止submit本身默认的跳转方法
    e.preventDefault()
    this.textInput.value = ''
  }
  render(){
    return(
        <form className="p-5" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>留言内容</label>
            <input
                type="text"
                className="form-control"
                placeholder="请输入内容"
                ref={(textInput) => {this.textInput = textInput}}
                // onChange={this.handleChange}
                // value={this.state.value}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            留言
          </button>
          <p>已有{this.props.commentsLength}条评论</p>
        </form>
    )
  }
}

export default CommentBox