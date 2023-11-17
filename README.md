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

i wanted to create a new component to display the tasks, which makes it easier to use the react-router-dom to switch between addTasks component and display component

i had to create a separate input handler for each inputs so i can clearly define what type of event i am expecting from those inputs

i had trouble implementing localstorage because of the setTask in handleSubmit function located in home.tsx. it wouldnt set the localstorage with the latest state. but i fixed it by imprementing the proper way to setState
