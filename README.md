# Serendib Journeys

Serendib Journeys is a modern, responsive single-page web application for a family-run travel agency in Colombo, Sri Lanka. The platform is designed with a premium aesthetic to showcase custom, driver-guided travel experiences across Sri Lanka.

## Features

- **Modern UI/UX**: Features a cohesive design system with soft drop shadows, glassy hover effects (`backdrop-filter`), and rounded corners.
- **Fully Responsive**: Built mobile-first to ensure a seamless experience across phones, tablets, and desktop displays.
- **Smooth Navigation**: Single-page architecture with smooth scrolling anchor links.
- **Sections Included**:
  - **Hero/Home**: Immersive full-screen background with a clear call-to-action.
  - **About**: Brand story featuring overlapping imagery and a floating "Locally Owned" badge.
  - **Destinations**: A masonry-style image gallery highlighting popular Sri Lankan locations with zoom-in hover effects.
  - **Tours**: Service cards showcasing the different travel packages available.
  - **Guest Stories**: Testimonial section displaying interactive review cards.
  - **Start Planning (Contact)**: A side-by-side layout featuring contact details and a comprehensive itinerary request form.

## Tech Stack

- **React 18**
- **Vite**: Next-generation frontend tooling for fast builds and hot-module replacement.
- **Material-UI (MUI)**: Core UI components, layout grids, and typography styling.
- **@mui/icons-material**: Used extensively for responsive vector icons.
- **Vanilla CSS**: Used for core layout resets and smooth-scroll behavior (`App.css`).

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate into the project directory:
   ```bash
   cd Serandibjourney
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the local development server:

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173/`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The bundled files will be generated in the `dist` folder.

## License

&copy; 2026 Serendib Journeys (Pvt) Ltd. All rights reserved.
