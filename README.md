# 🌱 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a friendship management web application designed to help users keep track of their important relationships and stay connected with friends.

With KeenKeeper, users can view their friends, monitor how long it has been since their last interaction, set relationship goals, and record interactions such as calls, texts, and video calls.

---



---

## ✨ Features

### 👥 Friend Management

* View all friends in a responsive card layout.
* See profile picture, name, tags, contact history, and relationship status.
* Open a dedicated details page for each friend.

### ⚡ Quick Check-In

* Quickly record:

  * 📞 Call
  * 💬 Text
  * 🎥 Video
* Each interaction automatically creates a timeline entry.
* Toast notification appears after recording an interaction.

### 📜 Interaction Timeline

* View the complete history of interactions.
* Each timeline entry contains:

  * Date
  * Interaction type
  * Friend name
  * Relevant icon
* Filter timeline entries by Call, Text, or Video.

### 📊 Friendship Analytics

* Visualize interaction activity using a Recharts Pie Chart.
* See the total number of:

  * Calls
  * Texts
  * Video calls

### 🎯 Relationship Goals

* Track how frequently you want to stay in contact with each friend.
* View the current contact goal and next due date.

### 📱 Responsive Design

* Fully responsive layout.
* Works across:

  * 📱 Mobile
  * 📲 Tablet
  * 💻 Desktop

### 🚨 Additional Features

* Loading animation while friend data is being loaded.
* Custom 404 page for invalid routes.
* Persistent timeline data using browser localStorage.
* Responsive navbar with active navigation state.

---

## 🛠️ Technologies Used

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| **Next.js**      | Application framework and routing |
| **React.js**     | Building user interfaces          |
| **Tailwind CSS** | Styling and responsive design     |
| **DaisyUI**      | UI components                     |
| **Recharts**     | Friendship analytics chart        |
| **JavaScript**   | Application logic                 |
| **LocalStorage** | Persisting timeline interactions  |
| **JSON**         | Friend profile data               |

---

## 📂 Project Structure

```text
keen-keeper/
│
├── app/
│   ├── page.js
│   ├── timeline/
│   │   └── page.js
│   ├── stats/
│   │   └── page.js
│   ├── friends/
│   │   └── [id]/
│   │       └── page.js
│   ├── not-found.js
│   └── layout.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── FriendCard.jsx
│   └── ...
│
├── public/
│   ├── friends.json
│   └── ...
│
├── package.json
└── README.md
```

---

## 📊 Friendship Analytics

The Stats page provides a visual overview of friendship interactions.

The Pie Chart displays the number of:

* 🔵 Calls
* 🟢 Texts
* 🟣 Video calls

The data is calculated from the interactions stored in the timeline.

---

## 📜 Timeline

Every time a user clicks one of the Quick Check-In buttons, a new interaction is added to the timeline.

For example:

```text
📞 Call with Alex Johnson
📅 August 28, 2026

💬 Text with Sarah Williams
📅 August 27, 2026

🎥 Video with Michael Brown
📅 August 25, 2026
```

Timeline data is stored in `localStorage`, so the interactions remain available after refreshing the page.

---

## 👤 Friend Details

Each friend has a dedicated details page containing:

* Profile picture
* Full name
* Relationship status
* Tags
* Biography
* Email
* Days since contact
* Contact goal
* Next due date

The page also provides Quick Check-In buttons for recording new interactions.

---

## 🎯 Relationship Status

Each friend can have one of three relationship statuses:

* 🔴 **Overdue**
* 🟡 **Almost Due**
* 🟢 **On Track**

The status is visually represented using different colors throughout the application.

---

## 📱 Responsive Design

KeenKeeper is designed to provide a consistent experience across different screen sizes.

### Desktop

* 4-column friend card layout
* Full navigation menu
* Two-column friend details page

### Tablet

* Adaptive card layout
* Responsive content spacing
* Flexible details sections

### Mobile

* Single-column layout
* Mobile-friendly navigation
* Responsive cards and buttons
* Stacked friend details sections

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd keen-keeper
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Visit:

```text
http://localhost:3000
```

---

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

---

## 🌐 Deployment

The project can be deployed using platforms such as:

* Vercel
* Netlify
* Cloudflare Pages

Before submission, make sure both the live project and GitHub repository are accessible.

---

## 🎓 Assignment Requirements Covered

### Basic Requirements

* ✅ Responsive on mobile, tablet, and desktop
* ✅ Meaningful Git commits
* ✅ Error-free deployment
* ✅ Complete README documentation

### Main Requirements

* ✅ Navbar
* ✅ Banner section
* ✅ Friend JSON data
* ✅ Friends card section
* ✅ Friend details page
* ✅ Quick Check-In functionality
* ✅ Timeline
* ✅ Footer
* ✅ Responsive design
* ✅ 404 page
* ✅ Loading animation
* ✅ Toast notifications
* ✅ Deployment-ready routing

### Challenge Requirements

* ✅ Friendship Analytics with Recharts
* ✅ Timeline filtering
* ✅ GitHub README

---

## 🔮 Future Improvements

Some features that could be added in the future:

* 🔍 Search friends and timeline entries
* 📅 Sort interactions by newest or oldest
* 🔔 Reminder notifications for overdue friends
* ✏️ Edit relationship goals
* 🗄️ Backend database integration
* 🔐 User authentication
* 📈 More detailed friendship analytics

---

## 👨‍💻 Author

**Tanzil Islam**

Built as part of the Programming Hero **KeenKeeper — Keep Your Friendships Alive** assignment.

---

## ❤️ Purpose

> **Good friendships need attention. KeenKeeper helps you remember to give it.**
