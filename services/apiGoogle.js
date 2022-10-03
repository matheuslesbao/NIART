// Ativar faturamento na conta para api funciona corretamente

const apiKey = "AIzaSyC6iJh8tMO5kCKeRtXYrfN_GQ5Qg_WV-3c";

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&v=weekly`;
script.async = true;

function initMap() {
  const houseNath = { lat: -22.663622518113577, lng: -43.00342420369749 };

  // eslint-disable-next-line no-undef
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: houseNath,
  });
  // The marker, positioned at house of Nathane
  // eslint-disable-next-line no-undef, no-unused-vars
  const marker = new google.maps.Marker({
    position: houseNath,
    map,
  });
}
document.head.appendChild(script);

window.initMap = initMap;
