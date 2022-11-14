


export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        
        case '[TODO] Remove Todo':
            return initialState.filter(task => task.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(task => {
                if(task.id === action.payload)
                {
                    return{
                        ...task,
                        done: !task.done
                    }
                }
                return task;
            });
        default:
            return initialState;
    }
}