# 🌤️ Weather Dashboard

A responsive Weather Dashboard built using **HTML, CSS, and JavaScript**. The application allows users to log in using credentials stored in a local JSON file and view real-time weather information along with a 3-day forecast using the **WeatherAPI**.

## 📌 Features

- 🔐 User Login Authentication using `users.json`
- 🌍 Search weather by city name
- 🌡️ Current temperature and weather condition
- 💧 Humidity
- 💨 Wind speed
- 🌡️ Feels-like temperature
- 📅 3-Day Weather Forecast
- 🎨 Dynamic background based on weather conditions
- 📱 Responsive UI
- 🚪 Logout functionality using Local Storage

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- WeatherAPI
- Local Storage
- Git & GitHub

---

## 📂 Project Structure

```
Weather-Dashboard/
│
├── index.html
├── dashboard.html
│
├── style.css
└── dashboard.css
├── login.js
├── dashboard.js
└── config.example.js
│
└── users.json
│
├── images/
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/arunkumar7786/Weather-Dashboard.git
```

### 2. Open the project

Open the project folder in **Visual Studio Code**.

### 3. Create your API configuration

Create a file named:

```
config.js
```

Add your WeatherAPI key:

```javascript
const API_KEY = "YOUR_WEATHERAPI_KEY";
```

> **Note:** `config.js` is ignored using `.gitignore` to prevent exposing your API key.

### 4. Run the project

Use the **Live Server** extension in VS Code.

---

## 🔑 Login Credentials

The application reads credentials from `data/users.json`.

Example users:

| Username | Password |
|----------|----------|
| admin | password123 |
| student | jsbasic2026 |

---

## 🌦️ Weather Data

Weather information is fetched from:

**WeatherAPI**

https://www.weatherapi.com/

---

## 📸 Screenshots

You can add screenshots here.

Example:

```
screenshots/
    login.png
    dashboard.png
```

---

## 📚 Concepts Used

- DOM Manipulation
- Fetch API
- JSON Parsing
- Async/Await
- Local Storage
- Event Handling
- Responsive Design
- API Integration

---

## 🔮 Future Improvements

- Auto-detect user location
- Dark/Light mode
- Weather icons animation
- Search history
- Favorite cities
- Hourly forecast
- Loading spinner
- Better error handling

---

## 👨‍💻 Author

**Arun Kumar**

GitHub: https://github.com/arunkumar7786

---

## 📄 License

This project was developed for educational purposes as part of a JavaScript course assignment.
