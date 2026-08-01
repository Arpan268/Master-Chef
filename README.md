# 🧑‍🍳 Master Chef: AI-Powered Recipe Generator

A dynamic React application that leverages artificial intelligence to generate detailed, custom recipes based on whatever ingredients a user currently has in their kitchen.

### 🎯 The Problem It Solves
We've all stared at a fridge full of random ingredients without a clue what to make. Master Chef eliminates food waste and decision fatigue. By simply inputting available ingredients into the app, it dynamically communicates with the Gemini AI model to return a structured, step-by-step recipe tailored exactly to what the user has on hand.

---

### 🚀 Key Features

*   **Dynamic API Integration:** Seamlessly connects to the Google Gemini API to process user inputs and fetch AI-generated responses in real-time.
*   **Asynchronous State Management:** Efficiently handles loading states and asynchronous data fetching within React to ensure a smooth user experience while the AI generates the recipe.
*   **Intuitive UI:** A clean, form-driven interface that allows users to easily input multiple ingredients and view the generated recipe instructions clearly.

---

### 💻 Tech Stack

![React](https://img.shields.io/badge/React-000000?style=flat-square&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=flat-square&logo=javascript&logoColor=white)
![Google Gemini API](https://img.shields.io/badge/Google_Gemini_API-000000?style=flat-square&logo=google&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-000000?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-000000?style=flat-square&logo=css3&logoColor=white)

---

### 🛠️ Installation & Setup

1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/Arpan268/](https://github.com/Arpan268/)[YOUR-REPO-NAME].git
   ```
2. Navigate into the project directory:
   ```bash
   cd [YOUR-REPO-NAME]
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Environment Variables: Create a `.env` file in the root directory and add your Google Gemini API key:
   ```env
   REACT_APP_GEMINI_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm start
   ```
