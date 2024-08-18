# YelpCamp

YelpCamp is a full-featured <strong>Node.js</strong> web application designed to provide a platform for users to explore, create, and review campgrounds. The application leverages modern web technologies, including Express for server-side logic, Mongoose for managing MongoDB interactions, and Passport for secure user authentication. Additionally, MapTiler API is integrated to provide an interactive map feature, enhancing the user experience by allowing users to view and explore campground locations visually.

The website includes essential features such as user registration, login functionality, and the ability to leave reviews on various campgrounds. YelpCamp is designed to be user-friendly and responsive, ensuring a seamless experience across different devices.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Schemas](#schemas)
- [Middleware](#middleware)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/YelpCamp.git
   cd YelpCamp
   
2. **Install dependencies:**
   ```bash
   npm install
   
3. **Set up the environment variables:**
Create a .env file in the root directory and add the necessary environment variables. (See the Environment Variables section for more details.)
Start the server:
   ```bash
   npm start
   The application will run on http://localhost:3000


4. **Environment Variables**
Create a .env file in the root directory with the following variables:
   ```bash
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_cloud_key
   CLOUDINARY_SECRET=your_cloud_secret

These variables are required for image uploads to Cloudinary. <br>


5. **Project Structure**
The project is structured as follows:
   ```bash
   YelpCamp/
   ├── cloudinary/
   │   └── index.js
   ├── controllers/
   │   ├── campgrounds.js
   │   ├── reviews.js
   │   └── users.js
   ├── models/
   │   ├── campground.js
   │   ├── review.js
   │   └── user.js
   ├── public/
   │   ├── javascripts/
   │   │   ├── clusterMap.js
   │   │   ├── validateForms.js
   │   │   └── showPageMap.js
   │   └── stylesheets/
   │       ├── stars.css
   ├── routes/
   │   ├── campgrounds.js
   │   ├── reviews.js
   │   └── users.js
   ├── seeds/
   │   ├── cities.js
   │   ├── index.js
   │   └── seedHelpers.js
   ├── utils/
   │   ├── catchAsync.js
   │   └── ExpressError.js
   ├── views/
   │   ├── campgrounds/
   │   │   ├── edit.ejs
   │   │   ├── index.ejs
   │   │   ├── new.ejs
   │   │   └── show.ejs
   │   ├── layouts/
   │   │   ├── boilerplate.ejs
   │   └── partials/
   │       ├── flash.ejs
   │       ├── footer.ejs
   │       ├── navbar.ejs
   │   ├── users/
   │       ├── login.ejs
   │       ├── register.ejs
   │   ├── error.ejs
   │   └── home.ejs
   ├── app.js
   ├── middleware.js
   ├── schemas.js
   ├── package.json
   ├── package-lock.json
   ├── .env
   ├── .gitignore
   └── README.md (this file)


7. **Usage**
***Campground Routes***
     ```bash
         GET /campgrounds - View all campgrounds
         GET /campgrounds/new - Form to create a new campground
         POST /campgrounds - Create a new campground
         GET /campgrounds/:id - View a specific campground
         GET /campgrounds/:id/edit - Form to edit a campground
         PUT /campgrounds/:id - Update a campground
         DELETE /campgrounds/:id - Delete a campground

***Review Routes***
      POST /campgrounds/:id/reviews - Create a new review for a campground <br>
      DELETE /campgrounds/:id/reviews/:reviewId - Delete a review<br>

***Schemas***
   Schemas are defined in the schemas.js file using Joi for validation: <br>
   campgroundSchema: Validates campground data before saving. <br>
   reviewSchema: Validates review data before saving.<br>

***Middleware***
   Middleware functions are defined in the middleware.js file:<br>
   isLoggedIn: Checks if the user is authenticated.<br>
   storeReturnTo: Stores the return URL in the session.<br>
   validateCampground: Validates the campground data before saving.<br>
   isAuthor: Checks if the current user is the author of the campground.<br>
   isReviewAuthor: Checks if the current user is the author of the review.<br>
   validateReview: Validates the review data before saving.<br>

7. **Contributing**
Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.
