import { Route, Routes } from "react-router-dom";
import Header from "../clemar/Header";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
};
export default Router;
