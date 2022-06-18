import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'

// 3 sections for twitter: Sidebar to the screenLeft, feed in the middle and Widget on the right


const Home: NextPage = () => {
  return (
    // Apply contstraint to bigger screen view but not on mobile view
    // add margin-x auto to balance left and right axes
    // max height of screen so that the container themselves are scrollable and the whole page is static
    // overflow to add scrolling withing the container content

    <div className=" lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter TS</title>
      </Head>

    {/* Layout into 9 columns */}
      <main className='grid grid-cols-9'>
      {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed/>

        {/* Widget */}
        <Widgets/>


      </main>
    </div>
  )
}

export default Home
