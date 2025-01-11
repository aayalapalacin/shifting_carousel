# Card Stack Flip Deck: Alex Ayala Palacin
The Card Stack Flip Deck is a versatile React component that dynamically stacks cards with an image and text. It includes customizable arrow buttons to trigger smooth transition animations for cycling through the card stack.
## Features

- Dynamic Card Stacking: Automatically adjusts the positioning and styling of cards for a visually appealing stacked layout
- Fully Customizable: Personalize both card and arrow button styles, including colors, sizes, and animations.
- Adjustable Transition Timing: Set the duration of the transition animation to match your desired user experience.


## Installation

1. Make sure you have Node.js and npm (Node Package Manager) installed on your system.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Run the following command to install the project dependencies:

```shell
npm install card_stack_flip_deck

```

## Usage
#Here are the props to customize the component


| Prop Name         | Type    | Default Value | Description |
| ----------------- | ------- | ------------- | ----------- |
| carouselDataProp  | array    |[] | The data array for the carousel items (displays up to 5 items). |			
|  cardWidthProp | number | 24 | The width of each carousel card (in rem units or CSS-compatible values). |
|  cardHeightProp |	number |	17 |	The height of each carousel card. |
|  btnCardMarginProp |	number |	2 |	Margin between the buttons and cards. |
|  cardAnimationProp |	number |	1 |	Animation duration for card transitions (in seconds). |
|  arrowLeftColorProp |	string |	"#000066" |	Color of the left arrow icon. |
|  arrowLeftBGColorProp |	string |	"#ccffff" |	Background color of the left arrow button. |
|  arrowRightColorProp |	string |	"#000066" |	Color of the right arrow icon. |
|  arrowRightBGColorProp |	string |	"#ccffff" |	Background color of the right arrow button. |
|  arrowLeftBorderSizeProp |	string |	"1" |	Border size for the left arrow button. |
|  arrowRightBorderSizeProp |	string |	"1" |	Border size for the right arrow button. |
|  arrowRightBorderColorProp |	string |	"#000066" |	Border color for the right arrow button. |
|  arrowLeftBorderColorProp |	string |	"#000066" |	Border color for the left arrow button. |
|  leftBorderTypeProp |	string |	"solid" |	Border style for the left arrow button (e.g., solid, dashed). |
|  rightBorderTypeProp |	string |	"solid" |	Border style for the right arrow button. |
|  boxShadowProp |	bool |	true |	Enables or disables the box shadow effect on buttons. |
|  btnAnimationProp |	bool |	true |	Enables or disables animations for the arrow buttons. |




Once the server is running, open your browser and visit http://localhost:3000 to access the todo list application.

## License

This project is licensed under the MIT License. Feel free to use and modify the code according to your needs.

## Acknowledgements

This application was used with React.js, bootstrap and integrated npm libraries: react-responsive-modal