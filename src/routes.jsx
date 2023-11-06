import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import AppTest from "./pages/AppTest";
import AppTest2 from "./pages/AppTest2";
import AppTest3 from "./pages/AppTest3";




const routes = () => {
  return (
    // <Router basename={'/TimeAttendanceEmployee/'}> สำหรับบน server จริง
    <Router>
      <Routes>
        {/* FrontEnd */}
        <Route>
          <Route path="/" exact={true} element={<AppTest/>}></Route>
          <Route path="/AppTest2" exact={true} element={<AppTest2/>}></Route>
          <Route path="/AppTest3" exact={true} element={<AppTest3/>}></Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default routes