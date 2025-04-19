# 📁 Project Folder Structure and Guidelines

This project uses a **Feature-Driven Modular Architecture** to organize the application. This architecture allows for better scalability, maintainability, and clear separation of concerns, ensuring that different features can evolve independently and be easily tested.

---

## 🗂️ Folder Structure Overview

```
src/
│
├── api/                     # Centralized API configuration
│   ├── client.ts            # Axios or Fetch client setup
│   └── apiEndpoints.ts      # Central API routes
│
├── assets/                  # Static files (images, fonts, etc.)
│   ├── images/              # Images
│   ├── fonts/               # Fonts
│   └── styles/              # CSS files (if needed)
│
├── components/              # Shared UI components
│   ├── atoms/               # Small, reusable UI components
│   │   ├── Button.tsx       # Button component
│   │   ├── Input.tsx        # Input field component
│   │   ├── Avatar.tsx       # Avatar component
│   │   └── Spinner.tsx      # Loading spinner
│   │
│   ├── molecules/           # Combination of atoms
│   │   ├── FormGroup.tsx    # Grouped form fields
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── CardHeader.tsx   # Header for cards
│   │
│   ├── organisms/           # Complex UI sections
│   │   ├── Modal.tsx        # Modal component
│   │   ├── TaskCard.tsx     # Task card showing details
│   │   └── AuthForm.tsx     # Login/Signup form
│   │
│   └── templates/           # Page-level sections
│       ├── PageHeader.tsx   # Header for pages
│       └── Footer.tsx       # Footer component
│
├── features/                # Feature-based organization
│   ├── auth/                # Authentication feature
│   │   ├── components/      # Feature-specific components
│   │   │   ├── LoginForm.tsx       # Login form
│   │   │   ├── SignupForm.tsx      # Signup form
│   │   │   └── AuthHeader.tsx      # Feature-specific header
│   │   ├── hooks/           # Feature-specific hooks
│   │   │   └── useAuth.ts          # Hook for managing auth logic
│   │   ├── api.ts           # API functions for auth
│   │   ├── authSlice.ts     # Redux slice for auth state
│   │   ├── types.ts         # Types/interfaces for auth
│   │   └── index.tsx        # Entry component for auth feature
│   │
│   ├── tasks/               # Tasks feature
│   │   ├── components/      # Feature-specific components
│   │   │   ├── TaskList.tsx        # Component for displaying tasks
│   │   │   ├── TaskForm.tsx        # Component for creating tasks
│   │   │   └── TaskFilter.tsx      # Filter options for tasks
│   │   ├── hooks/           # Feature-specific hooks
│   │   │   └── useTasks.ts         # Hook for managing tasks
│   │   ├── api.ts           # API functions for tasks
│   │   ├── tasksSlice.ts    # Redux slice for tasks state
│   │   ├── types.ts         # Types/interfaces for tasks
│   │   └── index.tsx        # Entry component for tasks feature
│
├── hooks/                   # Reusable global hooks
│   ├── useAuth.ts           # Authentication management hook
│   └── useFetch.ts          # Generic data fetching hook
│
├── layouts/                 # Application layout components
│   ├── AuthLayout.tsx       # Layout for authentication pages
│   ├── DashboardLayout.tsx  # Main dashboard layout
│   └── PageLayout.tsx       # Generic page wrapper
│
├── services/                # Centralized services
│   ├── authService.ts       # Service for authentication logic
│   └── notificationService.ts # Service for handling notifications
│
├── store/                   # Redux store setup
│   ├── index.ts             # Store configuration
│   └── rootReducer.ts       # Root reducer combining all slices
│
├── styles/                  # Global styles
│   ├── GlobalStyles.ts      # Global CSS styles
│   ├── theme.ts             # Material-UI theme
│   └── reset.css            # CSS reset file
│
├── types/                   # Global TypeScript types
│   ├── apiTypes.ts          # API response types
│   └── common.ts            # Common utility types
│
├── utils/                   # Utility functions
│   ├── dateUtils.ts         # Date formatting functions
│   ├── stringUtils.ts       # String manipulation utilities
│   └── validate.ts          # Form validation helpers
│
├── App.tsx                  # Main application component
├── main.tsx                 # Entry point for React app
└── vite.config.ts           # Vite configuration file
```

---

## 📋 Rules and Best Practices

### 1. **Feature-Driven Modular Architecture**

- Each feature should be isolated in its own folder under the `features/` directory.
- Each feature folder should contain:
  - **components/**: All the UI components related to this feature.
  - **hooks/**: Any custom hooks related to this feature.
  - **api.ts**: API functions related to this feature.
  - **types.ts**: Types and interfaces specific to this feature.
  - **slice.ts**: If using Redux, manage state with feature-specific slices.
  - **index.tsx**: Entry point or export file for this feature.

### 2. **Component Organization: Atomic Design**

- **Atoms**: Basic building blocks of UI, such as buttons, inputs, spinners.
- **Molecules**: Combinations of atoms that form more complex UI elements, like form groups, navbars, and card headers.
- **Organisms**: More complex components that might include multiple molecules, like modals, task cards, and forms.
- **Templates**: Page-level layouts such as headers, footers, and overall page sections.

### 3. **Reusability and Separation of Concerns**

- Components should be modular and reusable across different features.
- Keep UI components (like buttons, inputs) decoupled from business logic (e.g., tasks, authentication).
- Each feature should contain only the necessary code for that feature, avoiding unnecessary imports from unrelated parts of the app.

### 4. **API Management**

- API calls and client configurations should be centralized in the `api/` directory.
- Use a single `client.ts` file for setting up Axios or Fetch and handle all HTTP requests through it.
- Define all API routes in `apiEndpoints.ts` for easy maintenance and centralized management.

### 5. **State Management**

- Use Redux (or other state management tools) for managing application-wide state.
- Store configuration and root reducer should be centralized in the `store/` folder.

### 6. **Use of TypeScript**

- Types should be defined as needed in each feature’s `types.ts` file.
- Shared types should be placed under the `types/` folder, including API response types and common utility types.

### 7. **Styling**

- Prefer using **Tailwind CSS** for styling. Any custom styles or overrides should be placed under `styles/`.
- Use the `GlobalStyles.ts` to add global styles that are required across the application.
- Keep `reset.css` for browser compatibility fixes.

### 8. **Global Services**

- Centralized services like authentication, notifications, or other business logic should be placed under the `services/` folder.

### 9. **Layouts**

- Layout components for different types of pages (e.g., `AuthLayout`, `DashboardLayout`) should be placed under `layouts/`.
- Use layout components to wrap page-level components to ensure consistency across pages.

### 10. **Hooks**

- Global hooks like `useAuth`, `useFetch`, and other reusable logic should be placed under the `hooks/` folder.

### 11. **Avoid Deep Nesting**

- Keep your folder structure flat where possible. Deep nesting can lead to overly complex import paths and harder maintainability.

### 12. **Consistent Naming Convention**

- Use consistent naming conventions for files and folders (e.g., `camelCase` or `PascalCase` as appropriate).
- Components, hooks, and utilities should have descriptive names that represent their functionality.

---

## 🚀 Getting Started

### 1. **Install Dependencies**

```bash
npm install
```

### 2. **Run Development Server**

```bash
npm run dev
```

### 3. **Build the Application**

```bash
npm run build
```

---

## 🧩 Contributing

Please follow the folder structure rules and naming conventions mentioned above while contributing to the project. Make sure to:

- Write clean, modular code.
- Create tests for new features.
- Follow the **Feature-Driven Modular Architecture** for feature-specific components and logic.

---
