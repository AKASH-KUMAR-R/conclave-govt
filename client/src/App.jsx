import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { CommonLayout } from "./components/layout-components/CommonLayout";
import { NotificationPage } from "./components/NotificationPage";


function App () {

    return (
      <> 
        
        <Router>
        <CommonLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/notifications" element={<NotificationPage  />}/>
          </Routes>
          </CommonLayout>
        </Router>
        
      </>
    );
}

export default App;