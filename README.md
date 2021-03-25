## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps




What HTML elements do i need:
    - Photos of Rock, Paper, Scissors
        - Radio Button Inside <label>
    - Button
        - Event Listener
    - Div
        - To display results of throw
    - Div 2
        - To display wins
    - Div 3
        - To Display losses
    - Div 4
        - To Display Total Games
    - Rock/Paper/Scissors
        - Radio querrySelector

What State do we need to initialize:
    - Wins:0
    - Total: 0

What Happens on Click
    - Randomly pick computer throw
    - compare user/comp