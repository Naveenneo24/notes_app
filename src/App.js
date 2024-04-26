import { useEffect} from "react";
import './App.css';
import UseContext from "./useContext";
import Mainpage from "./Components/MainPage/mainpage";

function App() {
  const { selected, setSelected } = UseContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);



  return (
    
    <div>
      <Mainpage/>
    </div>
    
  )
}

export default App;
