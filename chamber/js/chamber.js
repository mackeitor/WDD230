const dateField = document.getElementById('date');
const now = new Date();
const formattedNow = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
dateField.innerHTML = formattedNow;


document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
    document.getElementById("headertop").classList.toggle('openheader');

}
const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;