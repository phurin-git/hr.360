# HR.360 — HR Management Dashboard

HR.360 is a web-based HR management dashboard, I practice frontend skill by used designed in Figma and builted it. The application allows users to log in, browse a user directory, search, filter, and view detailed information about each user. This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Clone the repository

```bash
https://github.com/phurin-git/hr.360.git
```
2. Install dependencies
```bash
npm install
```
3. Build the project
```bash
npm run build
```
4. Start the project
```bash
npm run Start
```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Login with mock data
- Error handling on login failure
- User listing with search functionality
- Display of detailed user information

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, providing better tooling at any scale.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs efficiently.
- **React Hook Form**: A library for managing forms with React, offering better performance and simpler code.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Argon2**: A modern password-hashing algorithm (used here for mock data, not security purposes).
- **Auth.js**: A flexible authentication library for handling user login and session management in your Next.js or React applications.
- **SWR**: A React hook library for data fetching and caching.
- **Faker.js**: A library for generating fake data, used to create mock user entries.

## Usage

Below is a list of mock accounts you can use to log in and access the dashboard:

| Email               | Password        |
|---------------------|-----------------|
| `super@account.com` | `superuser`     |
| `admin@account.com` | `adminuser`     |
| `user@account.com`  | `regularuser`   |

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You will be presented with the login page.

![](/docs/gif/usage-1.gif)

2. Once logged in, you can filter the user list by typing in the search box to quickly find specific entries.

![](/docs/gif/usage-2.gif)

3. To log out, click the **Logout** button.

![](/docs/gif/usage-3.gif)

4. If you attempt to access the protected [http://localhost:3000/dashboard](http://localhost:3000/dashboard) page without logging in, you will be automatically redirected back to the login page at [http://localhost:3000/signin](http://localhost:3000/signin).

![](/docs/gif/usage-4.gif)

## Project Structure

Overview of the key files and folders in the project:

```
src
└───app
    ├───api                     # Contains API routes
    │   ├───attendances         # Routes related to attendance data
    │   ├───auth                # Authentication-related routes
    │   │   ├───user            # Handles user-specific authentication logic
    │   │   └───[...nextauth]   # Auth.js integration for authentication
    │   └───hashpassword        # Logic for password hashing (Argon2)
    ├───dashboard               # Dashboard page for logged-in users
    ├───data                    # Mock data resources
    ├───images                  # Static images used in the app
    │   ├───card                # Images for card components
    │   ├───default-avatar      # Default avatar images for user profiles
    │   ├───menu-item           # Images related to the menu items
    │   ├───side-nav            # Side navigation-related images
    │   └───top-nav             # Top navigation-related images
    ├───lib                     # Utility libraries
    ├───signin                  # Sign-in page for user login
    └───ui                      # Reusable UI components
        └───dashboard
            └───search          # Search related component for the dashboard
```

## Responsive Design
The application is designed with three responsive layouts:

- Desktop
- Tablet
- Mobile

Flexible containers with CSS flexbox are used to ensure the layout adapts smoothly across different screen sizes.

### Mobile Version:
*The mobile layout optimizes the interface for smaller screens.*

![image responsive mobile](/docs/img/responsive-mobile.jpeg)

### Tablet Version:
*Adjusts for medium-sized screens, balancing between mobile and desktop layouts for a comfortable viewing experience.*

![image responsive tablet](/docs/img/responsive-tablet.jpeg)

### Desktop Version:
*The desktop layout provides a full-width view optimized for larger screens.*

![image responsive desktop](/docs/img/responsive-desktop.jpg)

## Future Improvements
While the current version of the application meets the requirements, there are several areas for potential enhancement:

- **Enhanced Security**: Implementing stronger security.
- **Improved Responsiveness**: Further refining the tablet and mobile layouts to provide a better user experience on all devices.
- **User Role Management**: Adding roles and permissions for different types of users (e.g., admin, regular user).
- **Performance Optimization**: Implementing lazy loading and code splitting to improve performance on slower networks.
- **Accessibility**: Enhancing the app's accessibility to meet WCAG standards, ensuring it's usable for all users.

## Credits
Design: [HR.360 — HR Management Dashboard](https://www.figma.com/community/file/1330845180697578574) by [@BambamUi](https://www.figma.com/@BambamUi)
Development: Built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/)
Mock Data: Generated with [faker-js](https://fakerjs.dev/)