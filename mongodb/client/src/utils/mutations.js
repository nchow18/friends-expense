import gql from 'graphql-tag';

//0 LOGIN
//1 ADD_USER


export const LOGIN = gql`
    mutation login($email: String!, $password:String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            email
            admin
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($input: UserInput) {
        addUser(input: $input) {
            token
            user {
                _id
                first_name
                last_name
                email
            }
        }
    }
`;
