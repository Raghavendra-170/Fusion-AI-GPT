from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from utils.llm import generate_response

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Fusion.ai backend is running 🚀"

@app.route("/chat", methods=["POST"])
def chat():

    data = request.json
    user_message = data["message"]

    response = generate_response(user_message)

    return jsonify({
        "response": response
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)    