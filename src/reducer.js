const initialState = {
    value: 0,
    color: ''
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
    } else if (type === "COLORBLUE") {
        return {
            value: state.value,
            color: 'blue'
        }
    } else if (type === "COLORGREEN") {
        return {
            value: state.value,
            color: 'green'
        }
    } else if (type === "COLORRED") {
        return {
            value: state.value,
            color: 'red'
        }
    }
    return state
}