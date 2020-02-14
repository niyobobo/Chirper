import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

class TweetPage extends Component {
  render() {
    const { id, replies } = this.props;
    return (
      <Fragment>
        <Tweet id={id} />
        <NewTweet id={id} />
        {replies.length !== 0 && <h3 className="center">Replies</h3>}
        <ul>
          {replies.map(id => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ tweets }, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        )
  };
};

export default connect(mapStateToProps)(TweetPage);
