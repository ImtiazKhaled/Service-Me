const url = 'http://34.68.138.86:3001/'

var initState = {
    categories: [
        {
            id: 'plumber',
            title: 'Plumber',
            used: 1,
        },
        {
            id: 'car-mechanic',
            title: 'Car Mechanic',
            used: 0,
        },
        {
            id: 'ride',
            title: 'Ride',
            used: 2,
        },
    ],
    servicers: [],
    user: {
        UserId: 'AC111400',
        messagers: [],
        chat: [
            {
                MessageId: 'markimtiaz1',
                Sender: 'imtiazi',
                Receiver: 'mark',
                MessageText: 'Hello there!',
                SendAt: '1573966460561'     
            },
            {
                MessageId: 'markimtiaz1',
                Receiver: 'imtiazi',
                Sender: 'mark',
                MessageText: 'Hello there!',
                SendAt: '1573966490562'     
            },
            {
                MessageId: 'markimtiaz1',
                Sender: 'imtiazi',
                Receiver: 'mark',
                MessageText: 'Hello there!',
                SendAt: '1573966490562'     
            },
        ]
    }
}

const RootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_VENDORS':
            fetch(url+'vendors')
            .then(response => response.json())
            .then(data => {
                state = {
                    ...state,
                    servicers: data
                }
                // console.log(state)
                return state
            })
            .catch(err => alert(err)) 
        default:
            // fetch(url+'vendors')
            // .then(response => response.json())
            // .then(data => {
            //     state = {
            //         servicers: data,
            //         ...state
            //     }
            //     return state
            // })
            // .catch(err => alert(err)) 
            // console.log('before fetch',state.user)
            // fetch(url+'messages/'+state.user.UserId)
            // .then(response => response.json())
            // .then(data => {
            //     state = {
            //         ...state,
            //         user: {
            //             ...state.user,
            //             messagers: data
            //         }
            //     }
            // })
            // .catch(err => alert(err)) 
            // // console.log('after fetch',state)
            return state
    }
}

export default RootReducer