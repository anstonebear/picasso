import { Route, Routes } from "react-router-dom";

import DescrPage from "../../page/DescrPage";
import MainPage from "../../page/MainPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/descr" element={<DescrPage />} />
      </Routes>
    </>
  );
};
export default Routing;
