const person = {
    name: 'john',
    age: 30,
    greet: function() {
        let surname = 'doe';
        console.log('the name is' + ' ' + this.name + ' ' + surname); }
   };
   person.greet();