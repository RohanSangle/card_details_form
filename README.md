## Interactive card details form

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Difficulty level : **Junior** <br>
Time taken by me: **11 hours**


## The challenge

Users should be able to:

- Fill in the form and see the card details update in real time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

## My process

Because the aim was to create a card details form component with no limits on the technology stack, I chose React.js. I wanted to learn how to use React.js and properly deploy apps.
While visualizing the approach, I saw that only the form component would be rendered.
Here, I used ```event.target.value``` to modify the card's data when the user fills them into the form. This made it appear highly interactive. For field validation, I utilized the ```useForm``` hook from react-hooks-form.
I had to utilize media query because the design for the desktop version was considerably different from the mobile version. The mobile version is not that great but it's visible enough :)

## Screenshots

[![photo-2024-05-05-23-01-35.jpg](https://i.postimg.cc/6QHM6Rvq/photo-2024-05-05-23-01-35.jpg)](https://postimg.cc/67vrY8zx)

[![photo-2024-05-05-23-01-40.jpg](https://i.postimg.cc/3RdnkRXB/photo-2024-05-05-23-01-40.jpg)](https://postimg.cc/0M1p39HM)

## Tech Stack

- React.js
- Vanilla CSS


## What I learned

I learned about onChange event listener and how to change the UI on the fly. I also got to know about react forms which changes the way how normal js forms where implemented. And also a whole lot of CSS. 


## Acknowledgments

I would like to acknowledge Frontend Mentor for providing such good-level challenges. This helps me to understand which part I lack and how should I tackle it.
