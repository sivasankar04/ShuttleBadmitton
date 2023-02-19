import React from 'react'
import DisplayHomeContent from './MainScreen'
import SideBarContent from './SideBar/SideBarContent'
import TopBarContent from './TopBar/TopbarContent'

const MainScreen = () => {
  return (
    <div>
      <div>
        <TopBarContent />
      </div>
      <div style={{ height: 'calc(100vh-120px)' }}>
        <div className='flex'>
          <div className='sideBarDesigns'>
            <SideBarContent />
          </div>
          <div className='homeContentDesigns'>
            <DisplayHomeContent />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainScreen