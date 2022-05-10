import PropTypes from "prop-types";

function FilterCountries(props) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-[20px]">
      <div className="filterCountriesContainer__search">
        <input
          className="bg-white shadow-sm w-[280px] outline-none bg-[length:20px] bg-no-repeat bg-[20px] rounded-[4px] pt-[18px] pr-[12px] pb-[18px] pl-[20px] border-none"
          placeholder="Search for a country..."
          onInput={props.handleInput}
        />
      </div>
    </div>
  );
}

FilterCountries.propTypes = {
  handleInput: PropTypes.func,
};

export default FilterCountries;
