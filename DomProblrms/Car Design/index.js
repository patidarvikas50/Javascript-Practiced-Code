const car = document.getElementById('car');
    let carRotation = 0; // Initial rotation angle

    function moveCar(direction) {
      const step = 10; // Adjust as needed
      const currentPosition = car.getBoundingClientRect();
      let newPosition;

      switch (direction) {
        case 'left':
          newPosition = currentPosition.left - step;
          car.style.left = `${newPosition}px`;
          break;
        case 'right':
          newPosition = currentPosition.left + step;
          car.style.left = `${newPosition}px`;
          break;
      }
    }

    function turnCar(direction) {
      const angle = 45; // Adjust as needed
      carRotation += (direction === 'left' ? -angle : angle);
      car.style.transform = `rotate(${carRotation}deg)`;
    }

    // Event listeners for arrow key controls
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          moveCar('left');
          turnCar('left');
          break;
        case 'ArrowRight':
          moveCar('right');
          turnCar('right');
          break;
      }
    });
