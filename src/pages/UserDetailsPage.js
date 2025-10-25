import React from "react";
import { useParams, Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import "./UserDetailsPage.css";

export default function UserDetailsPage() {
  const { id } = useParams();
  const { users } = useUsers();
  const user = users.find((u) => String(u.id) === String(id));

  if (!user) {
    return (
      <div className="details-container">
        <div className="not-found">
          <p>❌ User not found!</p>
          <Link to="/" className="back-btn">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const { name, username, email, phone, website, company, address } = user;
  const geo = address?.geo || { lat: "0", lng: "0" };

  return (
    <div className="details-container">
      <div className="details-card animate-fade-in">
        <Link to="/" className="back-btn">
          ← Back
        </Link>

        <h2 className="user-name">{name}</h2>
        <p className="username">@{username}</p>

        <div className="details-grid">
          <div>
            <strong>📧 Email:</strong> {email}
          </div>
          <div>
            <strong>📞 Phone:</strong> {phone}
          </div>
          <div className="info-box company-info">
            <strong>🏢 Company:</strong>
            <span>
              <strong>{company?.name}</strong> 
            </span>
          </div>

          <div className="info-box address-info">
            <strong>🏠 Address:</strong>
            <span>
              {address?.street}, {address?.suite}, {address?.city}, {address?.zipcode}
            </span>
          </div>

          <div>
            <strong>🗺️ Geo:</strong> lat {geo.lat}, lng {geo.lng}
          </div>

        </div>

        <div className="map-section">
          <h4>🌍 Geo Location Preview</h4>
          <div className="map-box">
            <div className="dot" />
            <p>
              Latitude: <span>{geo.lat}</span> | Longitude: <span>{geo.lng}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
