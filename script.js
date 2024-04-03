const slices = document.querySelectorAll('.slice');
const percentages = [75, 10, 10, 5];
let startAngle = 0;

slices.forEach((slice, index) => {
  const angle = (percentages[index] / 100) * 360;
  slice.style.transform = `rotate(${startAngle}deg)`;
  startAngle += angle;
});