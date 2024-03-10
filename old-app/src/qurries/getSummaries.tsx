import { gql } from '@apollo/client';
export const getSummaries = gql`
{
    summaries {
      id
      welcometext
    }
  }
`;