// Get references to the object and the mouse
const object = document.getElementById('object');
const mouse = { x: 0, y: 0 };

// Update the mouse coordinates on mousemove
document.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// Function to calculate the distance between two points
function getDistance(point1, point2) {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Function to update the position of the object
function updateObjectPosition() {
  // Calculate the distance between the mouse and the object
  const distance = getDistance(mouse, { x: object.offsetLeft, y: object.offsetTop });

  // If the distance is less than a threshold, move the object away from the mouse
  if (distance < 100) {
    // Calculate the angle between the mouse and the object
    const angle = Math.atan2(object.offsetTop - mouse.y, object.offsetLeft - mouse.x);
    
    // Calculate the new position of the object
    const newX = object.offsetLeft + Math.cos(angle) * 5;
    const newY = object.offsetTop + Math.sin(angle) * 5;
    
    // Update the position of the object
    object.style.left = newX + 'px';
    object.style.top = newY + 'px';
  }
  
  // Call this function recursively to continuously update the object's position
  requestAnimationFrame(updateObjectPosition);
}

// Start updating the object's position
updateObjectPosition();
