import styled from 'styled-components'
import { Card } from 'antd'

export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.card.bg};

  .ant-layout {
    flex-direction: column;
    align-items: center;
    background-color: transparent;

    .ant-avatar {
      margin: 0 0 20px;
      background-color: ${({ theme }) => theme.colors.brightGrey};
    }

    .ant-layout {
      flex-direction: column;
      color: ${({ theme }) => theme.colors.text};

      .ant-space {
        padding: 0;
        margin-bottom: 10px;

        .ant-layout {
          flex-direction: row;
          align-items: flex-start;
          margin-right: 0;

          .ant-avatar {
            background-color: transparent;
            margin: 0;

            .anticon {
              color: ${({ theme }) => theme.colors.text};
            }
          }

          .user-links {
            max-width: 150px;
            margin-left: 10px;
            white-space: nowrap;
          }
        }
      }
    }

    .ant-btn-primary {
      background: ${({ theme }) => theme.colors.primary};
      border: ${({ theme }) => theme.colors.primary};
    }
  }

  @media only screen and (min-width: 768px) {
    width: fit-content;
    max-width: none;

    .ant-layout {
      flex-direction: row;

      .ant-avatar {
        margin: 0 40px 0 0;
      }

      .ant-layout {
        margin-right: 40px;
        align-items: flex-start;
      }
    }
  }
`
