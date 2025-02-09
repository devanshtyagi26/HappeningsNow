# **Event & Movie Filtering Web App**

## **Overview**

This project is a **location-based event and movie filtering web app**, built using **React, Node.js, and JSON storage**. Users can filter between "Events" and "Movies" using a radio button toggle, and event data is dynamically fetched and stored.

## **Features**

✅ **Dynamic Event & Movie Filtering** – Users can toggle between "Events" and "Movies."

✅ **Location-Based Event Filtering** – Events are filtered based on user preferences.

✅ **Custom Context API** – State management for event data.

✅ **Star Rating System** – Displays event ratings using SVG-based stars.

✅ **Custom SVG Icons** – Unique UI components.

✅ **Responsive UI** – Ensures smooth experience across devices.

✅ **URL State Syncing** – Search parameters update dynamically.

✅ **Efficient Backend** – Uses Node.js and JSON storage for event data.

✅ **Fully Deployed** – Frontend on **Netlify**, Backend on **Railway**.

---

## **Tech Stack**

### **Frontend:**

- React.js (with Vite)
- React Router
- Context API (for global state management)
- CSS (for styling)

### **Backend:**

- Node.js (for API handling)
- JSON Storage (instead of a database)

### **Tools & Libraries:**

- JavaScript (for data processing & state management)
- `useSearchParams` (for URL state syncing)
- Custom Hooks (`useLocationFilter.js`)
- **Netlify** (for frontend deployment)
- **Railway** (for backend deployment)

---

## **Project Structure**

```
/HappeningsNow
│   readme.md
│   tree.txt
│
├── client/
│   │   .env
│   │   .gitignore
│   │   eslint.config.js
│   │   index.html
│   │   package-lock.json
│   │   package.json
│   │   README.md
│   │   vite.config.js
│   │
│   ├── public/
│   │   ├── vite.svg
│   │
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │
│   │   ├── API/
│   │   │   ├── Events.jsx
│   │   │   ├── EventsTest.jsx
│   │   │
│   │   ├── assets/
│   │   │   ├── background.png
│   │   │   ├── Blobs.jsx
│   │   │   ├── BlueStrip.jsx
│   │   │   ├── CardImage.jsx
│   │   │   ├── DateTime.jsx
│   │   │   ├── GithubLogo.jsx
│   │   │   ├── Location.jsx
│   │   │   ├── mobileBackground.png
│   │   │   ├── react.svg
│   │   │   ├── Star.jsx
│   │   │   ├── StateSvgs.jsx
│   │   │
│   │   ├── Components/
│   │   │   ├── Card.jsx
│   │   │   ├── EventsContext.jsx
│   │   │   ├── GetStates.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LocationFilter.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── RadioButtons.jsx
│   │   │   ├── UseLocationFilter.jsx
│   │   │
│   │   ├── Style/
│   │   │   ├── body.css
│   │   │   ├── card.css
│   │   │   ├── hero.css
│   │   │   ├── media.css
│   │   │   ├── navbar.css
│   │   │   ├── scrollBar.css
│   │   │   ├── secondPage.css
│   │   │
├── server/
│   │   .env
│   │   .gitignore
│   │   index.js
│   │   index.txt
│   │   package-lock.json
│   │   package.json
│   │   vercel.json
│   │
│   ├── routes/
│   │   ├── events.js
```

---

## **Key Functionalities**

### **1. Dynamic Event & Movie Filtering**

- Implemented **radio button toggle (`RadioButtons.jsx`)** to switch between "Events" and "Movies."
- **`useSearchParams`** updates the filter selection in the URL.
- **Default selection:** "Events" is checked when the page loads.

### **2. Star Rating System**

- **`StarRating.jsx`** dynamically displays **partial stars** based on ratings.
- Used **`clipPath` in SVG** to show fractional star ratings.
- Ensured **stars adjust dynamically** based on event rating values.

### **3. State Management with Context API**

- Used **`EventsContext.js`** to store and manage event data globally.
- `setEvents` updates the list based on the selected filter.

### **4. URL State Syncing**

- Used **`useSearchParams`** to ensure the selected filter reflects in the URL.
- When a user toggles between "Events" and "Movies," the **URL updates dynamically.**

---

## **Deployment**

### **Frontend:**

✅ **Deployed on Netlify** – Hosted separately for faster performance.

### **Backend:**

✅ **Deployed on Railway** – API is accessible from the frontend.

---

## **Future Improvements**

🔹 **Database Integration** – Replace JSON storage with a real database (MongoDB/PostgreSQL).  
🔹 **User Authentication** – Allow users to save favorite events.  
🔹 **Better UI/UX** – Improve design for a more modern feel.  
🔹 **Search & Sorting** – Allow users to search and sort events dynamically.

---

## **Author**

👤 **Devansh Tyagi**  
💻 **GitHub:** [devanshtyagi26](https://github.com/devanshtyagi26)  
📧 **Email:** tyagidevansh3@gmail.com

🚀 **Built with ❤️ using React, Node.js, and CSS!**
