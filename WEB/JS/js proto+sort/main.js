let man = [
    {
        surname: 'Arzumanyan'
        , name: 'Gevor'
        , age: 24
    }
    , {
        surname: 'Martirosyan'
        , name: 'Mariam'
        , age: 20
    }
    , {
        surname: 'Shahbazyan'
        , name: 'Lusine'
        , age: 37
    }
    , {
        surname: 'Anakyan'
        , name: 'Nikogos'
        , age: 25
    }
    , {
        surname: 'Engibaryan'
        , name: 'Arko'
        , age: 23
    }
    , {
        surname: 'Petrosyan'
        , name: 'Gevorg'
        , age: 19
    }
    , {
        surname: 'Vanyan'
        , name: 'Vahram'
        , age: 22
    }
    , {
        surname: 'Xalechyan'
        , name: 'Vahe'
        , age: 21
    }
    , {
        surname: 'Aghvanyan'
        , name: 'Marutn'
        , age: 23
    }
, ];

function Person(surnname, name) {
    this.surname = surnname;
    this.name = name;
}
Person.prototype.many = function () {
    this.salary = Math.floor(Math.random() * (200000 - 150000 + 1)) + 150000;
}
let newArr = [];
man.forEach((elem, index) => {
        newArr[index] = new Person(elem['surname'], elem['name']);
        newArr[index].many();
    })
for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - 1 - i; j++) {
        if (newArr[j]['salary'] > newArr[j + 1]['salary']) {
        [newArr[j + 1], newArr[j]] = [newArr[j], newArr[j + 1]];
        }
    }
}
// console.log(newArr);


