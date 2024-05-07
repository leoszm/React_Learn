interface User{
    name: string;
    bio: string;
    age: number;
}

function sumAge(users: User[]){
    let sum = 0;

    for(const user of users){
        sum += user.age;
    }

    return sum;
}

sumAge([{
    name: 'Diego',
    bio: 'CTO @RocketSeat',
    age: 27,
},
{
    name: 'Leonardo',
    bio: 'Desenvolvedor @PMSA',
    age: 23,
},
{
    name: 'Felippe',
    bio: 'Desenvolvedor @PMSA',
    age: 22,
},
{
    name: 'Renan',
    bio: 'Desenvolvedor @PMSA',
    age: 22,
},
{
    name: 'Vinicius',
    bio: 'Desenvolvedor @PMSA',
    age: 23,
},
{
    name: 'Pedro',
    bio: 'Desenvolvedor @PMSA',
    age: 27,
}
])