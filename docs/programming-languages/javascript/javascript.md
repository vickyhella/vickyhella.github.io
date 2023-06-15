---
title: JavaScript
sidebar_position: 1
---

This section includes notes I took when taking the JavaScript tutorial from [Scrimba](https://scrimba.com/learn/learnjavascript).

1. `document.getElementById("element-id")`: gets the element using its ID.
1. `.innerText` and `textContent`: `.innerText` modifies the element's text (only human-readable content), including HTML tags. `textContent` modifies the element's text and all its children that are for formatting purposes only.
1. `variable = variable + something` equals to `variable += something`
1. if ... else statement

    ```js
    if (sum < 21) {
      console.log()
    } else if (sum === 21){
      console.log("Wohoo! You've got blackjack!")
    } else if (sum > 21){
      console.log("You're out of the game")
    }
    // or
      if (sum < 21) {
      console.log()
    } else if (sum === 21){
      console.log("Wohoo! You've got blackjack!")
    } else (sum > 21){
      console.log("You're out of the game")
    }
    ```
