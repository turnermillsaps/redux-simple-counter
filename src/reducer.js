const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    } else if (type === "DECREMENT") {
        return {
            value: state.value - 1
        }
    } else if (type === "INCRBYFIVE") {
        return {
            value: state.value + 5
        }
    } else if (type === "DECRBYFIVE") {
        return {
            value: state.value - 5
        }
    }
    return state
}