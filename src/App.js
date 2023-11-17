import './App.css';
import {Routes, Route } from 'react-router-dom';
import ProjectOnePage from "./component/routes/ProjectOnePage";
import Project2Page from "./component/routes/Project2Page";
// import Project3Page from "./component/routes/Project3Page";
import Project4Page from "./component/routes/Project4Page";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<ProjectOnePage/>} />
        <Route path="/project2" element={<Project2Page/>} />
        {/* <Route path="/project3" element={<Project3Page/>} /> */}
        <Route path="/project4" element={<Project4Page/>} />
    </Routes>
    </>
  );
}

export default App;
