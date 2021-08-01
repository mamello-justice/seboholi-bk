import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Avatar, Button, Layout, Space } from 'antd'
import { CompassOutlined, LinkOutlined, UserOutlined } from '@ant-design/icons'

import { ProfileSummary } from '../../../types/profile'

import { StyledCard } from './SummaryCard.styled'

interface SummaryCardProps extends ProfileSummary {}

const SummaryCard: FC<SummaryCardProps> = ({
  avatar,
  city,
  firstname,
  lastname,
  locationUrl,
  profession,
  profileUrl,
  postalCode,
  website
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <StyledCard bordered={false}>
      <Layout>
        <Avatar size={64} icon={<UserOutlined />} src={avatar?.href} />
        <Layout>
          <h2>{`${firstname} ${lastname}`}</h2>
          <p>{profession}</p>
          <Space
            direction={isMobile ? 'vertical' : 'horizontal'}
            size={isMobile ? 0 : 'middle'}
          >
            <Layout>
              <Avatar size='small' icon={<CompassOutlined />} />
              <a
                className='user-links'
                href={locationUrl?.href}
              >{`${city}, ${postalCode}`}</a>
            </Layout>
            {website && (
              <Layout>
                <Avatar size='small' icon={<LinkOutlined />} />
                <a className='user-links' href={website.href}>
                  {website.host}
                </a>
              </Layout>
            )}
          </Space>
        </Layout>
        <Button type='primary' href={profileUrl?.href}>
          View Profile
        </Button>
      </Layout>
    </StyledCard>
  )
}

export default SummaryCard
