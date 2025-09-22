export const getRandomBG = () => {
   const colors = [
  "#f6b100", // golden yellow
  "#025cca", // bright blue
  "#be3e3f", // crimson red
  "#02ca3a", // bright green
  "#ff69b4", // hot pink
  "#9400d3", // dark violet
  "#00ffff", // aqua / cyan
  "#ff4500", // orange-red
  "#32cd32", // lime green
  "#1e90ff"  // dodger blue
];
    return colors[Math.floor(Math.random() * colors.length)];
    
}