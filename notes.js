// Notes Management
let notes = [
	{
		id: 1,
		category: "love",
		content: "I love your little snores when you sleep. It's the cutest thing ever 😍!",
		date: "2026-03-16",
	},
	{
		id: 2,
		category: "memory",
		content: "Remember our first date? The food was bad but we had so much fun just talking and laughing.",
		date: "2026-03-16",
	},
	{
		id: 3,
		category: "future",
		content: "We have so many plans for the future, and I can't wait to experience them all with you 💗!",
		date: "2026-03-16",
	},
	{
		id: 4,
		category: "memory",
		content: "I'll never forget the day I fell in love with you, you weren't wearing your best clothes but you looked so perfect to me. I remember the Ghost Fighter t-shirt, the jeans and nike shoes.",
		date: "2026-03-16",
	},
	{
		id: 5,
		category: "love",
		content: "Whenever you have dreams, good or bad, don't forget that I will always be here for you to listen to everything 🌟",
		date: "2026-03-17",
	},
	{
		id: 6,
		category: "future",
		content: "Whatever plans you will have in the future, I'll always be beside you cheering you on 🫶🏼",
		date: "2026-03-17",
	},
	{
		id: 7,
		category: "love",
		content: "I love you so so so muchhhh 💜💜",
		date: "2026-03-23",
	},
	{
		id: 8,
		category: "memory",
		content: "Remember our rides together? I always enjoyed those moments, just being with you and talking about anything and everything. I can't wait to have more of those with you 🛵.",
		date: "2026-03-23",
	},
	{
		id: 9,
		category: "gratitude",
		content: "Thank you for being the most amazing partner, for loving me unconditionally and for making every day special. I am so grateful to have you in my life 🙏🏼",
		date: "2026-03-23",
	},
	{
		id: 10,
		category: "gratitude",
		content: "Thank you for being so patient with me, I am not the easiest person to deal with but you always understand and support me. I am truly lucky to have you as my partner 🥰",
		date: "2026-03-23",
	},
	{
		id: 11,
		category: "gratitude",
		content: "Thank you for motivating me, trying to push me to become better. You never give up on me, I don't want to disappoint that effort, I shall be thinner before May 8",
		date: "2026-03-23",
	},
	{
		id: 12,
		category: "future",
		content: "My only wish is to be loved by you forever, I hope you never stop loving me",
		date: "2026-04-30",
	},
];

function renderNotes(filter = "all") {
	const grid = document.getElementById("notesGrid");
	grid.innerHTML = "";

	const filteredNotes =
		filter === "all" ? notes : notes.filter((n) => n.category === filter);

	filteredNotes.forEach((note) => {
		const card = document.createElement("div");
		card.className = "note-card";
		card.innerHTML = `
                    <span class="note-category">${note.category}</span>
                    <p class="note-content">${note.content}</p>
                    <p class="note-date">${note.date}</p>
                `;
		grid.appendChild(card);
	});
}

function filterNotes(category) {
	document
		.querySelectorAll(".category-filters .filter-btn")
		.forEach((btn) => {
			btn.classList.remove("active");
		});
	event.target.classList.add("active");

	renderNotes(category);
}

function openModal() {
	document.getElementById("noteModal").classList.add("active");
}

function closeModal() {
	document.getElementById("noteModal").classList.remove("active");
	document.getElementById("noteForm").reset();
}

function saveNote(e) {
	e.preventDefault();

	const category = document.getElementById("noteCategory").value;
	const content = document.getElementById("noteContent").value;
	const date = new Date().toISOString().split("T")[0];

	notes.unshift({ id: Date.now(), category, content, date });
	renderNotes("all");
	closeModal();

	// Reset filters
	document
		.querySelectorAll(".category-filters .filter-btn")
		.forEach((btn) => btn.classList.remove("active"));
	document
		.querySelector(".category-filters .filter-btn")
		.classList.add("active");
}

// Close modal on outside click
document.getElementById("noteModal")?.addEventListener("click", function (e) {
	if (e.target === this) closeModal();
});
