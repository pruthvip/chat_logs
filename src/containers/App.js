import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from '../actions'
import MessageCard from '../components/MessageCard'
import Loader from '../components/Loader';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMessages(true))
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
    //   const { dispatch, selectedSubreddit } = this.props
    //   dispatch(fetchMessages(selectedSubreddit))
    // }
  }

  render() {
    const { messages, status } = this.props

    console.log('-- status --', status);

    return (
      <div className = "app">
        <div className="app__content">
          {
            status === 'loading' ? (
              <Loader />
            ): null
          }
          {
            messages.map((m) => (
              <MessageCard
                {...m}
              />
            ))
          }
        </div> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { messages, membersMap, status } = state

  return {
    messages,
    membersMap,
    status
  }
}

export default connect(mapStateToProps)(App)
