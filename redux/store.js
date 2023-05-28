import {createStoreHook, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import reducers from "./reducers/rootReducers"


const initialState = {}

const middleware = [thunk]

export default createStoreHook(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)