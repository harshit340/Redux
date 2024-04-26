const redux  = require('redux');
const reduxLogger = require('redux-logger');
const createStore= redux.createStore
const combineReducer =  redux.combineReducers
const logger = reduxLogger.createLogger()

// action of buying a cake

const Buy_CAKE = 'Buy_CAKE'
const Buy_ICECREAM = 'Buy_ICECREAM'
function buycake () {
    return {
        type : Buy_CAKE,
        info : "this is my first action"
    }
}
function buyicecream () {
    return {
        type : Buy_CAKE,
        info : "this is my first action"
    }
}

//reducer
const initialcake = {
    num_of_cake : 10,
}
const initialicecream = {
    numoficecream : 10,
}

const reducercake = (state = initialcake, action ) => {
  switch(action.type){
    case Buy_CAKE:return {
        ...state,
        num_of_cake: state.num_of_cake-1
    }

    default:return state 
  }

}
const reducericecream = (state = initialicecream, action ) => {
  switch(action.type){
    case Buy_CAKE:return {
        ...state,
        numoficecream: state.numoficecream-1
    }

    default:return state 
  }

}
//combine the multiple reducers 
const rootreducer = combineReducer({
  cake:reducercake,
  icecream : reducericecream
})
const store = createStore(rootreducer,redux.applyMiddleware(logger))
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()