const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.

let counter;
counter = 0;
const moveRobot = () => {
    counter = counter + 30;
    robot.style.left = counter + "px";
    moveRobot= 4 ;
}
robot.addEventListener('click', moveRobot)


// let counter;
// counter = 0
// function moveRobot() {
//     counter = counter + 30;
//     robot.style.left = counter + "px";
// }  
// robot.addEventListener('click', moveRobot)


