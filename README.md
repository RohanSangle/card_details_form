# Frontend Mentor - Interactive card details form

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Difficulty level : **Junior** <br>
Time taken by me : **11 hours**

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This was a Junior level challenge given by Frontend Mentor to develop a card details form component using HTML,CSS and Js.
The challenge was to build a card details form that lets the user fill their card details and a submitted form should appear.
They had provided the [style-guide](style-guide.md) to select only these particular CSS styling. They had also provided with images of what the final output should be like.
We were allowed to use any method to code and bring out the final output.

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

## My process

As this challenege was to make a card details form component, and there were no restrictions on what tech stack to use, so I used Reactjs. I wanted to learn the use of Reactjs and proper deployment of apps.
while visualizing what approah i would take, i looked that here only the form component will be rendered so insted of man=king a seperate folder for that i just wrote it in app.js. (big mistake :|)
The main functionality was very simple, the hardest part was the CSS.
Here i used ```event.target.value``` to change the details on the card as the user types it in the form. This made it look very interactive. 
for CSS the hardest part was to handle media query as the design for desktop version was very different than for mobile version.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library


### What I learned

Mostly i learned about the css, how to position it properly, how to write media queries. 

### Continued development

I think that now i have got a good grasp upon my React.js and CSS and will further continue to do bigger projects.

## Author

- Linkedin - [Rohan Sangle](https://www.linkedin.com/in/rohan-sangle)
- Frontend Mentor - [@RohanSangle](https://www.frontendmentor.io/profile/RohanSangle)

## Acknowledgments

I would like to acknowledge Frontend Mentor for providing such good level challeneges. This really helps me to understand in which part do I lack and how should I tackle it.