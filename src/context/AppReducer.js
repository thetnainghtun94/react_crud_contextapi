export default (state,action) => {
    switch (action.type) {

        case 'ADD_USER':
            return {
                users: [action.payload, ...state.users]
            }

        case 'EDIT_USER':
            const updateUser = action.payload;
            const updateUsers = state.users.map(user => {
                if(user.id === updateUser.id) {
                    return updateUser;
                }
                return user;
            })

            return {
                users: updateUsers
            }

        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            }
            
        default:
            return state
    }
}