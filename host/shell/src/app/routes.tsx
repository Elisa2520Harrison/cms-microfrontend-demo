import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

const MembersApp = lazy(
  () => import('members_app/MembersApp')
);

const EventsApp = lazy(
  () => import('events_app/EventsApp')
);

const AdminApp = lazy(
  () => import('admin_app/AdminApp')
);


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/members',
    element: (
      <Suspense fallback={<p>Loading Members...</p>}>
        <MembersApp />
      </Suspense>
    ),
  },

  {
    path: '/events',
    element: (
      <Suspense fallback={<p>Loading Events...</p>}>
        <EventsApp />
      </Suspense>
    ),
  },

  {
    path: '/admin',
    element: (
      <Suspense fallback={<p>Loading Admin...</p>}>
        <AdminApp />
      </Suspense>
    ),
  },
]);