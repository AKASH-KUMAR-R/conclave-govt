import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { CommonLayout } from "./components/layout-components/CommonLayout";
import { NotificationPage } from "./components/NotificationPage";
import { Profile } from "./pages/Profile";


function App () {

    return (
      <> 
        
        <Router>
        <CommonLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/notifications" element={<NotificationPage  />}/>
            <Route path="/profile" element={<Profile />} />
            {/* <Route  path="industry/dashboard" element={<IndustryDashboard />}/> */}
          </Routes>
          </CommonLayout>
        </Router>
        
      </>
    );
}

export default App;