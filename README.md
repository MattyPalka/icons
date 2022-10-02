# SVG Icon Component

This is a component that can easily use and style svg Icons with lazy loader 
Current usage here is with tailwind, but can be done with any css styling with passing `className` prop
if you don't use tailwind in your project `components/icon/icon.tsx` require some styling modifications for the wrapper div as well as in createElement icon for the correct resizing

A lot of SVG Icons are already in the repository, but can be replaced / extended with any project related icons
it is recommended to ensure that all colors in the `*.svg` file are changed to `currentColor` for easier modification

when you add more colors modify the `components/icon/icons.tsx` by importing additional `.svg` files there
