# Chef's Cafe

A responsive web application for managing and exploring recipes. Designed to follow a specific Figma design, this project incorporates dynamic functionality using JSON data and interactive UI elements.

🔗 **Live Demo**: [Chef's Cafe](https://chefs-cafe.netlify.app/)

---

## ✨ Features

### 🌟 Main Requirements:
1. **Follow the Figma Design**:  
   - The website design closely follows the Figma design.
   - Customizable color palette to enhance visual appeal.

2. **Navigation Bar**:  
   - Logo or website name on the left.
   - Menu items: Home, Recipes, About, and Search in the center.
   - A search bar and user icon on the right.

3. **Banner Section**:  
   - Contains a background image, title, and a short description.
   - Two buttons: `Explore Now` and `Our Feedback`.

4. **Recipe Data with JSON**:  
   - A JSON file with at least 6 recipes. Each recipe includes:
     - **Recipe Image**
     - **Recipe ID**
     - **Recipe Name**
     - **Short Description**
     - **Ingredients** (array)
     - **Preparing Time**
     - **Calories**

5. **Our Recipes Section**:  
   - Includes a heading and a short description introducing the section.

6. **Recipe Cards**:  
   - Each card displays:
     - Recipe Image
     - Recipe Name
     - Short Description
     - Ingredients (length + list)
     - Preparing Time
     - Calories
     - A button: `Want to Cook`.

7. **Sidebar Functionality**:  
   - Recipes added to the "Want to Cook" list when the button is clicked.
   - Sidebar table includes:
     - Recipe Name
     - Preparation Time
     - Calories
     - A `Preparing` button.
   - Duplicate recipes are not allowed. Displays a toast message when duplicates are attempted.

8. **Currently Cooking Table**:  
   - Recipes move from "Want to Cook" to "Currently Cooking" table upon clicking the `Preparing` button.
   - Includes:
     - Recipe Name
     - Preparation Time
     - Calories.

9. **Dynamic Counts**:  
   - Tracks and displays counts for:
     - "Want to Cook" table.
     - "Currently Cooking" table.

10. **Total Calculation**:  
    - Calculates total preparation time and total calories below the tables.

11. **Responsive Design**:  
    - Fully responsive for mobile devices.

---

## 🛠️ Technologies Used
- **HTML**: Structure of the web pages.
- **CSS**: Styled with [Tailwind CSS](https://tailwindcss.com/).
- **JavaScript**: Implements dynamic functionality.
- **Netlify**: For deployment.

---

## 📂 Project Structure


---

## 🚀 Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mizanurrahman70/chefs-cafe.git
   cd chefs-cafe
🎯 Challenges Implemented
Interactive Sidebar:

Prevents duplicate entries.
Real-time updates to counts and lists.
Currently Cooking Table:

Dynamically updates when recipes are moved.
Total Calculations:

Aggregates preparation time and calories for all recipes.
Responsive Design:

Ensures usability across various devices.
💡 Future Enhancements
Add search functionality to filter recipes.
Integrate a backend for user-specific data storage.
Implement advanced filtering and sorting options for recipes.
