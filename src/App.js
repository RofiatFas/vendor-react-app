import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Homepage/Login';
import Homepage from './components/pages/Homepage/Homepage';
import Reset from './components/pages/Homepage/Reset';
import Request from './components/pages/Request/Request';
import RequestTwo from './components/pages/Request/RequestTwo';
import SubmitRequestTwo from './components/pages/Request/SubmitRequestTwo';
import Purchase from './components/pages/Purchase/Purchase';
import PurchaseTwo from './components/pages/Purchase/PurchaseTwo';
import SubmitPurchaseTwo from './components/pages/Purchase/SubmitPurchaseTwo';
import CompanyProfile from './components/pages/Profile/CompanyProfile';
import Profile from './components/pages/Profile/Profile';
import AddNewUser from './components/pages/Profile/AddNewUser';
import ChangePassword from './components/pages/ComplChnge/ChangePassword';
import Issue from './components/pages/ComplChnge/Issue';
import Report from './components/pages/ComplChnge/Report';
import Notification from './components/pages/ComplChnge/Notification';


function App() {
  return (

<Router>
<Routes>
<Route  />
    <Route  path='/' element={<Login  />} />
    <Route  path='/login' element={<Login  />} />
    <Route  path='/reset' element={<Reset  />} />
    <Route path="/homepage" element={<Homepage  />} />
    <Route path="/request" element={<Request />} />
    <Route path="/requesttwo" element={<RequestTwo />} />
    <Route path="/submitrequesttwo" element={<SubmitRequestTwo />} />
    <Route path="/purchase" element={<Purchase/>} />
    <Route path="/purchasetwo" element={<PurchaseTwo />} />
    <Route path="/submitpurchasetwo" element={<SubmitPurchaseTwo />} />
    <Route path="/companyprofile" element={<CompanyProfile />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/addnewuser" element={<AddNewUser />} />
    <Route path="/changepassword" element={<ChangePassword />} />
    <Route path="/issue" element={<Issue />} />
    <Route path="/report" element={<Report />} />
    <Route path="/notification" element={<Notification />} />




    
</Routes>
</Router>
  );
}

export default App;