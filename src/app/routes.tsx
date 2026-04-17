import { createBrowserRouter } from 'react-router';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { Members } from './pages/Members';
import { Projects } from './pages/Projects';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { MemberPortal } from './pages/MemberPortal';
import { AdminDashboard } from './pages/AdminDashboard';
import { RootLayout } from './layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'members', element: <Members /> },
      { path: 'projects', element: <Projects /> },
      { path: 'events', element: <Events /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'portal', element: <MemberPortal /> },
      { path: 'admin', element: <AdminDashboard /> },
    ],
  },
]);
