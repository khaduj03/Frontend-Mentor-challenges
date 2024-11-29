### Testimonials Slider Component

A clean and interactive testimonials slider built with React and Framer Motion, designed to provide a smooth user experience with beautiful animations and responsive design.

#### Features

Interactive Animations: Smooth and user-friendly animations using Framer Motion.

Responsive Design: Optimized for both desktop and smaller screens.

Reusable Component: Modular design for easy integration into larger projects.

Navigation Buttons: Includes "Previous" and "Next" buttons to navigate between testimonials.

#### Technologies Used

React: For building the UI component.

Framer Motion: To implement advanced animations.

Tailwind CSS: For styling and layout.


#### How It Works

The TestimonialsSlider component receives the following props:

image: URL of the testimonial image.

text: Testimonial text.

handleSlider: Function to handle "Next" button click.

handlePrevSlider: Function to handle "Previous" button click.


Animations are handled using the motion component from Framer Motion, ensuring a smooth transition between states.


### Screenshots

Desktop View
![Desktop View](./sreenshot-desktop.png)


Mobile View

![Mobile View](./screenshot-sm.png)

### Usage

To use this component in your project, follow these steps:
1. Install Dependencies
Ensure you have React and Framer Motion installed in your project:
npm install framer-motion
2. Import and Use the Component
import TestimonialsSlider from "./TestimonialsSlider";

      ```
      const handleSlider = () => {
        // Add logic for Next button
      };

      const handlePrevSlider = () => {
        // Add logic for Previous button
      };

      const App = () => (
        <TestimonialsSlider
          image="/path-to-image.jpg"
          text="This is a testimonial."
          handleSlider={handleSlider}
          handlePrevSlider={handlePrevSlider}
        />
      );
      ```

  
  - Frontend Mentor - [@khaduj03](https://www.frontendmentor.io/profile/khaduj03)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)



### Feedback and Contributions

Feel free to suggest improvements or submit pull requests. Your feedback is valuable for enhancing this component!



### Sharing

1. Frontend Mentor Community: Share your solution in the #finished-projects channel.


2. Social Media: Share on platforms like LinkedIn or Twitter.


3. Blogging: Write about your experience using platforms like dev.to or Hashnode.



Have fun building! 🚀

