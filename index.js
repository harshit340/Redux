const redux  = require('redux');
const createStore= redux.createStore

// action of buying a cake

const Buy_CAKE = 'Buy_CAKE'
function buycake () {
    return {
        type : Buy_CAKE,
        info : "this is my first action"
    }
}

//reducer
const initial_state = {
    num_of_cake : 10,
}

const reducer = (state = initial_state, action ) => {
  switch(action.type){
    case Buy_CAKE:return {
        ...state,
        num_of_cake: state.num_of_cake-1
    }

    default:return state 
  }

}

const store = createStore(reducer)
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated store',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()