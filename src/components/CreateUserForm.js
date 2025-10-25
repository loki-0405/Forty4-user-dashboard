import React, { useState } from 'react';
import { useUsers } from '../context/UserContext';

export default function CreateUserForm() {
  const { addUser } = useUsers();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    street: '', city: '', zipcode: '', lat: '', lng: ''
  });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert('Please provide at least name and email');
      return;
    }
    addUser(form);
    setForm({
      name: '-', email: '-', phone: '-', company: '-',
      street: '-', city: '-', zipcode: '-', lat: '-', lng: '-'
    });
    setOpen(false);
  }

  const inputStyle = { margin: '5px', padding: '8px', flex: 1, minWidth: '120px' };
  const formRowStyle = { display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' };
  const buttonStyle = { marginRight: '10px', padding: '8px 16px', cursor: 'pointer' };

  return (
    <div className="create-card" style={{ marginBottom: '20px' }}>
      <button
        className="btn"
        style={{ ...buttonStyle, marginBottom: '10px' }}
        onClick={() => setOpen(o => !o)}
      >
        {open ? 'Close' : 'Create New User'}
      </button>

      {open && (
        <form className="create-form" onSubmit={handleSubmit}>
          <div style={formRowStyle}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" style={inputStyle} />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" style={inputStyle} />
          </div>
          <div style={formRowStyle}>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" style={inputStyle} />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" style={inputStyle} />
          </div>

          <details className="address-details" style={{ marginBottom: '10px' }}>
            <summary style={{ cursor: 'pointer', marginBottom: '5px' }}>Address (optional)</summary>
            <div style={formRowStyle}>
              <input name="street" value={form.street} onChange={handleChange} placeholder="Street" style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <input name="city" value={form.city} onChange={handleChange} placeholder="City" style={inputStyle} />
              <input name="zipcode" value={form.zipcode} onChange={handleChange} placeholder="Pincode" style={inputStyle} />
            </div>
            <div style={formRowStyle}>
              <input name="lat" value={form.lat} onChange={handleChange} placeholder="Lat" style={inputStyle} />
              <input name="lng" value={form.lng} onChange={handleChange} placeholder="Lng" style={inputStyle} />
            </div>
          </details>

          <div style={{ marginTop: '10px' }}>
            <button type="submit" className="btn primary" style={buttonStyle}>Add User</button>
            <button type="button" className="btn" style={buttonStyle} onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}
