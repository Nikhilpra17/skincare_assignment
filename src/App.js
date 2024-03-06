import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
import Templates from "./Template";
import CreateInvoice from "./CreateInvoice";
import MyComponent from "./MyComponent";
import EditInvoice from "./EditInvoice";
import Payment from "./Payment";
import PaymentForm from "./PaymentForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="homePage" />} />
          <Route path="homepage" element={<CreateInvoice />} />
          <Route path="mycomponent" element={<MyComponent />} />
          <Route path="editinvoice" element={<EditInvoice />} />
          <Route path="payment" element={<Payment />} />
          <Route path="paymentform" element={<PaymentForm />} />
          <Route path="templates" element={<Templates />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
