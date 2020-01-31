import React from "react";

// imput of this component is liked: boolean
// output:onClick.

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return (
//       <i
//         onClick={this.props.onClick}
//         style={{ cursor: "pointer" }}
//         className={classes}
//         aria-hidden="true"
//       ></i>
//     );
//   }
// }

export default Like;
