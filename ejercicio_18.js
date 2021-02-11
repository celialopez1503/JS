'use strick'

const users = [
    {username: 'ppc90', age:30, premium: false},
    {username: 'ppc80', age:20, premium: true},
    {username: 'ppc70', age:10, premium: false},
    {username: 'ppc60', age:40, premium: false},
    {username: 'ppc50', age:60, premium: true}
];

//filtramos por edad: 

const edad = users.filter(function(user){
    return user.age > 25
});

console.log (edad);


