import { produce } from "immer";
import Button from "../components/Button";
import Panel from "../components/Pannel";
// import useCounter from "../hooks/use-counter";
import { useReducer } from "react";

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            }
        // Community standard says that if the 
        // default part gets executed then something is wrong with your code 
        // so throw an error
        //      OR
        // Return the state only
        default:
            // throw new Error("Unexpected action type: " + action.type);
            return state;
    }
};

function CounterPage({ initialCount }){
    // const { count, increment } = useCounter(initialCount);
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });
    // For debugging
    console.log(state)

    const increment = () => {
       dispatch({
        type: INCREMENT_COUNT,
       });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        })
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
       
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        })
    };


    return (
        <Panel className='m-3'>
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>
                    Increment
                </Button>
                <Button onClick={decrement}>
                    Decrement
                </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300" 
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                />
                <Button>Add it!</Button>
            </form>
        </Panel>

    );
}

export default CounterPage;

