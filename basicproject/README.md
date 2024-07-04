# BMI Calculator

This is a simple and attractive BMI (Body Mass Index) calculator built with React. It allows users to input their weight and height, and then calculates and displays their BMI along with a message indicating if they are underweight, normal weight, or overweight. The application also includes a visual bar that indicates the BMI category and provides information on how much weight a user needs to gain or lose to reach a normal weight range.

## Features

- **User Input**: Users can enter their weight (in kg) and height (in cm).
- **BMI Calculation**: The application calculates the BMI based on user inputs.
- **BMI Category Message**: Displays a message indicating the BMI category (Underweight, Normal weight, Overweight).
- **Weight Difference**: Provides information on how much weight a user needs to gain or lose to reach a normal weight.
- **Progress Bar**: A visual bar that changes color based on the BMI category.
- **Interactive Flashcard**: The input and result are displayed on an interactive flashcard.
- **Reset Functionality**: Allows users to reset the input fields and results.

## Technologies Used

- React
- CSS

## Setup and Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/bmi-calculator.git
    cd bmi-calculator
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Start the application**:
    ```bash
    npm start
    ```

4. **Open your browser and navigate to**:
    ```
    http://localhost:3000
    ```

## Project Structure

bmi-calculator/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── index.css
│ └── ...
│
├── package.json
├── README.md
└── ...



### App.js

The core component of the application where the BMI calculation logic is implemented.

### App.css

Contains the styling for the application, including the flashcard, buttons, and progress bar.

### index.js

The entry point of the React application that renders the `App` component.

### index.css

Basic global styles and resets for the application.

## Usage

1. Enter your weight in kilograms in the "Enter your weight (kg)" input field.
2. Enter your height in centimeters in the "Enter your height (cm)" input field.
3. Click the "Calculate BMI" button to see your BMI and related information.
4. To reset the inputs and results, click the "Reset" button.

## Screenshots

![BMI Calculator](screenshots/bmi-calculator.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Acknowledgements

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Thanks to the contributors of the libraries and tools used in this project.

