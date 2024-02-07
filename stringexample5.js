const person = {
    name: 'john',
    age: 30,
    greet: function() {console.log('the name is' + ' ' + this.name);}
};
person.greet();
