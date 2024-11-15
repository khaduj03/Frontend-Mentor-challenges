
#### Mortgage Calculator 🏠
  A responsive and interactive web application for calculating mortgage payments based on user input. This project allows users to determine their monthly repayments and total payment amounts using either a repayment mortgage or an interest-only mortgage.


### Features ✨
  Dynamic Input Validation: Ensures valid values for mortgage amount, term, and interest rate.
  Two Mortgage Types:
        Repayment Mortgage: Calculates monthly repayments and total payment over the term.
        Interest-Only Mortgage: Calculates monthly interest payments.
  Responsive Design: Built using Tailwind CSS for an adaptive user experience on all devices.
  Error Handling: User-friendly messages for invalid or incomplete inputs.


### Technologies Used 🛠️
    React: For building the user interface.
    Tailwind CSS: For styling and responsive design.
    JavaScript: For calculations and form handling.


### How to Use 🖥️
    Clone the repository:
        git clone https://github.com/your-username/mortgage-calculator.git

    Navigate to the project directory:
        cd mortgage-calculator

    Install dependencies:
        npm install

    Run the application:
        npm start
          Open http://localhost:3000 in your browser to view the app.


### How It Works ⚙️

-Input Fields
      Enter the mortgage amount, term (in years), and interest rate.
      Select the type of mortgage (Repayment or Interest Only).

-Validation:
      Fields must be filled in correctly (e.g., valid number inputs).
      Displays error messages for incorrect or missing inputs.

-Calculation:

Repayment Mortgage:
    “M\=(1+r)n−1P⋅r⋅(1+r)n​”

    “where MMM is the monthly payment, PPP is the principal amount, rrr is the monthly interest rate, and nnn is the number of payments.”


-Interest-Only Mortgage:
      Monthly interest = Principal × Monthly Interest Rate.

-Results Display:
      Shows the calculated monthly repayment and total payment.
      Animates result changes for better user experience.


### Screenshots 📸
Home Page
Results Section


### Challenges Faced 🚀
    -Dynamic Animations: Smoothly updating results when input values change.
    -Validation Handling: Ensuring user-friendly error messages for various invalid inputs.
    -Mortgage Calculation Logic: Implementing accurate formulas for repayment and interest-only   mortgages.


### Future Improvements 🔧
    -Add localization for multiple languages.
    -Implement user authentication for saving mortgage calculations.
    -Allow exporting results as PDF for user convenience.
    -Include a graph representation of payments over time.



### Contributing 🤝
Contributions are welcome! If you'd like to contribute to this project:

1-Fork the repository.

2-Create a new branch:
      git checkout -b feature-name

3-Commit your changes:
      git commit -m "Add new feature"

4-Push to the branch:
      git push origin feature-name

5-Submit a pull request.


### Acknowledgments 🙌
Inspired by various online mortgage calculators.
Special thanks to Frontend Mentor for design inspirations.