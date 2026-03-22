// Gallery Library - Matches structure of musicLibrary for consistency
const galleryLibrary = [
	{
		id: 1,
		caption: "Where you said yes",
		image: "assets/images/ilcorso.jpg", // Leave empty to use gradient placeholder
		icon: "💜",
		date: "2025-05-09",
	},
	{
		id: 2,
		caption: "Where we enjoyed a cafe of cats",
		image: "assets/images/miaucafe.jpg",
		icon: "🐈",
		date: "2025-05-09",
	},
	{
		id: 3,
		caption: "I wanted you to teach me about history 😟",
		image: "assets/images/museo.jpg",
		icon: "😂",
		date: "2025-05-09",
	},
	{
		id: 4,
		caption: "Our first getaway together",
		image: "assets/images/sotogrande.jpg",
		icon: "🏖️",
		date: "2025-06-14",
	},
	{
		id: 5,
		caption: "Posing posing sa CR",
		image: "assets/images/sotogrande2.jpg",
		icon: "🚽",
		date: "2025-06-14",
	},
	{
		id: 6,
		caption: "OTW Camotes!!",
		image: "assets/images/camotes.jpg",
		icon: "🏝️",
		date: "2025-06-20",
	},
	{
		id: 7,
		caption: "Camotes Trip with the best travel buddy",
		image: "assets/images/camotes2.jpg",
		icon: "🏝️",
		date: "2025-06-21",
	},
	{
		id: 8,
		caption: "Posing sa bato",
		image: "assets/images/camotes3.jpg",
		icon: "🏝️",
		date: "2025-06-21",
	},
	{
		id: 9,
		caption: "Tulang Diot sa Camotes",
		image: "assets/images/camotes4.jpg",
		icon: "🏝️",
		date: "2025-06-21",
	},
	{
		id: 10,
		caption: "Cave Picture",
		image: "assets/images/camotes5.jpg",
		icon: "🏝️",
		date: "2025-06-20",
	},
	{
		id: 11,
		caption: "Igat 80%, Spanish 20%, Learnings forgetten",
		image: "assets/images/spanish.jpg",
		icon: "🐂",
		date: "2025-06-21", // Forgot the date
	},
	{
		id: 12,
		caption: "Ga himo ug cake together kay dug.ol ra mn ug bday",
		image: "assets/images/bday2.jpg",
		icon: "🎂",
		date: "2025-06-26",
	},
	{
		id: 13,
		caption: "Focus kaayo ka babe",
		image: "assets/images/bday7.jpg",
		icon: "🎂",
		date: "2025-06-26",
	},
	{
		id: 14,
		caption: "The finished cake",
		image: "assets/images/bday4.jpg",
		icon: "🎂",
		date: "2025-06-26",
	},
	{
		id: 14,
		caption: "The finished cake",
		image: "assets/images/bday4.jpg",
		icon: "🎂",
		date: "2025-06-26",
	},
	{
		id: 14,
		caption: "Pa ingon candid daw",
		image: "assets/images/sotogrande5.jpg",
		icon: "🏖️",
		date: "2025-06-14",
	},
	{
		id: 15,
		caption: "Wa ka pildi imong ka hot sa init sa adlaw",
		image: "assets/images/sotogrande6.jpg",
		icon: "🏖️",
		date: "2025-06-14",
	},
	{
		id: 16,
		caption: "Ni kaon ug utok kay nahutdan ug utok",
		image: "assets/images/colonade.jpg",
		icon: "🧠",
		date: "2025-06-14", // forgot the date
	},
	{
		id: 17,
		caption: "Nag final destination unya g urom after huhu",
		image: "assets/images/finaldestination.jpg",
		icon: "🧠",
		date: "2025-06-14", // forgot the date
	},
	{
		id: 18,
		caption: "Supermaaannn 🦸🏻",
		image: "assets/images/superman.jpg",
		icon: "🦸🏻",
		date: "2025-06-14", // forgot the date
	},
	{
		id: 19,
		caption: "Versace Date",
		image: "assets/images/versace6.jpg",
		icon: "☕",
		date: "2025-11-14", // forgot the date
	},
	{
		id: 20,
		caption: "Sweet kaayo ta babeee, may gani way hulmigas",
		image: "assets/images/versace7.jpg",
		icon: "🐜",
		date: "2025-11-14", // forgot the date
	},
	{
		id: 21,
		caption: "Gamay nalang mu duol nang hulmigass",
		image: "assets/images/versace8.jpg",
		icon: "🐜",
		date: "2025-11-14", // forgot the date
	},
	{
		id: 22,
		caption: "Manaka na jd",
		image: "assets/images/versace7.jpg",
		icon: "🐜",
		date: "2025-11-14", // forgot the date
	},
	{
		id: 22,
		caption: "Hairflip candidd",
		image: "assets/images/versace7.jpg",
		icon: "☕",
		date: "2025-11-14", // forgot the date
	},
	{
		id: 22,
		caption: "Japan neon vibes",
		image: "assets/images/versace5.jpg",
		icon: "☕",
		date: "2025-11-14", // forgot the date
	},
	{
		id: 23,
		caption: "Nag unsa tas hayat babe?",
		image: "assets/images/hayat.jpg",
		icon: "🏨",
		date: "2025-11-21",
	},
	{
		id: 24,
		caption: "Gwapa kayka sa imong hairdo babee",
		image: "assets/images/hairdo.jpg",
		icon: "👩🏼‍🦰",
		date: "2025-11-21", // forgot the date
	},
	{
		id: 25,
		caption: "Another oneee 😍😍",
		image: "assets/images/hairdo2.jpg",
		icon: "👩🏼‍🦰",
		date: "2025-11-21", // forgot the date
	},
	{
		id: 26,
		caption: "Wala na lanay nako 🫠",
		image: "assets/images/hairdo3.jpg",
		icon: "👩🏼‍🦰",
		date: "2025-11-21", // forgot the date
	},
	{
		id: 27,
		caption: "Happy Valentines babee, wa jd ka nag expect noh? 💐",
		image: "assets/images/boquet.jpg",
		icon: "💐",
		date: "2026-02-07",
	},
	{
		id: 28,
		caption: "Pang my day ra ni daw",
		image: "assets/images/boquet2.jpg",
		icon: "💐",
		date: "2026-02-14",
	},
	{
		id: 29,
		caption: "Gi-uwanan sa Simala",
		image: "assets/images/aloguinsan.jpg",
		icon: "🛐",
		date: "2026-02-14", // forgot the date
	},
	{
		id: 30,
		caption: "So happy to be able to visit your hometown with you babe 🥰",
		image: "assets/images/aloguinsan4.jpg",
		icon: "🏖️",
		date: "2026-02-14", // forgot the date
	},
	{
		id: 31,
		caption: "OTW TO BANTAYANNN",
		image: "assets/images/bantayan.jpg",
		icon: "🏝️",
		date: "2026-02-13", // forgot the date
	},
	{
		id: 32,
		caption: "Second getaway together 🏝️",
		image: "assets/images/bantayan7.jpg",
		icon: "🏝️",
		date: "2026-02-13", // forgot the date
	},
	{
		id: 33,
		caption: "Gwapa kayka diri babe I swearrr, nice kaayo pagkapicture nako hehe",
		image: "assets/images/bantayan3.jpg",
		icon: "🏝️",
		date: "2026-02-13", // forgot the date
	},
];

// Render Gallery Function
function renderGallery() {
	const grid = document.getElementById("galleryGrid");
	if (!grid) return; // Safety check: ensure element exists

	grid.innerHTML = ""; // Clear existing content

	galleryLibrary.forEach((item) => {
		const card = document.createElement("div");
		card.className = "gallery-item";

		// Create Placeholder/Content Container
		const placeholder = document.createElement("div");
		placeholder.className = "gallery-placeholder";

		// Handle Image vs. Placeholder Logic
		if (item.image) {
			// If image URL exists, create img tag
			const img = document.createElement("img");
			img.src = item.image;
			img.alt = item.caption;
			img.style.width = "100%";
			img.style.height = "100%";
			img.style.objectFit = "cover";
			placeholder.appendChild(img);
		} else {
			// Fallback to existing emoji/gradient style
			const icon = document.createElement("span");
			icon.style.fontSize = "2.5rem";
			icon.textContent = item.icon;
			placeholder.appendChild(icon);
		}

		// Create Caption (Using textContent for XSS safety)
		const caption = document.createElement("div");
		caption.className = "gallery-caption";
		caption.textContent = item.caption; // Safe insertion

		// Assemble
		card.appendChild(placeholder);
		card.appendChild(caption);
		grid.appendChild(card);
	});
}
