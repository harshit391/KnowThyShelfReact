/*--------------------
    Constants
--------------------*/
const speedDrag = -0.1; // Adjust this value to control the dragging speed

/*--------------------
    Helper Functions
--------------------*/
const getZIndex = (array, index) => {
  // Create a new array with the same length as the input array
  const zIndices = array.map((_, i) => {
    // If the current index (i) is equal to the provided index
    if (index === i) {
      // Return the length of the array (this will be the highest z-index)
      return array.length;
    } else {
      // Otherwise, calculate the difference between the current index (i) and the provided index
      const difference = Math.abs(index - i);
      
      // Subtract the difference from the length of the array
      // This will ensure that items closer to the active item have a higher z-index
      return array.length - difference;
    }
  });

  // Return the new array with the calculated z-indices
  return zIndices;
}

/*--------------------
    Get Elements


/*--------------------
    Display Items
--------------------*/
const displayItems = (item, index, active, carItems2) => {
  const zIndex = getZIndex([...carItems2], active)[index]; // Calculate the z-index for the current item
  item.style.setProperty('--zIndex', zIndex); // Set the --zIndex CSS variable for the item
  item.style.setProperty('--active', (index - active) / carItems2.length); // Set the --active CSS variable for the item
}

/*--------------------
    Animate
--------------------*/
let progress = 50; // Initial progress value
export const animate = (carItems2) => {
  progress = Math.max(0, Math.min(progress, 100)); // Ensure progress is between 0 and 100
  const active = Math.floor(progress / 100 * (carItems2.length - 1)); // Calculate the active item index based on progress
  carItems2.forEach((item, index) => displayItems(item, index, active, carItems2)); // Update the styles for each item
}
// animate(); // Initialize the carousel

/*--------------------
    Click on Items
--------------------*/

export const move = (carItems) => {
carItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i / carItems.length) * 100 + 10; // Calculate the new progress based on the clicked item
    animate(carItems); // Animate the carousel
  });
});
}

// /*--------------------
//     Handlers
// --------------------*/
// let isDown = false; // Track if the mouse is down
// let startX; // Store the initial mouse position

// const handleMouseMove = (e) => {
//   if (e.type === 'mousemove') {
//     // Update cursor positions (if applicable)
//     cursors.forEach((cursor) => {
//       cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     });
//   }

//   if (!isDown) return; // Exit if the mouse is not down

//   const x = e.clientX || (e.touches && e.touches[0].clientX) || 0; // Get the current mouse/touch position
//   const mouseProgress = (x - startX) * speedDrag; // Calculate the progress based on mouse/touch movement
//   progress = progress + mouseProgress; // Update the progress
//   startX = x; // Update the starting position
//   animate(); // Animate the carousel
// }

// const handleMouseDown = e => {
//   isDown = true; // Set isDown to true when the mouse is down
//   startX = e.clientX || (e.touches && e.touches[0].clientX) || 0; // Store the initial mouse/touch position
// }

// const handleMouseUp = () => {
//   isDown = false; // Set isDown to false when the mouse is released
// }

// /*--------------------
//     Listeners
// --------------------*/
// document.addEventListener('mousedown', handleMouseDown); // Listen for mousedown events
// document.addEventListener('mousemove', handleMouseMove); // Listen for mousemove events
// document.addEventListener('mouseup', handleMouseUp); // Listen for mouseup events

