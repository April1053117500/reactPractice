import React from 'react'

// class CommentList extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return (
//         <div className="comment-list">
//           <label>评论列表</label>
//           <ul className="list-group mb-3">
//             {
//               this.props.comments.map((comment, index)=>
//                   <li key={index} className="list-group-item">{comment}
//                     <button  onClick={()=>this.props.onDeleteComment(index)}>删除</button>
//                   </li>
//               )
//             }
//           </ul>
//         </div>
//     )
//   }
// }

const CommentList = (props)=>{
  //console.log("props===",props)
  return (
      <div className="comment-list">
        <label>评论列表</label>
        <ul className="list-group mb-3">
          {
            props.comments.map((comment, index)=>
                <li key={index} className="list-group-item">
                  {comment}
                  <button  onClick={()=> props.onDeleteComment(index)}>删除</button>
                </li>
            )
          }
        </ul>
      </div>
  )
}

export default CommentList