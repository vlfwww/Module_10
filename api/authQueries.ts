export const LOGIN_MUTATION = `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        username
        profileImage
        description
      }
    }
  }
`;

export const ME_QUERY = `
  query GetMe {
    me {
      id
      email
      username
      profileImage
      description
    }
  }
`;

export const UPDATE_PROFILE_MUTATION = `
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
      email
      username
      profileImage
      description
    }
  }
`;

export const SIGNUP_MUTATION = `
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      message
    }
  }
`;
