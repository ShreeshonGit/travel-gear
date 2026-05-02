# TravelGear | Premium Wholesaler Landing Page

TravelGear is a modern, high-performance landing page designed for a premium travel suitcase and supplies wholesaler. Built with Next.js 16 and Tailwind CSS 4, it provides a professional B2B platform for showcasing products and generating wholesale leads.

## 🚀 Features

- **Premium UI/UX:** A clean, modern design focused on brand trust and professional presentation.
- **Dynamic Product Grid:** Showcases a curated selection of travel gear with wholesale-specific messaging.
- **Smooth Animations:** Integrated with Framer Motion for subtle, engaging entrance and hover animations.
- **Lead Generation:**
  - **Wholesale Enquiry Form:** Built with React Hook Form and ready for Web3Forms integration.
  - **WhatsApp Integration:** Floating contact button for instant B2B communication.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Performance Optimized:** Leveraging Next.js 16 features like optimized fonts and image loading.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
src/
├── app/              # Next.js App Router pages and layouts
│   ├── globals.css   # Global styles and Tailwind imports
│   ├── layout.tsx    # Root layout with Navbar, Footer, and WhatsApp button
│   └── page.tsx      # Main landing page assembling all sections
├── components/       # Reusable UI components
│   ├── About.tsx     # Company information section
│   ├── Contact.tsx   # Enquiry form and contact details
│   ├── Footer.tsx    # Site footer
│   ├── Hero.tsx      # Landing hero section
│   ├── Navbar.tsx    # Responsive navigation
│   ├── ProductGrid.tsx # Product showcase
│   └── WhatsAppButton.tsx # Floating contact widget
└── public/           # Static assets (images, SVGs)
```

## 🏁 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd travelgear
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## ⚙️ Configuration

### Contact Form (Web3Forms)
The contact form in `src/components/Contact.tsx` is set up to work with [Web3Forms](https://web3forms.com/). To enable it:
1. Get a free Access Key from Web3Forms.
2. Replace `'YOUR_ACCESS_KEY_HERE'` in `src/components/Contact.tsx` with your actual key.

### WhatsApp Number
Update the `phoneNumber` constant in `src/components/WhatsAppButton.tsx` to your business number.