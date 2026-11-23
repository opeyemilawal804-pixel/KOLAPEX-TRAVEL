
import { useState } from "react";
import "./App.css";

const destinations = [
  {
    name: "Paris",
    country: "France",
    price: "From $450",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    price: "From $380",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    name: "London",
    country: "United Kingdom",
    price: "From $520",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
  },
  {
    name: "New York",
    country: "United States",
    price: "From $650",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
  },
  {
    name: "Tokyo",
    country: "Japan",
    price: "From $700",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
  },
];

const tabs = [
  { name: "Flights", icon: "✈" },
  { name: "Hotels", icon: "▣" },
  { name: "Car Rentals", icon: "🚘" },
  { name: "Packages", icon: "♧" },
];

function App() {
  const [activeTab, setActiveTab] = useState("Flights");
  const [from, setFrom] = useState("Lagos");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1 Traveller");
  const [message, setMessage] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (!to.trim()) {
      setMessage("Please enter your destination.");
      return;
    }

    setMessage(
      `${activeTab} search: ${from} to ${to}. Connect a booking provider to see live offers.`
    );
  }

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">✈</span>
          <span>
            KOLAPEX
            <strong>TRAVEL</strong>
          </span>
        </a>

        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#booking">Flights</a>
          <a href="#booking">Hotels</a>
          <a href="#destinations">Destinations</a>
          <a href="#booking">Packages</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="eyebrow">
              ✦ EXPLORE · BOOK · TRAVEL
            </span>

            <h1>
              Discover the World
              <br />
              with <span>KOLAPEX TRAVEL</span>
            </h1>

            <p>
              Find amazing flights, hotels and holiday packages
              <br className="desktop-break" />
              for your next unforgettable journey.
            </p>

            <div className="hero-benefits">
              <span>🛡 Secure Booking</span>
              <span>🎧 24/7 Support</span>
              <span>✦ Great Travel Deals</span>
            </div>
          </div>
        </section>

        <section className="booking-section" id="booking">
          <div className="booking-card">
            <div className="booking-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={
                    activeTab === tab.name ? "tab active-tab" : "tab"
                  }
                  onClick={() => {
                    setActiveTab(tab.name);
                    setMessage("");
                  }}
                >
                  <span>{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} className="booking-form">
              <label>
                <span>From</span>
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Departure city"
                  required
                />
              </label>

              <label>
                <span>To</span>
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Destination city"
                  required
                />
              </label>

              <label>
                <span>Departure Date</span>
                <input
                  type="date"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </label>

              <label>
                <span>Return Date</span>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </label>

              <label>
                <span>Travellers</span>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  <option>1 Traveller</option>
                  <option>2 Travellers</option>
                  <option>3 Travellers</option>
                  <option>4 Travellers</option>
                  <option>5 Travellers</option>
                  <option>6 Travellers</option>
                </select>
              </label>

              <button className="search-btn" type="submit">
                🔍 Search {activeTab}
              </button>
            </form>

            {message && <p className="search-message">{message}</p>}
          </div>
        </section>

        <section className="destinations-section" id="destinations">
          <div className="section-heading">
            <div>
              <span className="section-tag">YOUR NEXT ADVENTURE</span>
              <h2>Popular Destinations</h2>
              <p>Explore incredible places around the world.</p>
            </div>

            <a href="#destinations" className="view-all">
              Explore destinations →
            </a>
          </div>

          <div className="destination-grid">
            {destinations.map((place) => (
              <article className="destination-card" key={place.name}>
                <img src={place.image} alt={place.name} />

                <div className="destination-info">
                  <div>
                    <h3>{place.name}</h3>
                    <p>{place.country}</p>
                  </div>

                  <span>{place.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="why-section" id="about">
          <span className="section-tag">WHY KOLAPEX TRAVEL?</span>
          <h2>Your journey starts here.</h2>

          <div className="features-grid">
            <div className="feature">
              <span>🌍</span>
              <h3>Worldwide Travel</h3>
              <p>Discover destinations across the globe.</p>
            </div>

            <div className="feature">
              <span>🔒</span>
              <h3>Secure Experience</h3>
              <p>Designed with safe and reliable booking in mind.</p>
            </div>

            <div className="feature">
              <span>💎</span>
              <h3>Great Experiences</h3>
              <p>Explore memorable trips and travel ideas.</p>
            </div>

            <div className="feature">
              <span>🎧</span>
              <h3>Travel Support</h3>
              <p>Get help with your travel plans.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          <span className="logo-icon">✈</span>
          <span>
            KOLAPEX
            <strong>TRAVEL</strong>
          </span>
        </a>

        <p>Discover more. Travel further. Experience the world.</p>
        <span>© 2026 KOLAPEX TRAVEL. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
