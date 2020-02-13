import React, { Component } from "react";

class NewTweet extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState(() => ({
      text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    console.log("New tweet", text);
    this.setState(() => ({
      text: ""
    }));
  };

  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;
    {
      /** TODO: Redirect to home view if submitted */
    }
    return (
      <div>
        <h3 className="center">Compose new tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            className="textarea"
            placeholder="What is happening?"
            maxLength={280}
            value={text}
            onChange={this.handleChange}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={!text.length}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewTweet;
