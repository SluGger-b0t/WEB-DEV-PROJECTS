import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import "./App.css";
import { DataProvider } from "./context/DataProvider";
import Login from "./components/Login";
import Home from "./home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import CreatePost from "./components/Create/CreatePost";
import Postdetail from "./components/Postdetail";
const PrivateRoute = ({isAuthenticated, ...props}) => {
  return isAuthenticated ? (
    <>
      <Outlet></Outlet>
    </>
  ) : (
    <Navigate replace to="/login"></Navigate>
  );
};
function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <Router>
      <div>
        <DataProvider>
          <Routes>
            <Route
              path="/login"
              element={<Login setAuthenticated={setAuthenticated}></Login>}
            ></Route>

            <Route
              path="/"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}></PrivateRoute>
              }
            >
              <Route
                path="/"
                element={
                  <ChakraProvider>
                    <Home></Home>
                  </ChakraProvider>
                }
              ></Route>
            </Route>
            <Route
              path="/create"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}></PrivateRoute>
              }
            >
              <Route
                path="/create"
                element={
                  <ChakraProvider>
                    <CreatePost></CreatePost>
                  </ChakraProvider>
                }
              ></Route>
            </Route>
            <Route
              path="/detail/:id"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}></PrivateRoute>
              }
            >
              <Route
                path="/detail/:id"
                element={
                  <ChakraProvider>
                   <Postdetail></Postdetail>
                  </ChakraProvider>
                }
              ></Route>
            </Route>
          </Routes>
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
