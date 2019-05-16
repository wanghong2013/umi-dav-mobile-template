
export default {
    namespace: 'user',

    state: {
        nickName: '王宏',
        age: 34
    },

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
