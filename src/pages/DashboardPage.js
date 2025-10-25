import React, { useState } from 'react';
import { useUsers } from '../context/UserContext';
import SearchBar from '../components/SearchBar';
import UserList from '../components/UserList';
import CreateUserForm from '../components/CreateUserForm';

export default function DashboardPage() {
  const { users, loading, error } = useUsers();
  const [query, setQuery] = useState('');

  const filtered = users.filter(u =>
    u.name?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <h2>Users</h2>
        <SearchBar value={query} onChange={setQuery} placeholder="Search by name..." />
         <CreateUserForm />
      </div>

      <div className="dashboard-content">
        <section className="left">
          <div className="list-container">
            {loading && <p>Loading users...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && <UserList users={filtered} />}
          </div>
        </section>
      </div>
    </div>
  );
}
