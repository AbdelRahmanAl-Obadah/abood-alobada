# Abood.dev - Personal Portfolio Website

A sleek and modern web portfolio for **Abdel Rahman Al-Obadah**, showcasing his skills as a web developer, SEO specialist, and Firebase expert.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Features

This project is a meticulously crafted personal portfolio site featuring:

1. **SEO-Friendly Design**: Optimized for search engines with clean, semantic HTML and descriptive meta tags.
2. **Responsive Layouts**: A fluid design that adapts to various screen sizes, ensuring a seamless user experience across devices.
3. **Firebase Integration**: Leveraging Firebase for state management and real-time updates, enhancing the dynamic nature of the site.
4. **Customized Theming**: Support for light and dark themes, allowing users to personalize their experience.
5. **Admin Panel**: A separate section for managing content, which is hidden from search engines.

## Architecture

The architecture of this project revolves around a straightforward structure:

- **HTML/CSS**: The core building blocks providing the layout and styling.
- **Firebase**: Used for dynamic data handling and real-time updates.
- **Custom JavaScript**: For interactive elements and state management.

## Tech Stack

| Technology       | Purpose                                         | Version |
|------------------|-------------------------------------------------|---------|
| HTML             | Markup language for structuring content          |         |
| CSS              | Cascading Style Sheets for styling              |         |
| JavaScript       | Dynamic client-side scripting                   |         |
| Firebase         | Real-time database and authentication           | 9.x     |

## Folder Structure

```
abood alobada/
├── admin.html            - Admin panel for content management
├── favicon.svg           - Favicon for the site
├── index.html            - Main portfolio page
├── me.png                - Profile picture
├── me1.png               - Additional profile image
├── og-image.svg          - Open Graph image for social sharing
├── robots.txt            - Robots exclusion rules file
├── site-seed.json        - Initial configuration data
└── sitemap.xml           - Sitemap for search engines
```

## Installation

### Prerequisites

- A modern web browser.
- Node.js (for any necessary scripts, though none are present in this project).

### Steps to Clone and Run the Project:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/aboodalobada/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies** (if any):
   - The current version does not require additional packages, but you can install them using npm or yarn if necessary.
   ```sh
   # If needed
   npm install
   ```

3. **Run the Project Locally**:
   - Open `index.html` in your web browser to view the site locally.

## Configuration

### Environment Variables

No environment variables are required for this project, as it is a static site without server-side logic.

### Config Files

- `site-seed.json`: Contains initial configuration data such as theme settings and Firebase credentials. Ensure sensitive information like API keys are securely managed.

## Usage

1. **Open the Admin Panel**:
   - Navigate to `admin.html` in your browser.
   - The admin panel is designed for managing content, but it's not publicly accessible due to its `robots.txt` directive.

2. **Manage Content Dynamically**:
   - Use Firebase Realtime Database or Firestore to update content dynamically and see the changes reflected on the site.

3. **Switch Themes**:
   - Toggle between light and dark themes using the theme selector in the top right corner of the page.

## Screenshots

No screenshots are provided, but you can preview the project by opening `index.html` in your browser.

## API Documentation

Not applicable as this is a static site without any backend APIs.

## Roadmap

- **Phase 1**: Add more interactive elements and animations.
- **Phase 2**: Implement user authentication and comments section.
- **Phase 3**: Expand content with case studies and projects.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to:

- Fork the repository.
- Create a pull request detailing your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Abdel Rahman Al-Obadah  
[@aboodalobada](https://twitter.com/aboodalobada)

Feel free to reach out with any questions or suggestions!