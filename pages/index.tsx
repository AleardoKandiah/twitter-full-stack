import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'

// 3 sections for twitter: Sidebar to the screenLeft, feed in the middle and Widget on the right


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter TS</title>
      </Head>

      <main>
      {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widget */}
      </main>
    </div>
  )
}

export default Home
