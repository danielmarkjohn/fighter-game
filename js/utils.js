function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.attackbox.position.x + rectangle1.attackbox.width >=
        rectangle2.position.x &&
      rectangle1.attackbox.position.x <=
        rectangle2.position.x + rectangle2.width &&
      rectangle1.attackbox.position.y + rectangle1.attackbox.height >=
        rectangle2.position.y &&
      rectangle1.attackbox.position.y <=
        rectangle2.position.y + rectangle2.height &&
      rectangle1.isAttacking
    );
  }
  
  // Return Winner
  function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId);
    document.querySelector("#displayText").style.display = "flex";
    if (player.health === enemy.health) {
      document.querySelector("#displayText").innerHTML = "Tie";
    } else if (player.health > enemy.health) {
      document.querySelector("#displayText").innerHTML = "Player 1 Wins";
    } else if (player.health < enemy.health) {
      document.querySelector("#displayText").innerHTML = "Player 2 Wins";
    }
  }