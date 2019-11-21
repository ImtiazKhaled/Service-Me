var initState = {
    categories: [
        {
            id: "Appliances",
            image: require("../assets/appliances.png")
        },
        {
            id: "Electrical",
            image: require("../assets/electrical.png"),
        },
        {
            id: "Plumbing",
            image: require("../assets/plumbing.png"),
        },
        {
            id: "Home Tutoring",
            image: require("../assets/tutor.png"),
        },
        {
            id: "Packaging Moving",
            image: require("../assets/moving.png"),
        },
        {
            id: "Painting",
            image: require("../assets/painting.png"),
        },
        {
            id: "Cleaning",
            image: require("../assets/cleaning.png"),
        },
        {
            id: "Computer Repair",
            image: require("../assets/computer.png"),
        },
        {
            id: "Home Repair",
            image: require("../assets/home.png"),
        },
        {
            id: "Pest Control",
            image: require("../assets/pestcontrol.png"),
        },
    ],
    servicers: [],
    user: {
        "SignedIn": false,
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
        case "LOG_OUT":
            const logOut = {        
                UserId: "",
                SignedIn: false,
                messagers: [],
            }
            state = {
                ...state,
                user: logOut
            }
        default:
            return state
    }
}

export default RootReducer