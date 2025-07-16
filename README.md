# Chhavi UI

A modern, responsive component library built with Next.js, TypeScript, and Tailwind CSS. Chhavi UI provides a comprehensive collection of reusable components designed for modern web applications.

![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)

## Features

- **Modern Design**: Clean, consistent components with beautiful aesthetics
- **Fully Responsive**: Mobile-first approach with comprehensive breakpoint support
- **Accessible**: WCAG compliant components with proper ARIA attributes
- **Performance**: Optimized with Next.js 13+ and App Router
- **TypeScript**: Full TypeScript support for enhanced development experience
- **Customizable**: Easy to customize with Tailwind CSS classes
- **Zero Dependencies**: No external UI library dependencies

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chhavi-ui.git
   cd chhavi-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the component library.

## Component Library

### Core Components

#### Buttons
Primary, secondary, and outline variants with icon support and multiple sizes.

```tsx
// Primary Button
<button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
  Primary Button
</button>

// Icon Button
<button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
  Add Item
</button>
```

#### Cards
Basic cards, image cards, stats cards, and testimonial cards.

```tsx
// Basic Card
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Title</h3>
  <p className="text-gray-600 dark:text-gray-300">Card content goes here.</p>
</div>
```

#### Forms
Input fields, textareas, selects, checkboxes, and radio buttons with validation states.

```tsx
// Input Field
<input
  type="text"
  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
  placeholder="Enter your text"
/>
```

#### Modals
Basic modals, form modals, confirmation dialogs, and large modals with scrollable content.

```tsx
// Basic Modal
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Modal Title</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">Modal content goes here.</p>
  </div>
</div>
```

#### Navigation
Breadcrumb navigation, pagination components, and tab navigation.

```tsx
// Breadcrumbs
<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-2">
    <li><a href="#" className="text-gray-500 hover:text-gray-700">Home</a></li>
    <li><span className="text-gray-400">/</span></li>
    <li><a href="#" className="text-gray-500 hover:text-gray-700">Components</a></li>
  </ol>
</nav>
```

#### Data Display
Progress bars, stats cards, responsive tables, charts, and list components.

```tsx
// Progress Bar
<div>
  <div className="flex justify-between items-center mb-2">
    <span className="text-sm text-gray-600 dark:text-gray-300">Progress</span>
    <span className="text-sm font-semibold text-gray-900 dark:text-white">75%</span>
  </div>
  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
  </div>
</div>
```

## Responsive Design

All components are built with a mobile-first approach using Tailwind CSS responsive utilities:

- **Mobile**: `sm:` prefix for small screens (640px+)
- **Tablet**: `md:` prefix for medium screens (768px+)
- **Desktop**: `lg:` prefix for large screens (1024px+)
- **Large Desktop**: `xl:` prefix for extra large screens (1280px+)

### Responsive Features

- Grid layouts that stack on mobile and expand on larger screens
- Typography that scales appropriately across devices
- Spacing that adjusts for optimal mobile experience
- Touch-friendly interactive elements
- Mobile-optimized navigation menus

## Customization

### Theme Colors

Customize the color palette in your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      }
    }
  }
}
```

## Development

### Project Structure

```
chhavi-ui/
├── src/
│   ├── app/
│   │   ├── components/          # Component pages
│   │   │   ├── buttons/
│   │   │   ├── cards/
│   │   │   ├── data-display/
│   │   │   ├── forms/
│   │   │   ├── modals/
│   │   │   └── navigation/
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   └── ...
├── public/                     # Static assets
├── package.json
├── tailwind.config.js
└── README.md
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Documentation

Each component page includes:

- Live examples of each component variant
- Copy-paste ready code examples
- Responsive behavior demonstrations
- Accessibility notes and ARIA attributes

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes
4. Add tests if applicable
5. Commit your changes: `git commit -am 'Add new component'`
6. Push to the branch: `git push origin feature/new-component`
7. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/chhavi-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/chhavi-ui/discussions)

## Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Heroicons](https://heroicons.com/) for the icons

---

Made with ❤️
