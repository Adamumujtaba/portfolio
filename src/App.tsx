import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './app-layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} /> */}
        </Route>

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
