import "./App.css";
import Lists from "./components/Lists/Lists";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Lists />
        <Form />
      </div>
    </>
  );
}

export default App;
