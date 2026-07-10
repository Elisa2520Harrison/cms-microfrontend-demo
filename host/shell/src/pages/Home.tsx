import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Church Management System</h1>

      <nav>
        <Link to="/members">
          <button>Members</button>
        </Link>

        <Link to="/events">
          <button>Events</button>
        </Link>

        <Link to="/admin">
          <button>Admin</button>
        </Link>
      </nav>
    </div>
  );
}

export default Home;