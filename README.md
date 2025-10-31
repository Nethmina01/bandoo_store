🛍️ Bandoo Store – Ecommerce Website
Table of Contents

Project Overview

Features

Folder Structure

Technologies Used

Setup and Running the Project

How to Add More Components

License

Project Overview

Bandoo Store is a responsive, modular, and dynamic eCommerce website built with HTML, CSS, and JavaScript.
It features a modular component system allowing easy insertion of headers, footers, product sections, and other components dynamically using JavaScript fetch().

This makes the project easy to maintain and extend without touching the main index.html file for each update.

Features

        1. Dynamic header, footer, and featured products loaded as separate components
        
        2. Fully responsive design for desktop, tablet, and mobile
        
        3. Hero section with call-to-action button
        
        4. Featured and latest products sections
        
        5. Modular structure for easy future extension
        
        6. Simple and clear code for learning and scaling

Technologies Used

        HTML5 – Semantic markup for structure
        
        CSS3 – Styling and responsive design
        
        JavaScript (Vanilla JS) – Dynamic component loading and DOM manipulation
        
        Live Server (VS Code extension) – For local development with live reload

Setup and Running the Project

        1. Clone or download the repository
        
        2. git clone https://github.com/yourusername/bandoo_store.git
        
        3. Open the project in VS Code
        
        cd bandoo_store
        code .
        
        4. Install Live Server extension (if not installed) in VS Code
        
        5. Open index.html with Live Server
        
        6. Right-click index.html → Open with Live Server
        
        7. The website will open in your default browser with all components loaded dynamically

How to Add More Components

Bandoo Store uses a modular component system. Here’s how you can add a new component:

Step 1 – Create the component file

Example: components/newsletter.html

section class="newsletter">
  //some function
</section>

Step 2 – Add a placeholder in index.html
<div id="newsletter"><div>

Step 3 – Load it dynamically via script.js
loadComponent("newsletter", "components/newsletter.html");


OR (auto-load method)

//<div data-component="newsletter"></div>
