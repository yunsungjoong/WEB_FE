let initalState = {
    count : 0,
    id: "",
    password: ""
};
function reducer(state = initalState, action) {
    console.log("action 은 뭘까?", action);
   
    switch(action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.num};
        case "LOGIN":
            return { 
                ...state, 
                id: action.payload.id, 
                password:action.payload.password 
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count -1
            };
        default:
            return{ ...state, count: state.count + 1};
    }
};

export default reducer;  


// payload 필요한 값을 보내는 기능   