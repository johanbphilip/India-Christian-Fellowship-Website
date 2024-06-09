// ICF Map feature using Google Maps Javascript API
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
window.addEventListener("scroll",() => {
  const header = document.getElementById("header");
  const scrollPosition = window.scrollY;
  const triggerHeight = 650;
  if (scrollPosition >= triggerHeight) {
    header.style.backgroundColor = "#1e2429";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

//Form Submission
document.getElementById('user-form').addEventListener('submit', (event)=> {
  //prevents user from submitting without input
  event.preventDefault();
  //getting values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const message = document.getElementById('message').value;
  // creating a form submission object
  const formContent = {
  name: name, 
  email: email,
  phoneNumber: phoneNumber,
  message: message
  };
  //turning form object into a JSON object
  const formJson = JSON.stringify(formContent);
  // need to figure out how to submit this to a useful medium
  console.log(formJson);
});


//Auto-update year in copyright
document.getElementById('year').innerHTML = new Date().getFullYear();


//Scroll when down arrow is clicked
document.getElementById('down-arrow').addEventListener('click', () => {
  const scrollPosition = window.innerHeight*0.9 ;
  window.scrollTo({top: scrollPosition, behavior: 'smooth'});
} );