Battle Mage

to run Battle Mage:
in VSCode and in terminal
$git clone https://github.com/BBSharps/BattleMage.git
change directory to /BattleMage
$npm install
$node run_game.js

in the main menu you can:
Play Battle Mage - play the game.
View the rules - view the game rules
Exit - exit the game back to a usable terminal

please note:
Battle Mage includes timed code stops and terminal wipes to add to the user experience.
After the game has run it will go back to a usable terminal and you will need to run $node run_game.js to play again.
To run the test suite $npm install jest. Jest is listed as a Developer dependance and requires a separate download.
To run the tests $npm test.
