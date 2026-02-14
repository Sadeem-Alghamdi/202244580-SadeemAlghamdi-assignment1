# Technical Documentation - Personal Portfolio Website

Assignment 1 
Sadeem Ahmed Alghamdi  



## 1. File Structure

```
assignment-1/
│
├── index.html                
│
├── css/
│   └── styles.css            
│
├── js/
│   └── script.js          
│
├── docs/
│   ├── ai-usage-report.md    # AI integration documentation
│   └── technical-documentation.md  # This file
│
└── README.md                 # Project overview
```



---

## 3. HTML Structure

### Document Structure

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <!-- Meta tags, fonts, CSS -->
  </head>
  <body>
    <header class="header">...</header>
    <main>
      <section id="home" class="hero">...</section>
      <section id="about" class="section">...</section>
      <section id="projects" class="section section-dark">...</section>
      <section id="skills" class="section">...</section>
      <section id="contact" class="section section-dark">...</section>
    </main>
    <footer class="footer">...</footer>
    <script src="js/script.js"></script>
  </body>
</html>
```

### Semantic Elements Used

| Element | Purpose |
|---------|---------|
| `<header>` | Site navigation and branding |
| `<nav>` | Navigation menu container |
| `<main>` | Primary page content |
| `<section>` | Content sections with IDs for navigation |
| `<footer>` | Copyright and footer information |
| `<form>` | Contact form structure |
| `<button>` | Interactive elements |


## 4. CSS Architecture

### CSS Custom Properties (Variables)

```css
:root {
  /* Dark Theme Colors */
  --bg-color: #1a1a2e;
  --bg-light: #16213e;
  --text-color: #eee;
  --accent-bright: #e94560;
}
```

**Benefits:**
- Easy to change colors (just update variables)
- Consistent color scheme throughout
- Simple theme switching
- Beginner-friendly approach

Dynamic Greeting
```javascript
function updateGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById('greeting');
  
  if (hour < 12) {
    greetingElement.textContent = 'Good Morning! ☀️';
  } else if (hour < 18) {
    greetingElement.textContent = 'Good Afternoon! 👋';
  } else {
    greetingElement.textContent = 'Good Evening! 🌙';
  }
}
```

**How it works:**
- Gets current hour (0-23)
- Uses if/else to determine time of day
- Updates greeting text and emoji

####  Form Handling
```javascript
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from actually submitting
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    formMessage.textContent = '✅ Thank you! Your message has been received.';
    contactForm.reset(); // Clear the form
  }
});
```
 
**How it works:**
- Prevents form submission
- Gets values from form fields
- Checks if all fields are filled
- Shows success message

### Features Used 

- **CSS Grid**
- **Flexbox**
- **CSS Variables** 

- **Basic JavaScript**
---
