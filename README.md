# Know Thy Shelf

A full-stack book reading and publishing platform where users can discover books across genres, publish their own works in PDF format, and manage their reading journey — all in one place.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v6 |
| Build Tool | Vite 5 |
| Backend / BaaS | Firebase (Authentication, Firestore, Storage) |
| UI Framework | Bootstrap 5 |
| APIs | Google Books API |
| Deployment | Vercel |

## Features

- **User Authentication** — Email/password signup & login, Google OAuth sign-in
- **Book Publishing** — Upload books as PDFs with cover images, titles, author names, genres, and descriptions
- **Book Reader** — In-app PDF reader for published books
- **Browse Books** — Search the Google Books API by keyword or browse by genre (Romance, Fiction, Comics, Manga, Self-Help, Poetry, Non-fiction, Educational, Classics)
- **Library** — Curated book collections across Horror, Romance, Comedy, and Sci-Fi powered by Google Books
- **User Dashboard** — View latest uploads, continue reading section, reading calendar
- **User Profile** — Custom profile picture upload, view and manage your published books, unpublish books
- **Premium Tier** — Premium subscription page with Stripe integration
- **Interactive Landing Page** — Animated hero section, genre carousel, and Swiper-based genre picker

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero section, carousel, and genre picker |
| `/authentication` | Sign in / Sign up page |
| `/profile` | User profile with published books and calendar |
| `/dashboard` | Home dashboard with updates, genres, and reading section |
| `/browser` | Search and browse books via Google Books API |
| `/library` | Curated book library by genre |
| `/write` | Publish a new book (upload PDF + cover image) |
| `/bookread` | In-app book reader |
| `/premium` | Premium subscription, FAQ, and features |

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- A Firebase project with Authentication, Firestore, and Storage enabled

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/KnowThyShelfReact.git
   cd KnowThyShelfReact
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase credentials:
   ```
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_project.appspot.com
   VITE_MESSAGING_SENDER_ID=your_sender_id
   VITE_APP_ID=your_app_id
   VITE_STRIPE_LINK=your_stripe_payment_link
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── main.jsx                  # App entry point
├── App.jsx                   # Route definitions
├── context/
│   └── Firebase.jsx          # Firebase config, auth, Firestore, and Storage utilities
├── components/
│   ├── Landing.jsx           # Landing page
│   ├── Main.jsx              # Hero section
│   ├── carl.jsx              # Genre carousel
│   ├── ChooseYourPick.jsx    # Swiper genre picker
│   ├── Browser.jsx           # Google Books search & browse
│   ├── Library.jsx           # Curated book library
│   ├── FlipBook.jsx          # Page-flip book viewer
│   ├── Premium.jsx           # Premium page layout
│   ├── Authentication/       # Auth pages (login, signup, profile)
│   ├── Dashboard/            # Dashboard (home, search, reading, genre cards)
│   ├── Writing/              # Book publishing form
│   ├── Reader/               # PDF reader and book details
│   ├── Premium/              # Premium sub-components (pricing, FAQ, features)
│   ├── CarouselItem/         # Carousel item components
│   ├── ChooseYourPick/       # Swiper slide and book components
│   └── HowKnowTheyShelfWorks/ # How-it-works section
└── assets/
    ├── css/                  # Component stylesheets
    ├── images/               # Static image assets
    └── scripts/              # Carousel animation scripts
```

## Deployment

The project is configured for Vercel deployment. Push to your connected branch and Vercel will build and deploy automatically. The `vercel.json` file handles SPA routing rewrites.
