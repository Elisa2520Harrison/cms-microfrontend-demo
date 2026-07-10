import { lazy, Suspense } from 'react';

const MembersApp = lazy(
  () => import('members_app/MembersApp')
);

function App() {
  return (
    <div>
      <h1>CMS Shell</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <MembersApp />
      </Suspense>
    </div>
  );
}

export default App;