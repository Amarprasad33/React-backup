import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm, carReducer } from './slices/carsSlice';
import { formReducer, changeName, changeCost } from "./slices/formSlice";


const store = configureStore({
    reducer: {
        cars: carReducer,
        form: formReducer
    }
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };


