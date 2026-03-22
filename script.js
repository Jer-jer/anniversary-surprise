// Secret Code Configuration
const SECRET_CODE = "kayden";

const ANNIVERSARY_DATE = new Date(2026, 4, 9); // May 9, 2026

// Music Library - Replace with your actual song URLs
const musicLibrary = [
	{
		id: 1,
		title: "Tingin",
		artist: "Cup of Joe",
		url: "assets/music/tingin.mp3",
		note: "This song kept playing in my head the whole time that day",
		cover: "🎵",
	},
	{
		id: 2,
		title: "Multo",
		artist: "Cup of Joe",
		url: "assets/music/multo.mp3", // Replace with actual URL
		note: "Everytime I listen to this, I remember you because you really love the song",
		cover: "💿",
	},
	// {
	//     id: 3,
	//     title: "Thinking Out Loud",
	//     artist: "Ed Sheeran",
	//     url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Replace with actual URL
	//     note: "I want to dance with you like this forever",
	//     cover: "🎶"
	// },
	// {
	//     id: 4,
	//     title: "All of Me",
	//     artist: "John Legend",
	//     url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Replace with actual URL
	//     note: "You have all of me, completely",
	//     cover: "🎹"
	// }
];

// Success/Anniversary Song - Replace with your celebration song
const successSongUrl = "assets/music/magellan.mp3";

// State Management
let currentSongIndex = -1;
let isPlaying = false;
let audioContext = null;
let noClickCount = 0;
const maxClicksBeforeMove = 2;
let audioEnabled = false;

// Check Secret Code
function checkCode() {
	const input = document.getElementById("secretCode").value;
	const errorMsg = document.getElementById("errorMsg");

	if (input === SECRET_CODE) {
		document.getElementById("entry-screen").classList.add("hidden");
		document.getElementById("main-app").classList.add("visible");
		startCountdown();
		createFloatingHearts();

		// Show audio permission overlay after a short delay
		setTimeout(() => {
			document
				.getElementById("audioPermissionOverlay")
				.classList.add("active");
		}, 1000);
	} else {
		errorMsg.classList.add("show");
		setTimeout(() => errorMsg.classList.remove("show"), 3000);
	}
}

// Allow Enter key to submit
document
	.getElementById("secretCode")
	?.addEventListener("keypress", function (e) {
		if (e.key === "Enter") checkCode();
	});

// Enable Audio (called after user interaction)
function enableAudio() {
	audioEnabled = true;
	document
		.getElementById("audioPermissionOverlay")
		.classList.remove("active");

	// Initialize audio context for iOS/Android
	const bgMusic = document.getElementById("bgMusic");
	const successMusic = document.getElementById("successMusic");

	// Unlock audio on mobile
	bgMusic.volume = 0.5;
	successMusic.volume = 0.5;

	// Create audio context if needed (for Web Audio API features)
	if (!audioContext) {
		audioContext = new (window.AudioContext ||
			window.webkitAudioContext)();
	}

	if (audioContext.state === "suspended") {
		audioContext.resume();
	}

	// Enable music controls
	updateMusicControls();
}

function dismissAudioPermission() {
	document
		.getElementById("audioPermissionOverlay")
		.classList.remove("active");
}

// Navigation
function showSection(sectionId) {
	// Check if trying to access love letter before anniversary
	if (sectionId === "letter") {
		const now = new Date();
		if (now < ANNIVERSARY_DATE) {
			// Show locked modal with countdown
			updateLetterCountdown();
			document
				.getElementById("lockedLetterModal")
				.classList.add("active");

			// Close mobile menu if open
			document.getElementById("navMenu").classList.remove("active");
			return; // Don't navigate
		}
	}

	// Hide all sections
	document.querySelectorAll(".section").forEach((section) => {
		section.classList.remove("active");
	});

	// Show selected section
	document.getElementById(sectionId).classList.add("active");

	// Update nav links
	document.querySelectorAll(".nav-link").forEach((link) => {
		link.classList.remove("active");
	});

	// Set active class on clicked button
	const clickedBtn = event.target;
	clickedBtn.classList.add("active");

	// Close mobile menu
	document.getElementById("navMenu").classList.remove("active");

	// Stop success music if leaving home section
	if (sectionId !== "home") {
		const successMusic = document.getElementById("successMusic");
		successMusic.pause();
	}
}

function updateLetterCountdown() {
	const now = new Date();
	const diff = ANNIVERSARY_DATE - now;

	if (diff > 0) {
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
		);
		document.getElementById("letterCountdown").textContent =
			`${days} days ${hours} hours`;
	} else {
		document.getElementById("letterCountdown").textContent =
			"It's time! 🎉";
	}
}

function closeLockedModal() {
	document.getElementById("lockedLetterModal").classList.remove("active");
}

function toggleMobileMenu() {
	document.getElementById("navMenu").classList.toggle("active");
}

// Countdown Timer
function startCountdown() {
	function update() {
		const now = new Date();
		const diff = ANNIVERSARY_DATE - now;

		if (diff > 0) {
			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor(
				(diff % (1000 * 60 * 60)) / (1000 * 60),
			);
			const seconds = Math.floor((diff % (1000 * 60)) / 1000);

			document.getElementById("days").textContent = String(
				days,
			).padStart(2, "0");
			document.getElementById("hours").textContent = String(
				hours,
			).padStart(2, "0");
			document.getElementById("minutes").textContent = String(
				minutes,
			).padStart(2, "0");
			document.getElementById("seconds").textContent = String(
				seconds,
			).padStart(2, "0");
		}
	}

	update();
	setInterval(update, 1000);
}

// Interactive Yes/No Buttons - MOBILE OPTIMIZED
function handleNo() {
	const noBtn = document.getElementById("noBtn");
	const yesBtn = document.getElementById("yesBtn");
	noClickCount++;

	// Get current sizes
	const noSize = parseFloat(getComputedStyle(noBtn).fontSize) || 17.6;
	const yesSize = parseFloat(getComputedStyle(yesBtn).fontSize) || 17.6;

	// Shrink No button
	const newNoSize = Math.max(8, noSize * 0.6);
	noBtn.style.fontSize = newNoSize + "px";
	noBtn.style.padding = newNoSize * 0.4 + "px " + newNoSize * 1.2 + "px";

	// Grow Yes button
	const newYesSize = yesSize * 1.2;
	yesBtn.style.fontSize = newYesSize + "px";
	yesBtn.style.padding = newYesSize * 0.5 + "px " + newYesSize * 1.5 + "px";

	// Make No button move after certain size (MOBILE: moves on click, not hover)
	if (noClickCount >= maxClicksBeforeMove || newNoSize <= 12) {
		if (!noBtn.classList.contains("moving")) {
			noBtn.classList.add("moving");
			moveButtonRandomly(noBtn);
		} else {
			// Already moving, trigger immediate move on click
			moveButtonToRandomPosition(noBtn);
		}
	}

	// Funny messages
	const messages = [
		"Are you sure?",
		"Really?",
		"Think again babe 😝!",
		"Pretty please?",
		"You know you want to!",
		"Babee 🥺🥺!",
		"Naaaaaaaaaaa 😭😭😭!",
		"Niligid na jd ko diri babe 😭😭😭!",
	];
	const msgIndex = Math.min(noClickCount - 1, messages.length - 1);
	noBtn.textContent = messages[msgIndex];
}

function moveButtonRandomly(btn) {
	// Initial move
	moveButtonToRandomPosition(btn);
}

function moveButtonToRandomPosition(btn) {
	const maxX = window.innerWidth - btn.offsetWidth - 20;
	const maxY = window.innerHeight - btn.offsetHeight - 20;

	// Ensure button stays within viewport
	const randomX = Math.max(10, Math.random() * maxX);
	const randomY = Math.max(10, Math.random() * maxY);

	btn.style.left = randomX + "px";
	btn.style.top = randomY + "px";
}

function handleYes() {
	const successMessage = document.getElementById("successMessage");
	const buttonContainer = document.getElementById("buttonContainer");

	successMessage.style.display = "block";
	buttonContainer.style.display = "none";

	// Clear any intervals
	const noBtn = document.getElementById("noBtn");
	if (noBtn.moveInterval) clearInterval(noBtn.moveInterval);

	// Play success music if audio enabled
	if (audioEnabled) {
		const bgMusic = document.getElementById("bgMusic");
		const successMusic = document.getElementById("successMusic");

		bgMusic.pause();
		successMusic.src = successSongUrl;
		successMusic
			.play()
			.catch((e) => console.log("Audio play failed:", e));
	}

	// Celebration effect
	createFloatingHearts();
	createConfetti();
}

// Music Player Functions
function updateMusicControls() {
	const playPauseBtn = document.getElementById("playPauseBtn");
	const prevBtn = document.getElementById("prevBtn");
	const nextBtn = document.getElementById("nextBtn");

	playPauseBtn.disabled = false;
	prevBtn.disabled = false;
	nextBtn.disabled = false;
}

function renderMusicGrid() {
	const grid = document.getElementById("musicGrid");
	grid.innerHTML = "";

	musicLibrary.forEach((song, index) => {
		const card = document.createElement("div");
		card.className = "music-card";
		card.dataset.index = index;
		card.onclick = () => selectSong(index);

		card.innerHTML = `
                    <div class="music-cover">
                        ${song.cover}
                        <div class="play-overlay">
                            <div class="play-icon">▶</div>
                        </div>
                    </div>
                    <div class="music-info">
                        <div class="music-title">${song.title}</div>
                        <div class="music-artist">${song.artist}</div>
                        <div class="music-note">${song.note}</div>
                    </div>
                `;

		grid.appendChild(card);
	});
}

function selectSong(index) {
	currentSongIndex = index;
	const song = musicLibrary[index];
	const bgMusic = document.getElementById("bgMusic");

	// Update UI
	document.querySelectorAll(".music-card").forEach((card, i) => {
		card.classList.toggle("active", i === index);
	});

	document.getElementById("currentSong").textContent =
		`${song.title} - ${song.artist}`;

	// Load and play
	bgMusic.src = song.url;

	if (audioEnabled) {
		bgMusic
			.play()
			.then(() => {
				isPlaying = true;
				updatePlayPauseButton();
			})
			.catch((e) => {
				console.log("Playback failed:", e);
				isPlaying = false;
				updatePlayPauseButton();
			});
	}
}

function togglePlayPause() {
	const bgMusic = document.getElementById("bgMusic");

	if (!bgMusic.src && currentSongIndex === -1) {
		// Auto-select first song
		selectSong(0);
		return;
	}

	if (isPlaying) {
		bgMusic.pause();
		isPlaying = false;
	} else {
		bgMusic
			.play()
			.then(() => {
				isPlaying = true;
			})
			.catch((e) => {
				console.log("Playback failed:", e);
			});
	}

	updatePlayPauseButton();
}

function updatePlayPauseButton() {
	const btn = document.getElementById("playPauseBtn");
	btn.textContent = isPlaying ? "⏸" : "▶";
}

function playPrevious() {
	if (currentSongIndex > 0) {
		selectSong(currentSongIndex - 1);
	} else {
		selectSong(musicLibrary.length - 1);
	}
}

function playNext() {
	if (currentSongIndex < musicLibrary.length - 1) {
		selectSong(currentSongIndex + 1);
	} else {
		selectSong(0);
	}
}

function changeVolume(value) {
	const bgMusic = document.getElementById("bgMusic");
	const successMusic = document.getElementById("successMusic");
	const volume = value / 100;

	bgMusic.volume = volume;
	successMusic.volume = volume;
}

// Floating Hearts Animation
function createFloatingHearts() {
	const container = document.getElementById("floatingHearts");
	const hearts = ["💕", "💖", "💗", "💓", "💝", "🐱"];

	// Create initial batch
	for (let i = 0; i < 5; i++) {
		setTimeout(() => createHeart(container, hearts), i * 200);
	}

	// Continue creating
	setInterval(() => {
		createHeart(container, hearts);
	}, 1500);
}

function createHeart(container, hearts) {
	const heart = document.createElement("div");
	heart.className = "heart";
	heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
	heart.style.left = Math.random() * 100 + "%";
	heart.style.animationDuration = Math.random() * 5 + 8 + "s";
	heart.style.fontSize = Math.random() * 1 + 1 + "rem";
	container.appendChild(heart);

	setTimeout(() => heart.remove(), 10000);
}

// Confetti Effect for Success
function createConfetti() {
	const colors = ["#FEC5D8", "#D8B7EA", "#C6C7FF", "#FF91AE"];

	for (let i = 0; i < 50; i++) {
		setTimeout(() => {
			const confetti = document.createElement("div");
			confetti.style.position = "fixed";
			confetti.style.width = "10px";
			confetti.style.height = "10px";
			confetti.style.background =
				colors[Math.floor(Math.random() * colors.length)];
			confetti.style.left = Math.random() * 100 + "%";
			confetti.style.top = "-10px";
			confetti.style.borderRadius = "50%";
			confetti.style.zIndex = "9999";
			confetti.style.pointerEvents = "none";
			confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

			document.body.appendChild(confetti);

			setTimeout(() => confetti.remove(), 5000);
		}, i * 50);
	}
}

// Add fall animation
const style = document.createElement("style");
style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Initialize
renderMusicGrid();

// Handle visibility change (pause when tab hidden)
document.addEventListener("visibilitychange", () => {
	const bgMusic = document.getElementById("bgMusic");
	const successMusic = document.getElementById("successMusic");

	if (document.hidden) {
		bgMusic.pause();
		successMusic.pause();
	} else if (isPlaying && audioEnabled) {
		bgMusic.play().catch(() => {});
	}
});

// Prevent double-tap zoom on iOS
let lastTouchEnd = 0;
document.addEventListener(
	"touchend",
	(e) => {
		const now = Date.now();
		if (now - lastTouchEnd <= 300) {
			e.preventDefault();
		}
		lastTouchEnd = now;
	},
	false,
);

// Close locked letter modal on outside click
document
	.getElementById("lockedLetterModal")
	?.addEventListener("click", function (e) {
		if (e.target === this) closeLockedModal();
	});
