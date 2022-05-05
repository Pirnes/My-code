const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GOOD':
           initialState.good++
           const stateGood = {...initialState}
            return state = stateGood
        case 'NEUTRAL':
           initialState.neutral++
            const stateNeutral = {...initialState}
            return state = stateNeutral
        case 'BAD':
           initialState.bad++
           const stateBad = {...initialState}
            return state = stateBad
        case 'DO_NOTHING':
            return state
        default:
            return state
    }
}

export default counterReducer