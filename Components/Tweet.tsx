import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'

// yarn add react-timeago/ yarn --dev @types/react-timeago


// feed tweets through
interface Props {
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  return (
    <div>
        <div>
            <img src={tweet.profileImg} alt=''/>

        </div>
        <div>
            {/* direct reference to poster tag */}
            <p>{tweet.username}</p>
            <p>@{tweet.username.replace(/\s+/q, '').toLowerCase()}</p>
        </div>
    </div>
  )
}

export default Tweet