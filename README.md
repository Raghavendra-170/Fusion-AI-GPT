# Fusion.ai 🤖
### <img width="1536" height="1024" alt="logo" src="https://github.com/user-attachments/assets/0882ee03-dac1-47e8-b40c-10fdf0e4dd10" />
---
Fusion.ai is a **full-stack AI chatbot** inspired by ChatGPT, built using **React + Flask + Gemini API** with voice interaction support.
---
### Live Link : https://fusion-ai-gpt-op13.vercel.app/
---

## 🌟 Features

* 💬 AI Chat powered by Gemini (LLM)
* 🎤 Voice Input (Speech Recognition)
* 🔊 Voice Output (Text-to-Speech)
* ⛔ Stop Response Generation
* ⌨️ Enter Key to Send Messages
* 🌙 Modern Dark UI (ChatGPT-style)
* ✨ Smooth animations and glowing UI

---

## 🛠 Tech Stack

### Frontend

* React.js
* CSS (Custom UI)

### Backend

* Flask (Python)
* Gemini API (Google AI)

### Other

* Speech Recognition API
* Web Speech API (TTS)

---

## 📁 Project Structure

```
Fusion-AI-GPT/
│
├── Backend/
│   ├── app.py
│   ├── config.py
│   ├── utils/
│   │   └── llm.py
│   └── requirements.txt
│
├── Frontend/
│   └── fusion-ai-ui/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── package-lock.json
│
├── .gitignore
├── LICENSE ✅
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup

```bash
cd Backend
pip install -r requirements.txt
python app.py
```

---

### 🔹 Frontend Setup

```bash
cd Frontend/fusion-ai-ui
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside `Backend/`:

```
GEMINI_API_KEY=your_api_key_here
```

⚠️ Do NOT upload `.env` to GitHub

---

## 🚀 How It Works

1. User enters a message (text or voice)
2. Frontend sends request to Flask backend
3. Backend calls Gemini API
4. Response is sent back to UI
5. User can listen using voice output

---

## 🎯 Future Improvements

* 🧠 Chat memory (context awareness)
* 🌐 Deployment (Vercel + Render)
* 📱 Mobile responsive UI
* 🎨 Advanced animations

---

## 👨‍💻 Author

**Raghavendra Kukkadapu**

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this software with proper attribution.

See the `LICENSE` file for more details.
