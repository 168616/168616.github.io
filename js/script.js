const elemSelect = document.querySelector('#tema');

elemSelect.addEventListener('change', function() {
   if (elemSelect.value == 'light') {
    document.documentElement.setAtribute('modo-light-dark', 'light'); 
   } else if (elemSelect.value == 'dark') {
    document.documentElement.setAtribute('modo-light-dark', 'dark');
   } else {
    document.documentElement.removeAtribute('modo-light-dark');
   }

   console.log(elemSelect);
});