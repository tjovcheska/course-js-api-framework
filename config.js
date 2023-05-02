export const config = {
    STG: {
        host: 'https://gorest.co.in/public/v2',
        token: 'e3800b50df1afd29775ee8d0bc53d1435a4cb5924dcd3a99ed6588f298b55aeb',
        username: 'Tenali Ramakrishna',
        gender: 'male',
        status: 'active'
    },
    PROD: {
        host: 'https://gorest.co.in/public/v2',
        token: 'e3800b50df1afd29775ee8d0bc53d1435a4cb5924dcd3a99ed6588f298b55aeb',
        username: 'Tenali Ramakrishna',
        gender: 'male',
        status: 'active'
    },
    BOOKS_DEV: {
        host: 'http://localhost:1010'
    },
    BOOKS_STG: {
        host: 'http://localhost:2020'
    },
    BOOKS_PRD: {
        host: 'http://localhost:3030'
    }
}

global.executionVariables = {}