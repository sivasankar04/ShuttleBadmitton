import { BarChartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import CustomIcons from 'Components/CustomIcons';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;
export default function TeamList() {
  const navigate = useNavigate();

  let teamList = [
    {
      teamName: 'ABC',
      teamLogo: 'https://joesch.moe/api/v1/random',
      teamslogon: 'Fight for win',
      teamColor: 'orange',
      id: 0

    },
    {
      teamName: 'DEF',
      teamLogo: 'https://joesch.moe/api/v1/random',
      teamslogon: 'Fight for win',
      teamColor: 'red',
      id: 1

    },
    {
      teamName: 'GHI',
      teamLogo: 'https://joesch.moe/api/v1/random',
      teamslogon: 'Fight for win',
      teamColor: 'green',
      id: 2

    },
    {
      teamName: 'JKL',
      teamLogo: 'https://joesch.moe/api/v1/random',
      teamslogon: 'Fight for win',
      teamColor: 'yellow',
      id: 3

    },
    {
      teamName: 'JKL5',
      teamLogo: 'https://joesch.moe/api/v1/random',
      teamslogon: 'Fight for win',
      teamColor: 'yellow',
      id: 3

    },
  ]
  const teamClicked = (id) => {
    navigate(`/teams/${id}`)
  }


  return (
    <div className='md:flex gap-4'>
      {
        teamList?.map((team, index) => {
          return <Card
            style={{
              width: 300,
              background: ` ${team?.teamColor ?? 'violet'}`
            }}

            actions={[
              <div onClick={() => teamClicked(team?.id)} className='flex justify-center'> {CustomIcons('stats')}</div>,
              <BarChartOutlined />,
            ]}
          >
            <Meta
              avatar={<Avatar src={team.teamLogo} />}
              title={team.teamName ?? ""}
              description={team.teamslogon ?? ''}
            />
          </Card>

        })
      }
    </div>

  )
}

