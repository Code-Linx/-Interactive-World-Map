const map = L.map("worldMap").setView([0, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Example marker for Paris, France
L.marker([48.8566, 2.3522]).addTo(map).bindPopup("Paris, France").openPopup();
