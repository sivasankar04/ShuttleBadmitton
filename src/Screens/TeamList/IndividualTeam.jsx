import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';

let teamList = [
    {
        teamName: 'ABC',
        teamLogo: 'https://joesch.moe/api/v1/random',
        teamslogon: 'Fight for win',
        teamColor: 'orange',
        id: 1,
        players: [{
            playerName: 'john',
            scoredPoints: 25,
            playerProfile: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            role:'C'
        },
        {
            playerName: 'sam',
            scoredPoints: 15,
            playerProfile: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            role:'P'
        },
        ]

    },
    {
        teamName: 'DEF',
        teamLogo: 'https://joesch.moe/api/v1/random',
        teamslogon: 'Fight for win',
        teamColor: 'red',
        id: 2,
        players: [{
            playerName: 'john',
            scoredPoints: 25,
            playerProfile: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            role:'C'
        },
        {
            playerName: 'sam',
            scoredPoints: 15,
            playerProfile: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            role:'P'
        },
        ]

    },
    {
        teamName: 'GHI',
        teamLogo: 'https://joesch.moe/api/v1/random',
        teamslogon: 'Fight for win',
        teamColor: 'green',
        id: 3,
        players: [{
            playerName: 'john',
            scoredPoints: 25,
            playerProfile: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            role: 'C'
        },
        {
            playerName: 'sam',
            scoredPoints: 15,
            playerProfile: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            role: 'P'
        },
        ]

    },
    {
        teamName: 'JKL',
        teamLogo: 'https://joesch.moe/api/v1/random',
        teamslogon: 'Fight for win',
        teamColor: 'yellow',
        id: 4,
        players: [{
            playerName: 'john',
            scoredPoints: 25,
            playerProfile: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            role: 'C'
        },
        {
            playerName: 'sam',
            scoredPoints: 15,
            playerProfile: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            role:'P'
        },
        ]

    },
]
export default function IndividualTeam() {
    const params = useParams();
    console.log('params', params.id)
    return (
        <div>
            {teamList[params.id]?.players?.map((playerDetail, index) => < Card
                style={{ minWidth: 340, backgroundColor: teamList[params.id]?.teamColor }} className='flex justify-center'
            >
                <div className='flex justify-between items-center'>
                    <img className='h-28 rounded-full w-28' src={playerDetail?.playerProfile} alt="" />
                    <div className='font-bold pl-4 capitalize'>
                        <div >Name: {playerDetail?.playerName}{`( ${playerDetail?.role} )`} </div>
                        <div>Points Scored:  {playerDetail?.scoredPoints}</div>
                    </div>
                </div>
            </Card>

            )

            }
        </div >
    )
}
