export const initialState =  [
    {
    id: 1,
    value: 'If it hurts, do it more often.',
    votes: 0
},
{
    id:2,
    value: 'Adding manpower to a late software project makes it later!',
    votes: 0
},
{
    id:3,
    value: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
},
{
    id:4,
    value: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
},
{
    id:5,
    value: 'Premature optimization is the root of all evil.',
    votes: 0
},
{
    id:6,
    value: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
},
{
    id:7,
    value: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    votes: 0
}
]


export const createAnecdote = (value) => { return {
    type: 'NEW_ANECDOTE',
    data: {
        id: generateId(),
        value: value,
        votes:0
    }
}}

export const addVote = (value) => { return {
    type: 'ADD_VOTE',
    data:{
        votes: value
    }
}}

export const generateId = () => Number((Math.random() * 1000).toFixed(0))


const anecdoteReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'NEW_ANECDOTE':
            return [...state, action.data]
        case 'ADD_VOTE':
            const votes = action.data.votes
            const votesToChange = state.find(v => v.votes === votes)
            const changedVotes = {
                ...votesToChange,
                votes: votesToChange.id
            }
            return state = changedVotes
        default :
        return state
    }
}

export default anecdoteReducer