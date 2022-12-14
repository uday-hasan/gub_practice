import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllSubmission from './pages/AllSubmission/AllSubmission';
import Error from './pages/Error/Error';
import Form from './pages/form/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/allsubmission' element={<AllSubmission />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
