import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

class TwitterFeed extends Component {
  render () {
    return (
      <div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'ashishnandansin'
          }}
          options={{
            username: 'ashishnandnasin',
            height: '400'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </div>
    )
  }
}

export default TwitterFeed
