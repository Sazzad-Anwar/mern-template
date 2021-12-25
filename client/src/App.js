import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import Loader from './Components/Loader';
const IndexPage = lazy(() => import('./Pages/Index'));
const NotFound = lazy(() => import('./Components/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
