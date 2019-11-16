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
    servicers: []
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