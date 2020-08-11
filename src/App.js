import React, { useState } from "react";
import "./App.css";
import { ChangeTheme } from "./Components/ChangeTheme";
import { Container } from "./Components/Container";
import NameContext from "./Context/NameContext";
import { AdvancedContext } from "./Context/AdvancedContext";
import Department from "./RenderProps/Department";
import Project from "./RenderProps/Project";
import DisplayList from "./RenderProps/DisplayList";
import EmployeeReports from "./RenderProps2/EmployeeReports";
import DisplayEmployees from "./RenderProps2/DisplayEmployees";
import Counters from "./HOC/Counters";
import Flexbox from "./CSS/Flexbox";
import Grid from "./CSS/Grid";
import DataFetching from "./Hooks/DataFetching";
import { OverlayUser } from "./Overlay/OverlayUser";
import Modal from "./ModalHook/Modal";
import useModal from "./ModalHook/useModal";

const App = () => {
  const [name, setName] = useState("Thierry");
  const [obj, setObj] = useState({ color: "red" });
  const { isShowing, toggle } = useModal();

  return (
    <div className="App">
      <h2>App</h2>

      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal isShowing={isShowing} hide={toggle} />

      <OverlayUser />

      <DataFetching />

      <Grid />
      <br />
      <Flexbox />

      {/* NORMAL PROPS */}
      <ChangeTheme name={name} />

      {/* CONTEXT API FOR ALL CHILDREN OF CONTAINER */}
      <AdvancedContext.Provider value={{ ...[name, setName], obj }}>
        <Container />
      </AdvancedContext.Provider>

      <hr />
      <h2>Render Props</h2>
      <>
        <Department someFunc={(data) => <DisplayList deps={data} />} />
        <Project
          someFunc={(data) => <DisplayList deps={["P-1", "P-2", "P-3"]} />}
        />
      </>
      <h2>Render Props 2</h2>
      <EmployeeReports
        content={(employees) => <DisplayEmployees employees={employees} />}
      />

      <h2>HOC COUNTERS</h2>
      <Counters />
    </div>
  );
};

export default App;
