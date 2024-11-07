# Instructions on how to interact with the work
When the mouse moves, the pigeon's body, eyes and leaves can move with the mouse. With the mouse wheel rolling, the pigeon pattern can be enlarged or shrunk. Mouse click on the screen, the color of the pigeon can be changed randomly.

# Details of my individual approach to animating the group code.
.I choose interaction to drive my individual code.

.The animated properties of my image are:
Movement: The pigeon’s body, leaves, and eyes will follow the mouse cursor as it moves around the canvas. This gives the illusion that the pigeon is reacting to the user’s movements.
Scaling: The pigeon will scale up and down in size based on the mouse scroll, which zooms in and out of the pigeon’s entire figure.
This approach is different from other group members because mine focuses on interactivity with the user's actions.

![reference](Picture/Reference.gif)

.I made minimal changes to the group code, focusing primarily on adding the interactive elements.The animation in my code works by using mouse interaction to dynamically update the pigeon’s position and scale. The pigeon’s body and eyes move in response to mouse position through the move() method, which adjusts the offsets of the pigeon’s components (eyes, body, leaves). The scaling of the pigeon is controlled using the mouseWheel() function, which detects the mouse scroll and adjusts the pigeon’s scale proportionally.
The code uses translate(), scale(), and push()/pop() to apply transformations to the pigeon’s drawing. The redraw() function is called to update the pigeon whenever the mouse moves or the scroll wheel is used.

.No external libraries or tools outside the course were used in this project.
