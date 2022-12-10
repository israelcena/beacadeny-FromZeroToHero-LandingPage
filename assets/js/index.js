import scrollPage from "./components/scroll.js";
import sendMessage from "./components/sendMessage.js";

window.addEventListener('focus', [scrollPage(), sendMessage("my message")]);