// Define the 'Draggable' type
type Draggable = {
  drag: () => void;
};

// Define the 'Resizable' type
type Resizable = {
  resize: () => void;
};

// Define the 'UiWidget' type by combining 'Draggable' and 'Resizable'
type UiWidget = Draggable & Resizable;

// Create an object 'textBox' of type 'UiWidget'
let textBox: UiWidget = {
  drag: () => {
    // Implementation for the 'drag' method
    console.log("Dragging...");
  },
  resize: () => {
    // Implementation for the 'resize' method
    console.log("Resizing...");
  },
};
