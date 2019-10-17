const initState = {
    categories: [
        {
            id: '1',
            title: 'Plumber',
            used: 1,
        },
        {
            id: '2',
            title: 'Car Mechanic',
            used: 0,
        },
        {
            id: '3',
            title: 'Ride',
            used: 2,
        },
    ],
    servicers: [
        {
            id: '1',
            profilePicture: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/46439138_10161004977980585_8159518786643296256_o.jpg?_nc_cat=107&_nc_oc=AQlF_n5tCOTXvF3WY8JiIK4cbPKCCzxa10b6s-BqOn__nfqwxwLgQzds3cZ6ISoMq5A&_nc_ht=scontent-dfw5-1.xx&oh=bf12ac9c0a37bbd9ba17f3c82a636ec2&oe=5E2DE25E',
            name: 'Bob',
            service: ' ', 
        },
        {
            id: '2',
            profilePicture: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29433206_10155526752320748_1109767262354538496_o.jpg?_nc_cat=104&_nc_oc=AQkWzxaqejJ9fG5TCBAQJYK6XHSUC546eSy9h6DmveDHzByoMNRgpbWIq6vaLLR_jsg&_nc_ht=scontent-dfw5-1.xx&oh=1cfd48b2cf4914999524e5ca6078b72f&oe=5E2BDA6C',
            name: 'Jane',
            service: ' ', 
        },
        {
            id: '3',
            profilePicture: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/36288233_10155754805050748_4127247255428136960_o.jpg?_nc_cat=110&_nc_oc=AQkgnMtdacF5HmWvMoapFb0yMTP4PLcBZFOz6GQhHRrMIuwWbueXP1CSU6PKvJyCPj8&_nc_ht=scontent-dfw5-1.xx&oh=0087542b7c51acb3f5976585dc82a5a1&oe=5E5ED25F',
            name: 'Jessica',
            service: ' ', 
        },
        {
            id: '4',
            profilePicture: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29389161_10155526752340748_6404315791939862528_o.jpg?_nc_cat=105&_nc_oc=AQkoXNCb5HXcLZjv4sBXvUxr1rzPxQozuf9fXyCedJjylhZ2kQ1llxV5Mz5osmXPRLw&_nc_ht=scontent-dfw5-1.xx&oh=701f2c78da4ab9c98c30739655c3c38f&oe=5E1CA4B4',
            name: 'Tom',
            service: ' ', 
        },
    ]
}

export const RootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_SUBJECT':
            return state;
        case 'ADD_SUBJECT_ERROR':
            console.log('error adding subject ', action.err)
            return state;
        case 'ADD_GRADE':
            return state;
        case 'ADD_GRADE_ERROR':
            console.log('error adding grade ', action.err)
            return state;
        default:
        // console.log('that is not a valid type, check code! (rootReducer.js)')
    }

    return state;

}

export default RootReducer