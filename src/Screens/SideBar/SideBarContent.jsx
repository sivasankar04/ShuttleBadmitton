import React from 'react'
import { useNavigate } from "react-router-dom";

import { HomeOutlined, UsergroupDeleteOutlined, BarChartOutlined } from '@ant-design/icons'
import { Drawer } from 'antd';
import useAuth from 'hooks/useAuth';
const SideBarContent = () => {
    const navigate = useNavigate()
    const menuItems = [
        { label: 'Home', icon: <HomeOutlined />, path: '/' },
        { label: 'Teams', icon: <UsergroupDeleteOutlined />, path: '/teams' },
        { label: 'Points Table', icon: <BarChartOutlined />, path: '/pointsTable' }

    ];
    const { openDrawer, setOpenDrawer } = useAuth();
    console.log('openDraweropenDrawer', openDrawer)
    return (
        <div>
            <div className='sideBarStyles hidden'>
                {
                    menuItems.map((val, index) => {
                        return <div className='sidebarMenu d-flex' onClick={() => { navigate(val.path) }}>
                            <div className='d-flex'>
                                {val.icon}
                            </div>
                            <div className='ms-2 text-red-500'>
                                {val.label}
                            </div>
                        </div>

                    })
                }
            </div>
            <Drawer
                width={250}
                placement={"left"}
                closable={true}
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                destroyOnClose={true}
                key={0}
            >
                <div className='sideBarStyles'>
                    {
                        menuItems.map((val, index) => {
                            return <div className='sidebarMenu d-flex items-center' onClick={() => {
                                navigate(val.path); setOpenDrawer(false)
                            }}>
                                {val.icon}
                                <div className='ml-2'>{val.label}</div>

                            </div>

                        })
                    }
                </div>
            </Drawer>
        </div>


    )
}
export default SideBarContent