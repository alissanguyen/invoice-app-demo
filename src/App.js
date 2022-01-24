import { Route, Routes, useLocation } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Invoices from "./components/Invoices/Invoices";
import FormController from "./components/FormController/FormController";
import InvoiceView from "./components/InvoiceView/InvoiceView";
import Modal from "./components/Modal/Modal";
import RouteError from "./components/RouteError/RouteError";
import { useGlobalContext } from "./context";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import React from "react";

const App = () => {
  const { state } = useGlobalContext();
  const isModalOpen = state.isModalOpen.status;
  const isFormOpen = state.isFormOpen;
  const location = useLocation();

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <AnimatePresence>
          {isFormOpen && <FormController />}
          {isModalOpen && <Modal />}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Invoices />}></Route>
            <Route path="/invoice/:id" element={<InvoiceView />} />

            <Route path="*" element={<RouteError />} />
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </div>
  );
};

export default App;
