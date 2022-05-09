import { useReducer } from "react";
import FilterCountries from "./FilterCountries";
import Countries from "./Countries";

const actionTypes = {
  SEARCH: "SEARCH",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return action.payload.initialValue.filter(
        (country) =>
          country.name.toLowerCase().indexOf(action.payload.val.toLowerCase()) >
          -1
      );
    default:
      return state;
  }
};

const FilteredCountries = (props) => {
  const [state, dispatch] = useReducer(reducer, props.countries);

  const handleInput = (evt) => {
    const val = evt.target.value;
    dispatch({
      type: actionTypes.SEARCH,
      payload: { val, initialValue: props.countries },
    });
  };

  return (
    <div>
      <FilterCountries handleInput={handleInput} />
      <Countries countries={state} />
    </div>
  );
};

export default FilteredCountries;
