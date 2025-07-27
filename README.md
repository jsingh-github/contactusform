# Contact Us Form

A beautiful contact form application built with React, TypeScript, and shadcn/ui components. Originally designed with Figma and converted to a functional web application.

## 🚀 Quick Start for AI Assistance

**This is a Figma Make generated project.** When working with an AI assistant, use this template for faster, more effective help:

### Template for AI Requests

```
"This is a Figma Make project with the following setup:
- Framework: [React/Next.js/Vue]
- Styling: [Tailwind CSS/styled-components/CSS modules]
- UI Library: [shadcn/ui/MUI/Chakra]
- Form handling: [react-hook-form/Formik/vanilla React]
- Package manager: [npm/yarn/pnpm]

Current issue: [describe your problem]
What I want to achieve: [describe your goal]
Please preserve the existing architecture unless there's a compelling reason to change it."
```

### Before Asking for Help

1. **Run the project first**: `npm install && npm run dev`
2. **Check what works**: Open browser and test basic functionality
3. **Identify the specific issue**: Don't ask for complete rewrites unless necessary
4. **Share relevant file contents**: Copy the specific components that need changes

### Best Practices for AI Assistance

✅ **DO:**
- Ask to modify existing components rather than replace them
- Mention you want to keep the current styling system
- Request incremental changes
- Ask for compatibility checks before major changes

❌ **DON'T:**
- Ask for complete component rewrites without trying the original first
- Request changes to the build system unless it's broken
- Switch styling approaches mid-project
- Make multiple unrelated changes at once

### Example Good Requests

```
"I need to add a new field to the existing form while keeping the current validation and styling approach."

"The dropdown isn't working properly. Here's the current component code: [paste code]. Can you fix the issue while maintaining the existing structure?"

"I want to change the color scheme from blue to green. What's the best way to do this with the current Tailwind setup?"
```

### Example Poor Requests

```
"Rewrite this entire form component" (without trying the original)
"Convert this from Tailwind to styled-components" (unnecessary architecture change)
"The form doesn't work" (too vague, no specific issue described)
```

---

## Features

- Modern, responsive design with beautiful UI components
- Form validation using Zod and React Hook Form
- Toast notifications with Sonner
- Multiple contact reasons selection
- Accessible form elements
- Clean, professional styling with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd contactusform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components built on Radix UI
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Sonner** - Toast notifications
- **Lucide React** - Icon library

## Project Structure

```
├── components/
│   ├── ContactForm.tsx      # Main contact form component
│   ├── figma/              # Figma-related components
│   └── ui/                 # shadcn/ui components
├── styles/
│   └── globals.css         # Global styles and CSS variables
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.html             # HTML template
```

## Customization

The design uses a cohesive color scheme defined in `styles/globals.css`. You can customize:

- Colors by modifying CSS custom properties in `:root`
- Typography by updating the Inter font imports
- Component styles by editing the respective component files
- Form validation rules in `ContactForm.tsx`

## Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.
