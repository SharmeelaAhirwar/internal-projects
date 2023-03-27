import {applyMiddleware,createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./userSaga"
const sagaMiddleWare=createSagaMiddleware();
const middleWares=[sagaMiddleWare];

if(process.env.NODE_ENV==="development")
middleWares.push(logger)

const store=createStore(rootReducer,applyMiddleware(...middleWares))

sagaMiddleWare.run(rootSaga)

export default store;