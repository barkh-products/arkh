import { gql, graphql } from "react-apollo";

export const feedbackMutation = graphql(gql`
  mutation Feedback($contactInfo: String!, $subject: String!, $message: String!) {
    feedback {
      sendMessage(
        contactInfo: $contactInfo
        subject: $subject
        message: $message
      )
    }
  }
`);
