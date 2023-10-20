/*Creation & Computation
Original Example Code created by Alistair McClymont https://amcc.io/

Extended using the permissions method developed to detect device type in permissions.js


*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  //enable access to sensors. On ios, press the "Request Sensor Access Button"
  //This uses functions in the permissions.js file
  checkSensorPermissions();
}

function draw() {
  background(0);
  fill(255, 50, 50)

  // we can use rotationZ, rotationX and rotationY
  // they should be used in this order (apparently - see docs)
  // even though default mode is radians the Z rotation returns degrees unless converted

  // the below code ensures a smooth transition from 0-180 and back
  let zMotion = round(width / 5 * abs(radians(rotationZ) - PI))
  // x and y values moved from the centre point
  let yMotion = round(height / 2 + rotationX * 10)
  let xMotion = round(width / 2 + rotationY * 10)

  // motion affected circle
  circle(xMotion, yMotion, zMotion)
  // reference circle
  stroke(255)
  strokeWeight(3)
  noFill()
  circle(width / 2, height / 2, width / 1.2)

  // text to provide instructions and
  // document values at the top of the screen
  noStroke()
  textSize(width / 35)
  textFont("'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace")

  fill(255, 100, 50)
  text("click to start on iOS", 10, 80)
  text("on a mobile: twist, and tilt your device", 10, 120)
  text("device - x: " + round(rotationX) + ", y: " + round(rotationX) + ", z: " + round(rotationZ), 10, 160)
  text("circle - x: " + xMotion + ", y: " + yMotion + ", radius: " + zMotion, 10, 200)
}