import React from 'react'
import { LogoutOutlined, BarsOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
const TopBarContent = () => {
    const navigate = useNavigate();
    const { setOpenDrawer,openDrawer } = useAuth();

    const topRouter = [
        { label: 'UserProfile', path: '/userProfile' },
    ]
    return (
        <div className='topBarStyles' >
            <div className='flex justify-between p-3'>
                <BarsOutlined onClick={() => setOpenDrawer(true)} />

                <div className='flex'>
                    <div className='topBarMenu'>
                        {topRouter.map((val, index) => {
                            return <div onClick={() => { navigate(val.path) }}>
                                {val.label}
                            </div>
                        })}
                    </div>
                    {/* <div className='ps-2'>
                        <LogoutOutlined style={{ fontSize: '25px' }} onClick={() => {
                            localStorage.setItem("userLogedIn", false);
                            navigate('/login')
                        }} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default TopBarContent