import "./App.css";
import MultiSelect from "./components/multiselect/MultiSelect";

function App() {
  const handleChange = (selected: string[]) => {
    console.log("Selected items:", selected);
  };

  return (
    <div>
      <h2> Multi Select</h2>
      <div className="credit">
        <a 
          href="https://www.linkedin.com/in/itzhoman" 
          target="_blank" 
        >
          Created by Hooman Hajimohamadi
        </a>
      </div>
      <MultiSelect
        options={["option1", "option2", "option3", "option4", "option5"]}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
