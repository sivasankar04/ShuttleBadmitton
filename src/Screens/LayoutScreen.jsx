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
        <div className='flex justify-center'>
          <div className='sideBarDesigns'>
            <SideBarContent />
          </div>
          <div className='mt-3 overflow-auto'>
            <DisplayHomeContent />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainScreen