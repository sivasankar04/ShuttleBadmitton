import React from 'react'
import { Button, Table } from 'antd';
import Link from 'antd/es/typography/Link';
import { useNavigate } from 'react-router-dom';
import { ProfileOutlined, EditOutlined, ScheduleOutlined } from '@ant-design/icons';
import './List.scss'

const columns = [
    {
        title: '#',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Tournament Name',
        dataIndex: 'tournamentName',
        key: 'tournamentName',
        width: 350,
    },
    {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'endDate',
    },
    {
        title: 'No of Teams',
        dataIndex: 'numberOfTeams',
        key: 'numberOfTeams',
    },
    {
        title: 'Created By',
        dataIndex: 'createdBy',
        key: 'createdBy',
    },
    {
        title: 'Season',
        dataIndex: 'season',
        key: 'season',
    },
    {
        title: 'More Actions',
        dataIndex: 'actions',
        key: 'actions',
        StyleSheet: {
            display: 'flex',
        },
        render: (_, {actions}) => {
            return (
                <div  className="action-list">
                    {
                        actions.map((action, i) => {
                            return (
                                <Link key={i}>
                                    <span title={(action === 1 && 'Details') || (action === 2 && 'Edit') || (action === 3 && 'Schedule')}>
                                        {action === 1 && <ProfileOutlined />}
                                        {action === 2 && <EditOutlined />}
                                        {action === 3 && <ScheduleOutlined />}
                                    </span>
                                </Link>
                            )
                        })
                    }
                </div>
            ) 
        }
    },
];

const data = [
    {
        position: 1,
        tournamentName: 'My Trophy',
        numberOfTeams: 5,
        startDate: '01/20/2023',
        endDate: '01/20/2023',
        createdBy: 'Rajesh',
        season: 2023,
        actions: [1,2,3]
    },
    {
        position: 2,
        tournamentName: 'My Trophy',
        numberOfTeams: 5,
        startDate: '01/20/2023',
        endDate: '01/20/2023',
        createdBy: 'Rajesh',
        season: 2023,
        actions: [1,2,3]
    },
    {
        position: 3,
        tournamentName: 'My Trophy',
        numberOfTeams: 5,
        startDate: '01/20/2023',
        endDate: '01/20/2023',
        createdBy: 'Rajesh',
        season: 2023,
        actions: [1,2,3]
    },
];

const ListTournaments = () => {
    const navigate = useNavigate()

    return (
        <div className='tournamentListContainer'>
            <Button onClick={() => navigate('/tournaments/create')}>Create Tournament</Button>
            <Table
            pagination={false}
                rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                columns={columns}
                dataSource={data}
            />
        </div>

    )
}

export default ListTournaments