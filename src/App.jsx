import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import PointPage from './pages/PointPage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/points/:id', element: <PointPage /> },
  {
    path: '*',
    element: (
      <main className="not-found" dir="rtl">
        <h1>الصفحة غير موجودة</h1>
        <a href="/">العودة إلى الصفحة الرئيسية</a>
      </main>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
