// 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";
import logger from "redux-logger";
// import persistedReducer from "../redux/reducers/persistedReducer";

const enhancer =
    process.env.NODE_ENV === "production"
        ? compose(applyMiddleware())
        : composeWithDevTools(applyMiddleware(logger));

// const logger = createLogger();
// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

// 위에서 만든 reducer를 스토어 만들때 넣어줍니다
export const store = createStore(
    // persistedReducer,
    enhancer
);

export const persistor = persistStore(store);
export default { store, persistor };