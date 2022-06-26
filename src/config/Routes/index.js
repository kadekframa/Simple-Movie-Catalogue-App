import React from "react";
import {BrowserRouter as Router, Routes as Swicth, Route,} from "react-router-dom";
import { MainApp } from '../../pages';

const Routes = () => {
  return (
    <Router>
        <Swicth>
            <Route path="*" element={<MainApp />} />
        </Swicth>
    </Router>
  )
}

export default Routes;
