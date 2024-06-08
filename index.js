// ICF Map feature
let map;

async function initMap() {
  // The location of ICF
  const icf = {lat: 43.70929638606898, lng: -79.59080664944702};
  const properties = {zoom: 14, center: icf, mapId: "74c1b1b5509a4673", gestureHandling: 'greedy', disableDefaultUI: true, draggableCursor: 'pointer', fullscreenControl: true};
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
  // The map, centered at ICF
  map = new Map(document.getElementById("map"), properties);

  // The marker, positioned at ICF
  const marker = new AdvancedMarkerElement({
    map: map,
    position: icf,
    title: "India Christian Fellowship",
  });
}
initMap();

// Appear on scroll feature
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Header Color
window.addEventListener("scroll", function () {
  headerColorChanger();
});
function headerColorChanger () {
  const header = document.getElementById("header");
  const scrollPosition = window.scrollY;
  const triggerHeight = 650;
  if (scrollPosition > triggerHeight) {
    header.style.backgroundColor = "#1e2429";
  } else {
    header.style.backgroundColor = "transparent"
  }
}