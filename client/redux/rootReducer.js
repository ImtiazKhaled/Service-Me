const url = 'http://localhost:4500/'
const initState = {
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
        messagers: [
        {
            UserId: 'mark',
            FName: 'mark',
            LName: 'solnav',
            Title: 'car mechanic',
            ProfilePicture: 'http://www.minneapolisheadshots.com/gallery/main/audiologist-headshot.jpg',
        },
        {
            UserId: 'laury',
            FName: 'laury',
            LName: 'ding',
            Title: 'cleaner',
            ProfilePicture: 'https://jwhitephoto.com/wp-content/uploads/2017/11/metro-detroit-birmingham-headshot-photographer-jeff-white-jwhitephoto-18-678x1024.jpg',
        }
        ],
        chat: [
            {
                MessageId: 'markimtiaz1',
                Sender: 'imtiazi',
                Receiver: 'mark',
                Message: 'Hello there!',
                SendAt: '1573966460561'     
            },
            {
                MessageId: 'markimtiaz1',
                Receiver: 'imtiazi',
                Sender: 'mark',
                Message: 'Hello there!',
                SendAt: '1573966490562'     
            },
            {
                MessageId: 'markimtiaz1',
                Sender: 'imtiazi',
                Receiver: 'mark',
                Message: 'Hello there!',
                SendAt: '1573966490562'     
            },
        ]
    }
}

const RootReducer = (state = initState, action) => {
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
    }

    fetch(url+'vendors')
    .then(response => response.json())
    .then(data =>
        // console.log(state)
        state = {
            ...state,
            servicers: data
        }
        // console.log(state)
    )
    .catch(err => alert(err)) 

    return state;

}

export default RootReducer