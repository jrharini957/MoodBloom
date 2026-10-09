function changeMood() {
  const mood = document.getElementById("mood").value;
  const emoji = document.getElementById("emoji");
  const result = document.getElementById("result");
  const message = document.getElementById("message");

  const moods = {
    happy: {
      emoji: "☀️",
      title: "Stay Happy!",
      message: "Your smile makes the world brighter!",
      color: "linear-gradient(135deg, #f6d365, #fda085)"
    },
    calm: {
      emoji: "🌿",
      title: "Peaceful Mind",
      message: "Take a breath and enjoy the moment.",
      color: "linear-gradient(135deg, #a8edea, #fed6e3)"
    },
    sad: {
      emoji: "🌈",
      title: "Better Days Ahead",
      message: "It's okay to have difficult days. Be kind to yourself.",
      color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)"
    },
    excited: {
      emoji: "⚡",
      title: "Amazing Energy!",
      message: "Use your energy to create something wonderful!",
      color: "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
    }
  };

  const selected = moods[mood];

  emoji.textContent = selected.emoji;
  result.textContent = selected.title;
  message.textContent = selected.message;
  document.body.style.background = selected.color;
}