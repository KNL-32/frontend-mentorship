# Kigali Tourism Website

A modern and responsive tourism website for Kigali, Rwanda, built with React and Tailwind CSS.

## Features

✨ **Modern UI/UX Design**
- Clean, elegant interface inspired by Kigali's beauty
- Smooth scrolling and professional travel aesthetic
- Dark/light mode toggle

📱 **Fully Responsive**
- Mobile, tablet, and desktop optimized
- Responsive navigation with mobile menu
- Adaptive layouts for all screen sizes

🎨 **Design Elements**
- Modern typography and spacing
- Subtle animations and hover effects
- Warm and elegant color scheme
- Gradients, shadows, and modern card layouts

🏗️ **Components & Sections**
- Hero section with full-screen background
- Navigation bar with smooth scrolling
- About Kigali section
- Popular destinations showcase
- Hotel showcase with ratings
- Culture and food section
- Animated statistics
- Testimonials section
- Photo gallery with filters
- Newsletter subscription
- Contact/footer section

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd frontend-mentorship
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

To build for production:
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Technology Stack

- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **Unsplash API** - Placeholder images

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Destinations.jsx
│   ├── Hotels.jsx
│   ├── Statistics.jsx
│   ├── Culture.jsx
│   ├── Gallery.jsx
│   ├── Testimonials.jsx
│   ├── Newsletter.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Features Breakdown

### Dark/Light Mode
Toggle between dark and light themes using the button in the navigation bar. The preference is applied across all sections.

### Responsive Navbar
- Desktop: Full horizontal menu
- Mobile: Hamburger menu with smooth animations
- Theme toggle available on all screen sizes
- Sticky positioning for easy navigation

### Hero Section
- Full-screen background image
- Call-to-action buttons
- Animated scroll indicator

### Statistics Section
- Animated counting numbers
- Real-time animations on component load

### Gallery
- Filter by category (All, Nightlife, Hills)
- Hover effects with image scaling
- Smooth transitions

### Newsletter
- Email subscription form
- Success message feedback
- Privacy information

### Footer
- Multiple link categories
- Contact information
- Social media links
- Copyright and branding

## Customization

### Colors
Edit the gradient colors in `tailwind.config.js` and component files:
- Primary: Orange (`#f97316`)
- Secondary: Red (`#ef4444`)

### Content
Replace placeholder images from Unsplash with your own:
- Update image URLs in component files
- Update destination, hotel, and testimonial data in respective components

### Contact Information
Update the footer contact details in `src/components/Footer.jsx`

## Performance Optimizations

- Lazy loading images
- Optimized CSS with Tailwind purge
- Smooth animations using CSS transitions
- Efficient component rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to fork and submit pull requests for any improvements.

## Support

For questions or support, please contact the development team.

---

Made with ❤️ for Rwanda
