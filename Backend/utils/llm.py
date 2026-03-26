import google.generativeai as genai
from config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

# ✅ Use latest working model
model = genai.GenerativeModel("models/gemini-2.5-flash")

def generate_response(message):
    try:
        response = model.generate_content(message)
        return response.text
    except Exception as e:
        return f"Fusion.ai Error: {str(e)}"