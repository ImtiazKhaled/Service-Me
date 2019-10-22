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
    servicers: [
        {"id":"5daa8068fc13ae1596000000","name":"Laurianne Igounet","service":"plumber","rating":1.17,"profilePicture":"http://dummyimage.com/203x138.png/dddddd/000000"},
        {"id":"5daa8068fc13ae1596000001","name":"Ynes Momery","service":"plumber","rating":4.22,"profilePicture":"http://dummyimage.com/197x171.jpg/dddddd/000000"},
        {"id":"5daa8068fc13ae1596000002","name":"Kesley Nealand","service":"plumber","rating":4.85,"profilePicture":"http://dummyimage.com/219x185.jpg/cc0000/ffffff"},
        {"id":"5daa8068fc13ae1596000003","name":"Bonita Brickstock","service":"plumber","rating":0.6,"profilePicture":"http://dummyimage.com/167x104.png/ff4444/ffffff"},
        {"id":"5daa8068fc13ae1596000004","name":"Bran Kenrick","service":"plumber","rating":0.03,"profilePicture":"http://dummyimage.com/152x242.png/cc0000/ffffff"},
        {"id":"5daa80a0fc13ae1f58000064","name":"Kristina Bolus","service":"ride","rating":3.9,"profilePicture":"http://dummyimage.com/230x174.bmp/cc0000/ffffff"},
        {"id":"5daa80a0fc13ae1f58000065","name":"Jonah Moorrud","service":"ride","rating":1.34,"profilePicture":"http://dummyimage.com/165x126.png/cc0000/ffffff"},
        {"id":"5daa80a0fc13ae1f58000066","name":"Lazaro Rainon","service":"ride","rating":3.23,"profilePicture":"http://dummyimage.com/114x163.bmp/cc0000/ffffff"},
        {"id":"5daa80a0fc13ae1f58000067","name":"Pansy Wabey","service":"ride","rating":4.25,"profilePicture":"http://dummyimage.com/133x122.png/5fa2dd/ffffff"},
        {"id":"5daa80a0fc13ae1f58000068","name":"Andriette Pilgrim","service":"ride","rating":1.68,"profilePicture":"http://dummyimage.com/231x224.jpg/cc0000/ffffff"},
        {"id":"5daa80f7fc13ae1596000005","name":"Juliann Cooper","service":"car-mechanic","rating":1.47,"profilePicture":"http://dummyimage.com/176x226.png/5fa2dd/ffffff"},
        {"id":"5daa80f7fc13ae1596000006","name":"Lauri Philimore","service":"car-mechanic","rating":0.66,"profilePicture":"http://dummyimage.com/110x128.jpg/5fa2dd/ffffff"},
        {"id":"5daa80f7fc13ae1596000007","name":"Konstantin Orteu","service":"car-mechanic","rating":3.07,"profilePicture":"http://dummyimage.com/136x130.png/cc0000/ffffff"},
        {"id":"5daa80f7fc13ae1596000008","name":"Charles Pullen","service":"car-mechanic","rating":2.47,"profilePicture":"http://dummyimage.com/248x120.bmp/5fa2dd/ffffff"},
        {"id":"5daa80f7fc13ae1596000009","name":"Nappy Offa","service":"car-mechanic","rating":0.68,"profilePicture":"http://dummyimage.com/222x189.png/dddddd/000000"}
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
    }

    return state;

}

export default RootReducer