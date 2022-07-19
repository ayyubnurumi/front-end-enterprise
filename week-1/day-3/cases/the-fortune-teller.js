// cases from https://www.teaching-materials.org/javascript/exercises/functions
/*
The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
    - takes 4 arguments: number of children, partner's name, geographic location, job title.
    - outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(jobTitle, geoLocation, partner, numKids){
    var future = 'Kamu akan menjadi ' + jobTitle + ' di ' + geoLocation + ' dan menikah dengan '
    + partner + ' dan mempunyai ' + numKids + ' anak.';
    console.log(future);
}

tellFortune('actor', 'US', 'Kylie Jenner', 11);
tellFortune('petani', 'Indonesia', 'kembang desa', 17);
tellFortune('artis bokep', 'LA', 'Lana Rhoades', 2);