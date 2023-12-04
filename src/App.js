import "./App.css";
import Home from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Routes, Switch } from "react-router-dom"; //For using Routes and Route

function App() {
  return (
    <>
      <Routes>
        {/* Route have to be wraped arount Routes */}
        <Route exact path="/" element={<Home></Home>}></Route>
        {/* "exact" to make perfectly with the given URL - tho it is not needed */}
        <Route path="/rooms/" element={<Rooms></Rooms>}></Route>
        <Route path="/rooms/:slug" element={<SingleRoom></SingleRoom>}></Route>
        {/* using route parameter. Here, :slug is a variable */}
        <Route path="*" element={<Error></Error>}></Route>
        {/* This will lead to error page, as it does not match with specified routes */}
        {/* <Route path="/:slug" element={<Error></Error>}></Route> ✅ */}
      </Routes>

      {/* <Home></Home>
        <Rooms></Rooms>
        <SingleRoom></SingleRoom>
        <Error></Error> */}
    </>
  );
}

export default App;
