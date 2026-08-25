# University of Malawi Programs and Courses Guide

The University of Malawi Programs and Courses Guide is a web application that helps prospective and current students explore academic offerings and understand the course route for a programme of study.

Users can browse faculties, programmes, departments, and individual courses. Programme pages organise courses by year and semester and include credit hours, descriptions, and recommended optional courses. A site-wide search makes it possible to find programmes, courses, departments, and faculties quickly.

## Project context

This project was developed by Group 7 about five years ago, around 2021, as a school mini project to make University of Malawi programme options and course pathways easier to discover and understand.

### Disclaimer

This is an educational project and is no longer maintained as an authoritative academic catalogue. Most of the programme, department, course, and route-map data is likely outdated. Applicants and students must confirm current programme names, course requirements, admission information, and other official details directly with the University of Malawi before relying on this website.

## Features

- Faculty directory with links to the programmes offered by each faculty.
- Department pages listing the courses associated with each department.
- Programme route maps grouped by academic year and semester.
- Course detail pages with course codes, descriptions, and credit hours.
- Search modal for programmes, courses, departments, and faculties.
- User registration, login, protected profile page, and logout.
- Developers page for the Group 7 project members.
- Responsive interface styled with Tailwind CSS and Font Awesome icons.

## Application routes

| Route                   | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| `/`                     | Landing page and guide introduction            |
| `/faculties`            | Browse all faculties                           |
| `/faculties/[slug]`     | View programmes within a faculty               |
| `/departments/[slug]`   | View courses within a department               |
| `/programs/[slug]`      | View a programme route map and course schedule |
| `/courses/[courseCode]` | View course information                        |
| `/admin`                | Login page                                     |
| `/admin/register`       | Create a user account                          |
| `/profile`              | View the authenticated user and log out        |
| `/developers`           | View the project developers                    |

The API routes under `pages/api` proxy authentication actions to the backend:

- `POST /api/login` authenticates a user and stores the JWT in an HTTP-only cookie.
- `POST /api/register` creates a user and stores the returned JWT.
- `GET /api/logout` clears the authentication cookie.

## Technology

- [Next.js](https://nextjs.org/) with the Pages Router
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 2.x with JIT mode
- `axios` for authentication requests
- `nookies` for server-side cookie handling
- `react-query` for the application provider
- `react-select`, `react-modal`, and Font Awesome for UI interactions

## Project structure

```text
.
├── components/             Reusable UI components
│   ├── FacultyCard.js
│   ├── Footer.js
│   ├── HeroSection.js
│   ├── LoginForm.js
│   ├── Navbar.js
│   └── RegisterUser.js
├── img/                    Background and branding images used by Tailwind
│   ├── UnimaLibrary.jpg
│   ├── UnimaLogo.png
│   └── graduate.png
├── pages/                  Next.js pages and API routes
│   ├── api/                Login, registration, logout, and example endpoints
│   │   ├── hello.js
│   │   ├── login.js
│   │   ├── logout.js
│   │   └── register.js
│   ├── admin/              Authentication pages
│   ├── courses/            Dynamic course details
│   ├── departments/        Dynamic department details
│   ├── faculties/          Faculty directory and details
│   ├── programs/           Dynamic programme route maps
│   ├── _app.js             Global layout, navbar, styles, and query provider
│   ├── developers.js       Project team page
│   ├── index.js            Home page
│   └── profile.js          Protected user profile
├── public/                 Static assets and local search data
│   ├── *.jpeg, *.jpg       Developer profile images
│   ├── UnimaLogo.png       Site logo
│   ├── graduate*.png       Landing-page artwork
│   ├── favicon.ico         Browser icon
│   ├── coursesData.json
│   ├── departmentsData.json
│   ├── facultiesData.json
│   └── programsData.json
├── postcss.config.js       PostCSS and Autoprefixer configuration
├── tailwind.config.js      Tailwind theme and purge configuration
├── package.json            Scripts and dependencies
└── package-lock.json       Locked npm dependency versions
```

## Data sources

The faculty, department, programme, and course pages fetch content at build time from the backend API hosted at:

```text
https://programs-courses-db.herokuapp.com
```

Dynamic pages use Next.js `getStaticPaths` and `getStaticProps` with a one-second revalidation period. The JSON files in `public/` provide the data used by the client-side search in the navbar and should be kept in sync with the backend content.

Authentication also uses the backend's Strapi-style endpoints (`/auth/local`, `/auth/local/register`, and `/users/me`). The backend must be available for browsing dynamic content and for login or registration to work correctly.

## Getting started

This is an older project. The committed lockfile resolves the application to Next.js 11.0.1, React 17.0.2, and Tailwind CSS 2.2.4. Use the locked dependency versions when possible; installing the newest versions of the packages may introduce breaking changes.

### Clone the repository

Replace `<repository-url>` with the URL of this repository:

```bash
git clone <repository-url>
cd programs-courses-guide
```

### Requirements

- Node.js 14 or 16 is recommended for this legacy Next.js 11 application. Newer Node.js versions may work, but are not guaranteed.
- npm
- Access to the application backend described above

### Install dependencies

Prefer the lockfile-based install:

```bash
npm ci
```

If `npm ci` fails because of a modern npm or lockfile compatibility issue, try:

```bash
npm install --legacy-peer-deps
```

Avoid deleting `package-lock.json` unless you intend to refresh and retest the entire dependency tree.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Run with an older Node.js version

If your machine has a newer Node.js version, use a version manager such as `nvm`:

```bash
nvm install 16
nvm use 16
npm ci
npm run dev
```

### Create a production build

```bash
npm run build
npm start
```

## Available scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the Next.js development server      |
| `npm run build` | Build the application for production      |
| `npm start`     | Start the production server after a build |

## Notes for contributors

- Dynamic route parameters must match the backend slugs and course codes.
- When programme or course data changes, update the corresponding JSON search data in `public/` as well as the backend records.
- The `/profile` page requires a valid JWT cookie and redirects unauthenticated visitors to the home page.
- External API availability affects static generation and authentication.
- The project has no environment-variable configuration; API URLs are hard-coded in the page and API-route files.
- The backend URL uses Heroku-era infrastructure and may no longer be available. If it is unavailable, the app may fail during `npm run build`, and browsing or authentication will not work until the API URLs are updated.
- This repository does not include automated test or lint scripts. Verify changes manually with `npm run dev` and, where the backend is reachable, `npm run build`.
