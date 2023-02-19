import React from 'react'
import { useNavigate } from "react-router-dom";

import { HomeOutlined, SettingOutlined, DashboardOutlined } from '@ant-design/icons'
import { Drawer } from 'antd';
import useAuth from 'hooks/useAuth';
const SideBarContent = () => {
    const navigate = useNavigate()
    const menuItems = [
        { label: 'Home', icon: <HomeOutlined />, path: '/' },
        { label: 'Points Table', icon: <SettingOutlined />, path: '/pointsTable' }
    ];
    const { openDrawer, setOpenDrawer } = useAuth();
    console.log('openDraweropenDrawer', openDrawer)
    return (
        <div className='hidden'>
            <div className='sideBarStyles'>
                {
                    menuItems.map((val, index) => {
                        return <div className='sidebarMenu d-flex' onClick={() => { navigate(val.path) }}>
                            <div className='d-flex'>
                                {val.icon}
                            </div>
                            <div className='ms-2'>
                                {val.label}
                            </div>
                        </div>

                    })
                }
            </div>
            <Drawer
                placement={"left"}
                closable={true}
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                key={0}
            >
                <div className='sideBarStyles'>
                    {
                        menuItems.map((val, index) => {
                            return <div className='sidebarMenu d-flex' onClick={() => { navigate(val.path) }}>
                                <div className='d-flex'>
                                    {val.icon}
                                </div>
                                <div className='ms-2'>
                                    {val.label}
                                </div>
                            </div>

                        })
                    }
                </div>
            </Drawer>
        </div>


    )
}
export default SideBarContent