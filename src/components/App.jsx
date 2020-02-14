import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.loadData(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loading ? null : (
              <div>
                <Navigation />
                <Route path="/" exact component={Dashboard} />
                <Route path="/tweet/:id" exact component={TweetPage} />
                <Route path="/new" exact component={NewTweet} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(handleInitialData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
