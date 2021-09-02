import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { dashboard } from './components/dashboard/dashboard';
import { GPATable } from './components/GPATable/GPATable';
import { InvoiceForm } from './components/invoiceForm/invoiceForm';
import { Login } from './components/login/login';
import { PrintBill } from './components/printBill/printBill';
import { ResultCard } from './components/resultCard/resultCard';
import { resultForm } from './components/resultForm/resultForm';
import { SheetTable } from './components/sheetTable/sheetTable';
import { SignTable } from './components/signTable/signTable';
import { Subjects } from './components/subjects/subjects';
import { ViewBill } from './components/viewBill/viewBill';
import { ViewResult } from './components/viewResult/viewResult';

export const AppRouting = () => {

    return (
        <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path='/dashboard' component={dashboard} ></Route>
            <Route exact path='/result' component={resultForm}></Route>
            <Route exact path='/invoice' component={InvoiceForm}></Route>
            <Route exact path="/print/:id" component={PrintBill}></Route>
            <Route exact path='/bill/:id' component={ViewBill}></Route>
            <Route exact path='/result/:id' component={ViewResult}></Route>
            <Route exact path='/printResult/:id' component={ResultCard}></Route>
            <Route exact path='/subjects' component={Subjects}></Route>
            <Route exact path='/table' component={SignTable}></Route>
            <Route exact path='/sheet' component={SheetTable}></Route>
            <Route exact path='/gpatable' component={GPATable}></Route>
        </Router>

    )
}


export default AppRouting;