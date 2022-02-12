export const increment = ( nr = 1 ) => {
    return {
        type:  'INCREMENT',
        payload: nr
    }
}

export const decrement = () => {
    return {
        type:  'DECREMENT'
    }
}

export const reset = () => {
    return {
        type:  'RESET'
    }
}


export const signIn = () => {
    return {
        type:  'SIGN_IN'
    }
}


export const signOff = () => {
    return {
        type:  'SIGN_OFF'
    }
}