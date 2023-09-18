# Welcome to my Wallapop technical test

First of all I’d like to thank you for the opportunity to take this test. I have learned a lot and most importantly enjoyed it very much.

## How to run the project

1. Clone this repo
2. Open the terminal
3. Go to the repo's folder
4. To install all the dependencies run:
   ```
   npm install
   ```
5. To start the development server run:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Decisions taken during the process

For this test I have taken some decisions and I would like to explain myself on why I chose what I chose:

- I used React framework. Not much to specify here, as this technical assessment is for React development.
- I used Typescript as a language because of its many benefits like types and compile-time errors, and because early error feedback is very beneficial to avoid bugs in production.
- I used Tailwind because it doesn’t produce any predefined classes and styles, so it’s not opinionated like other styling frameworks. And also because it provides a faster styling process. I used it with PostCSS so that I could have multiple css files, one for each component.
- I used Jest and React Testing Library for testing this project because it was easily configurable. Also because of its great usage in the community.
- I have tried to have an easy to use UI as well as make it responsive for devices. I’m attaching in this file a screenshot of both desktop and mobile views.

Due to time restrictions I couldn’t quite polish some aspects that I would have liked to review, for example some encapsulation is not as good as I’d like (itemList component is an example of it), and also the tests are not as exhaustive as I would have liked.

## Quick view!

In order to have a quick view of it, I used Netlify to deploy this project. You can find it in: [https://magenta-cuchufli-ffc825.netlify.app/](https://magenta-cuchufli-ffc825.netlify.app/) or also check the screenshots:

![Desktop](/screenshots/Desktop.png "Desktop Layout")
![Mobile](/screenshots/Mobile.png "Mobile Layout")
