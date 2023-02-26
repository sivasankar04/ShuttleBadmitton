import React from 'react'
import { Table, Tag } from 'antd';
const columns = [
    {
        title: '#',
        dataIndex: 'position',
        key: 'position',
        render: (text, record, index) => <a>{index + 1}</a>,
    },
    {
        title: 'Teams',
        dataIndex: 'name',
        key: 'name',
        width: 350,
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Matches',
        dataIndex: 'tags',
        key: 'totalMatches',
        render: (text) => text.length
    },
    {
        title: 'Win',
        dataIndex: 'tags',
        key: 'matchesWin',
        render: (text) => text.filter((item, index) => item === "win").length
    },
    {
        title: 'Lost',
        dataIndex: 'tags',
        key: 'matchesLost',
        render: (text) => text.filter((item, index) => item === "lose").length
    },
    {
        title: 'PtsDiff',
        dataIndex: 'pointsDifference',
        key: 'pointsDiffernce',
    },
    {
        title: 'Pts',
        dataIndex: 'points',
        key: 'points',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        // let color = tag==="lose" > 5 ? 'red' : 'green';
        render: (_, { tags }) => {

            return tags.map((tag) => {
                console.log('tesytttttttttttt', tag.charAt(0).toUpperCase())
                let color = tag === "lose" ? '#cd201f' : '#01a54b';
                return (
                    <Tag color={color} key={tag}>
                        {tag.charAt(0).toUpperCase()}
                    </Tag>
                );
            })

        },
    },

];
const data = [
    {
        position: 1,
        key: '1',
        name: 'abc',
        points: 6,
        pointsDifference: '9',
        tags: ['win', 'lose', 'win'],
    },
    {
        key: '2',
        name: 'def',
        points: 4,
        address: 'London No. 1 Lake Park',
        pointsDifference: '7',

        tags: ['lose', 'lose', 'win']
    },
    {
        key: '3',
        name: 'ghi',
        points: 4,
        address: 'Sydney No. 1 Lake Park',
        pointsDifference: '5',

        tags: ['win', 'lose', 'lose'],
    },
];
export default function PointsTable() {
    return (
        <div >
            <Table
            pagination={false}
                rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}
