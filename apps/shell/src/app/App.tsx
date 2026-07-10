import { lazy, Suspense } from 'react';

const MembersApp = lazy(
  () => import('members_app/MembersApp')
);

const EventsApp = lazy(
  () => import('events_app/EventsApp')
);

const AdminApp = lazy(
  () => import('admin_app/AdminApp')
);


function App() {

  return (
    <div>
      <h1>CMS Shell</h1>

      <Suspense fallback={<p>Loading...</p>}>

        <MembersApp />

        <EventsApp />

        <AdminApp />

      </Suspense>

    </div>
  );
}

export default App;