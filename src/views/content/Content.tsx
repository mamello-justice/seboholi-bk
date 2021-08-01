import React, { FC } from 'react'
import styled from 'styled-components'
import { Empty, Layout, Space } from 'antd'

import { ProfileSummary } from '../../types/profile'

import { isEmpty, map } from '../../utils/tools'

import { SummaryCard } from '../../components/profile'

const { Content } = Layout

const StyledContent = styled(Content)`
  justify-content: center;
  min-height: calc(100vh - 64px - 70px);
  background-color: ${({ theme }) => theme.colors.content.bg};

  .ant-empty {
    height: calc(100vh - 64px - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .ant-empty-description {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .ant-space {
    width: 100%;
    padding: 20px;
  }
`

const HeaderComponent: FC = () => {
  const profileSummaries: ProfileSummary[] = [
    {
      city: 'Cape Town',
      firstname: 'John',
      lastname: 'Doe',
      profession: 'Software Engineer',
      postalCode: 7700,
      website: new URL('https://mamello.seboholi.com')
    }
  ]
  const noSummaries = isEmpty(profileSummaries)

  return (
    <StyledContent>
      {noSummaries && <Empty description={<span>No profiles</span>} />}
      {!noSummaries && (
        <Space direction='vertical' size='middle'>
          {map(profileSummaries, (summary, key) => (
            <SummaryCard
              key={key}
              avatar={summary.avatar}
              city={summary.city}
              firstname={summary.firstname}
              lastname={summary.lastname}
              locationUrl={summary.locationUrl}
              middlename={summary.middlename}
              profession={summary.profession}
              profileUrl={summary.profileUrl}
              postalCode={summary.postalCode}
              website={summary.website}
            ></SummaryCard>
          ))}
        </Space>
      )}
    </StyledContent>
  )
}

export default HeaderComponent
