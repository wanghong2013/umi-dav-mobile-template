

const initialState = {
    nickName: '王宏',
    age: 34
}

export default {
    namespace: 'user',

    state: initialState,

    effects: {

    },

    reducers: {
        saveAge(state, action) {
            return {
                ...state,
                age: action.payload
            }
        }
    },

    subscriptions: {

    },
};
