// Function to calculate the distance in blocks from a location to a central location
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }
  
  // Function to calculate the distance in feet from a location to a central location
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264; // Assuming 1 block is equal to 264 feet
  }
  
  // Function to calculate the distance traveled in feet between two locations
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Assuming 1 block is equal to 264 feet
  }
  
  // Function to calculate the fare price for a ride based on the distance traveled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample for short rides
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // Charge 2 cents per foot for distances between 400 and 2000 feet
    } else if (distance <= 2500) {
      return 25; // Flat fare for distances over 2000 feet but less than or equal to 2500 feet
    } else {
      return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
  }
  
