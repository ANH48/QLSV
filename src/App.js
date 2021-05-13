// import logo from './logo.svg';
import './styles';
import Baitap1 from './Baitap1';
// import BaitapBugger from './pages/BaitapBugger';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {lazy,Suspense} from 'react'

// add layout 
import AdminLayout from "./layouts/AdminLayout";

import Home from './pages/QLSV/Home';
import New from './pages/QLSV/News';

// Sử dụng lazy load : không import trực tiếp 
// const Home = lazy(() => import("./pages/QLSV/Home"));
const SV_Detail = lazy(() => import("./pages/QLSV/SV_Detail"));
const ThemSV = lazy(() => import("./pages/QLSV/ThemSV"));


function App() {
  return (
  //  <Baitap1 />
  // <BaitapBugger />
  <Suspense fallback={<div>Loading...</div>}>
     <BrowserRouter>
     <Route path="/admin">
          <AdminLayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/home"/>
                  <Route path="/admin/home">
                      <Home />
                  </Route>
                  <Route path="/admin/sinhvien">
                      <SV_Detail />
                  </Route>
                  <Route path="/admin/themsinhvien">
                      <ThemSV />
                  </Route>
                  <Route path="/admin/tintuc">
                      <New />
                  </Route>
              </Switch>
          </AdminLayout>
        </Route>
     </BrowserRouter>
  </Suspense>
  );
}

export default App;
