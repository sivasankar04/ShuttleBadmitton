import React from 'react'
import { LogoutOutlined, BarsOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { HomeOutlined } from '@ant-design/icons'

const TopBarContent = () => {
    const navigate = useNavigate();
    const { setOpenDrawer, openDrawer } = useAuth();

    const menuLinks = [
        { label: 'Teams', path: '/teams' },
        { label: 'Points Table', path: '/pointsTable' },
        { label: 'Tournaments', path: '/tournaments' },
    ]
    return (
        <div className='topBarStyles' >
            <BarsOutlined className='block md:hidden pl-4 text-2xl' onClick={() => setOpenDrawer(true)} />
            <HomeOutlined className='hidden md:block px-4 text-2xl ' onClick={() => navigate('/')} />
            <div className='md:flex justify-between w-full hidden '>
                <div className='topBarMenu'>
                    {menuLinks.map((val, index) => {
                        return <div key={`${val}_${index}`} className='tagStyles' onClick={() => { navigate(val.path) }}>
                            {val.label}
                        </div>
                    })}
                </div>
                <div className='pr-4'>
                    <LogoutOutlined className='text-2xl' onClick={() => {
                        localStorage.setItem("userLogedIn", false);
                        navigate('/login')
                    }} />
                </div>
            </div>
        </div>
    )
}
export default TopBarContent