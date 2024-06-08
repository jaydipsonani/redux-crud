const initialState = {
    data: [{ name: 'hello', email: "hello@example.com", password: "passwords" }],
}

const addMoreData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("333333333")
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case "REMOVE_DATA":
            return {
                ...state,
                data: [...state.data.filter((item, index) => index !== action.payload)]
            }

        case "EDIT_DATA":
            const { index, newData } = action.payload
            return {
                ...state,
                data: state.data.map((item, i) => i === index ? newData : item)
            }

        default: {
            return state
        }
    }
}

export default addMoreData
