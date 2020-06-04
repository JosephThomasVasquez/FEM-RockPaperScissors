# Pseudo Code


## 1. Symbol Selection

* Array of objects ```symbols[{rock, paper, scissors}]```
* Function to create each symbols DOM elements
* Store in Array: ```symbolSet[]```
* Symbols have sound interaction
* Symbols have hover effect
* Symbol selected will remove rest of symbols.

## 2. Player Selected Symbol

* Remove other 2 symbols not picked using css: ```{display: none;}```
* Player selected Symbol is scaled larger.
* Displays text "Your Pick" above symbol.

## 3. Computer Selected Symbol

* Run random function cycling through symbols for the computer.
    * Optional: Display randomization in realtime
* CPU selected Symbol is scaled larger.

## 4. Compare Player Symbol vs. CPU Symbol

* Values of each symbol:
    * Rock = 0
    * Paper = 1
    * Scissors = 2

* Conditions:
    * If ```(Paper > Rock)``` = true, then: ```playerScore + 1``` Condition: _Player Wins._
    * else if ```(Rock > Scissors)``` = true, then: ```playerScore + 1``` Condition: _Player Wins._
    * else if ```(Scissors > Paper)``` = true, then: ```playerScore + 1``` Condition: _Player Wins._
    * else if ```(Rock = Rock)``` = true, then: ```playerScore = playerScore``` Condition: _Player Tie._
    * else if ```(Paper = Paper)``` = true, then: ```playerScore = playerScore``` Condition: _Player Tie._
    * else if ```(Scissors = Scissors)``` = true, then: ```playerScore = playerScore``` Condition: _Player Tie._