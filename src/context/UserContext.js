import React, { createContext, useContext, useEffect, useState } from 'react';
import { USERS_API } from '../api';

const UserContext = createContext();

export function useUsers() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchUsers() {
      setLoading(true);
      setError(null);
      try {
        const savedUsers = localStorage.getItem('users');
        if (savedUsers) {
          setUsers(JSON.parse(savedUsers));
        } else {
          const res = await fetch(USERS_API);
          if (!res.ok) throw new Error('Failed to fetch users');
          const data = await res.json();
          if (!cancelled) {
            setUsers(data);
            localStorage.setItem('users', JSON.stringify(data));
          }
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchUsers();
    return () => { cancelled = true; };
  }, []);

  function addUser(newUser) {
    const id = String(Date.now());
    const userToAdd = {
      id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      company: { name: newUser.company || '' },
      address: {
        street: newUser.street || '',
        suite: newUser.suite || '',
        city: newUser.city || '',
        zipcode: newUser.zipcode || '',
        geo: {
          lat: newUser.lat || '0',
          lng: newUser.lng || '0'
        }
      }
    };

    setUsers(prev => {
      const updated = [userToAdd, ...prev];
      localStorage.setItem('users', JSON.stringify(updated)); // persist
      return updated;
    });
  }

  const value = { users, loading, error, addUser, setUsers };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
