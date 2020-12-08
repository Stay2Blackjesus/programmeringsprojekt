//Changing this Value will trigger the start screen 0=OFF 1=ON
var Menu = 0;
var f = createFont("cursive");

if(Menu === 0){
    background(168, 165, 168);
     //start Button
     fill(0, 0, 0);
     strokeWeight(3);
     stroke(255, 0, 255);
    ellipse(200,200,160,60);
     //text for start Button
    fill(255, 255, 255);
    textSize(25);
    text("Start",174,207);
    
    //Shadow For Name of Game
    fill(0, 0, 0);
    textFont(f,38);
    text("Tic-Tac-Toe",98.6,89);
    
    //Name of the game
    fill(255, 0, 0);
    textFont(f,38);
    text("Tic-Tac-Toe",100,90);
}

//this line will show the cursor
cursor();

