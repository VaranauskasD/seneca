# Seneca App ReadMe

This is a Seneca Application Project created using NextJS, React, Typescript, Styled-Components & Jest

## Getting Started

Available commands:

```
🚀 yarn start - starts the application in production mode
⚙️ yarn build - creates an optimized production build
🛠️ yarn dev - starts the application in development mode
📜 yarn link - runs ESLint
🔎 yarn test - starts the testing library
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions and Limitations

- Assumed the data is ready and available. Considered using mock resolvers via apollo client, but opted for a hard-coded array on the front-end to reduce complexity.
- Made assumptions on unclarified or ambiguous designs, such as:

  - Three toggle positions - if the number of toggles is above 2, opted in for a column design. Currently, supporting unlimited number of toggles.
  - Small layouts - opted in for column design for toggle layouts below the small breakpoint (330px width)
  - Background colour - opted in to mark the most incorrect collection of answers as orange (as shown in the designs) and most correct as blue (as shown in the designs). Chose to interpolate between the two colours based on the number of toggle groups. Considered using a set colour palette, but chose to ignore background colour mismatch (as shown in the assignment video) as the resulting colours depend on the number of toggle groups, thus the current solution is dynamic.
  - Selected text colour - removed dynamic colouring on selected toggle text, as coupled with the interpolated secondary (selected toggle) colour it would not always meet the [WCAG 2.1 4.5:1 accessibility contrast standard](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html). Opted in for a high contrast solid black colour.
  - Radio group border color - reused the secondary palette for radio group border color instead of increasing theme complexity by adding a tertiary dynamic range as per the designs
  - Radio group focus - ensured keyboard accessibility by adding keyboard focus outlines to highlight currently selected elements and by using appropriate HTML tags and attributes.

- Opted out of creating animations - attempted to use framer-motion to create animations as per the assignment video, however chose to limit the app to the current functionality as different layouts increased the animation complexity.

Preferably, all the described considerations would be brought to a design team to further elaborate and agree on an appropriate design.
