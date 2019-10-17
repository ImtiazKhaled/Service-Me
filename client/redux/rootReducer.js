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