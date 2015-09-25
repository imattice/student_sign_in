signIn.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    factory.students = [
        //sample students
        {name: 'Ike Mattice', id: 1, in_class: true},
        {name: 'Bernie Sanders', id: 2, in_class: true },
        {name: 'Hilary Clinton', id: 3, in_class: false },
        {name: 'Scott Walker', id: 4, in_class: false },
        {name: 'Donald Trump', id: 5, in_class: true }
    ]
})
