import React from 'react'
import Sidebar from '../components/Sidebar'
import WelcomeContent from '../components/WelcomeContent'


const Welcome = () => {
  return (
    <div className='welcome-content'>
      <Sidebar/>
      <WelcomeContent/>
    </div>
  )
}

export default Welcome