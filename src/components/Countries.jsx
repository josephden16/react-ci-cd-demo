import Country from "./Country";

function Countries(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-10">
      {props.countries.map((country, index) => {
        return <Country country={country} key={index} />;
      })}
    </div>
  );
}

export default Countries;
