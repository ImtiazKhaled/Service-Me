var initState = {
    categories: [
        {
            id: "Appliances",
        },
        {
            id: "Electrical",
        },
        {
            id: "Plumbing",
        },
        {
            id: "Home Tutoring",
        },
        {
            id: "Packaging Moving",
        },
        {
            id: "Painting",
        },
        {
            id: "Cleaning",
        },
        {
            id: "Computer Repair",
        },
        {
            id: "Home Repair",
        },
        {
            id: "Pest Control",
        },
    ],
    servicers: [],
    user: {
        UserId: "",
        SignedIn: false,
        messagers: [],
      }
}

const RootReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_VENDORS":
            fetch(url+"vendors")
            .then(response => response.json())
            .then(data => {
                state = {
                    ...state,
                    servicers: data
                }
                return state
            })
            .catch(err => alert(err)) 
            return state
        case "LOGIN_SUCESS":
            state = {
                ...state,
                user: action.user
            }
            return state
        default:
            return state
    }
}

export default RootReducer