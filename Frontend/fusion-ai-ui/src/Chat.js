import React, { useState } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import "./style.css";

function Chat() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [controller, setController] = useState(null);

  // 🔊 Voice reader (ONLY on button click)
  const speak = (text) => {
  const speech = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();

  // 🔥 Try to select female voice
  const femaleVoice = voices.find(v =>
    v.name.toLowerCase().includes("female") ||
    v.name.toLowerCase().includes("zira") ||   // Windows female
    v.name.toLowerCase().includes("samantha") || // Mac female
    v.name.toLowerCase().includes("google uk english female")
  );

  if (femaleVoice) {
    speech.voice = femaleVoice;
  }

  // 🎵 Make voice sweeter
  speech.pitch = 1.3;   // higher = softer/feminine
  speech.rate = 0.9;    // slower = smoother
  speech.volume = 1;

  window.speechSynthesis.cancel(); // stop previous
  window.speechSynthesis.speak(speech);
};
  // 🎤 Voice input
  const startVoice = () => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setInput(speech);
    };

    recognition.start();
  };

  // 🚀 Send message
  const sendMessage = async () => {

    if (!input) return;

    const userMsg = { text: input, user: true };
    setMessages(prev => [...prev, userMsg]);

    setIsTyping(true);

    const newController = new AbortController();
    setController(newController);

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/chat",
        { message: input },
        { signal: newController.signal }
      );

      const botMsg = { text: res.data.response, user: false };
      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
        console.log("Request cancelled");
      } else {
        console.error(error);
      }
    }

    setIsTyping(false);
    setInput("");
  };

  // ⛔ Stop generation
  const stopGeneration = () => {
    if (controller) {
      controller.abort();
      setIsTyping(false);
    }
  };

  return (
  <div className="app">

    <div className="chat-container">

      <div className="chat-header logo-header">

        <img src={logo} alt="Fusion.ai" className="logo-img" />

        <span className="logo-text">
          Fusion<span className="ai-text">.ai</span>
        </span>

      </div>

      <div className="chat-body">

        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.user ? "user" : "bot"}`}>

            <div className="bubble">
              {msg.text}

              {!msg.user && (
                <button className = "speak-btn" onClick={() => speak(msg.text)}>🔊</button>
              )}

            </div>

          </div>
        ))}

        {isTyping && (
          <div className="typing">
            Fusion.ai is typing...
          </div>
        )}

      </div>

      <div className="chat-footer">

        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) =>{
            if(e.key == "Enter"){
              sendMessage();
            }
          }}
          placeholder="Ask Fusion.ai..."
        />

        <button className="btn send-btn" onClick={sendMessage}>
          Send
        </button>

        <button className="btn mic-btn" onClick={startVoice}>
          🎤
        </button>

        {isTyping && (
          <button className="btn stop-btn" onClick={stopGeneration}>
            ⛔
          </button>
        )}

      </div>

    </div>

  </div>
);
}

export default Chat;