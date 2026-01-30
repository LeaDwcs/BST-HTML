# Best Service Trucking LLC - HTML Website

## 📁 File Structure

```
BST-HTML/
├── index_html.html              # Home page (main landing page)
├── about.html                   # About Us page
├── services.html                # Services page
├── fleet.html                   # Fleet information page
├── contact.html                 # Contact & contact form
├── driver-application.html      # Driver application form
├── admin-dashboard.html         # Admin control panel
├── PROJECT_REPORT.html          # Project documentation report
├── styles.css                   # Main stylesheet
├── script.js                    # Main JavaScript file
└── README.md                    # This file
```

## 🎨 CSS File (styles.css)

Contains all styling for:
- Navigation bar and mobile menu
- Hero sections and page headers
- Buttons and forms
- Cards and grids
- Tables and badges
- Admin dashboard styles
- Footer
- Back-to-top button
- Animations and transitions
- Responsive design (mobile-friendly)
- Print styles

### Key CSS Classes:
- `.nav-container` - Navigation container
- `.hero` - Hero section
- `.section` - Page sections
- `.features-grid` - Feature cards grid
- `.form-group` - Form elements
- `.admin-container` - Admin layout
- `.footer-content` - Footer layout

## 🚀 JavaScript File (script.js)

Contains functionality for:
- Back-to-top button
- Mobile menu toggle
- Form submission handling
- Active navigation link highlighting
- Contact form validation
- Driver application submission
- Admin dashboard functions
- Email validation
- Phone validation
- Smooth scrolling
- Responsive menu handling

### Key JavaScript Functions:
- `handleFormSubmit()` - Generic form handler
- `handleContactSubmit()` - Contact form handler
- `handleApplicationSubmit()` - Driver app handler
- `handleLogout()` - Admin logout
- `validateEmail()` - Email validation
- `validatePhone()` - Phone validation
- `setActiveNavLink()` - Active link highlighting

## 🌐 HTML Pages

### 1. index_html.html
- **Purpose**: Main landing page
- **Sections**: Hero, Features, Services preview, CTA
- **Features**: Navigation, responsive design

### 2. about.html
- **Purpose**: Company information
- **Sections**: Company story, Mission & values, Timeline, Leadership team

### 3. services.html
- **Purpose**: Service offerings
- **Sections**: 6 detailed service cards, Why choose us

### 4. fleet.html
- **Purpose**: Fleet information
- **Sections**: Fleet statistics, 6 vehicle types with specs

### 5. contact.html
- **Purpose**: Contact and communication
- **Sections**: Contact form, Business hours, Location, Contact info

### 6. driver-application.html
- **Purpose**: Driver recruitment
- **Sections**: Personal info, Driving experience, Employment history, Background check

### 7. admin-dashboard.html
- **Purpose**: Administrative interface
- **Sections**: Sidebar navigation, Statistics, User management table, Shipments table

### 8. PROJECT_REPORT.html
- **Purpose**: Project documentation
- **Sections**: Complete project report with details

## 🎯 How to Use

### Basic Setup:
1. All HTML files should be in the same directory
2. Place `styles.css` and `script.js` in the same directory
3. The website uses FontAwesome icons (loaded via CDN)

### Linking CSS and JS:
```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```

### Running Locally:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8080

# Then visit: http://localhost:8000 or http://localhost:8080
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: Full width (1200px max content width)
- **Tablet**: 768px breakpoint
- **Mobile**: Hamburger menu, single column layouts

## 🔧 Customization

### Change Brand Colors:
Edit the primary color in `styles.css`:
- Primary Blue: `#1a5490`
- Secondary: `#2c3e50`
- Accent Red: `#e74c3c`

### Update Contact Information:
Search and replace in all HTML files:
- Phone: `+1 (555) 123-4567`
- Email: `info@bestservicetrucking.com`
- Address: `123 Trucking Lane, City, State 12345`

### Add New Pages:
1. Create new HTML file with same navigation structure
2. Import `styles.css` and `script.js`
3. Update all navigation menus

## ✨ Features

✅ Responsive mobile-friendly design
✅ Fast loading with external CSS/JS
✅ Smooth animations and transitions
✅ Form validation
✅ Back-to-top button
✅ Mobile hamburger menu
✅ Admin dashboard
✅ Professional styling
✅ SEO-friendly structure
✅ Print-friendly styles

## 🔒 Security Notes

- Forms are client-side only (use a backend for production)
- No sensitive data is stored
- Email validation is basic (use backend for production)

## 🚀 Deployment

To deploy this website:

### Netlify/Vercel:
1. Push to GitHub
2. Connect repository to Netlify/Vercel
3. Deploy automatically

### Traditional Hosting:
1. Upload all files to web server
2. Ensure `.css` and `.js` files are accessible
3. Test all pages work correctly

### Docker:
```dockerfile
FROM nginx:latest
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📞 Support

For questions or modifications, contact:
- Email: info@bestservicetrucking.com
- Phone: +1 (555) 123-4567

## 📄 License

© 2026 Best Service Trucking LLC. All rights reserved.

---

**Version**: 1.0.0
**Last Updated**: January 31, 2026
**Status**: Production Ready
