Start of To-Do list app

packages used

react.js
typescript
react-icons
tailwind.css
react-router-dom

problems encountered:

i had planned on using the splice function to delete the task from the tasks array but it was returning the deleted item instead of the new array, so i decided to use the filter function to remove the deleted item from the tasks array

i needed to create a way to mark the tasks as completed, in the handleCompleted function i created a new array by mapping through the old array then checking if the index of the old array and the id of the task matches, and when the id and index matched i returned a new object that all the previous data but changes the completed status of previous object. then use the set function to change the old array into the new one
