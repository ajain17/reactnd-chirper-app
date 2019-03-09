//rcredux can be used to create this
import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map(id => (
            <li key={id}>
              <div>
                <Tweet id={id} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
