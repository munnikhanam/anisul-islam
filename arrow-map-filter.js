const students =[
    {
        id:101,
        name:'Bijoy',
        gpa: 3.44
    },
    {
        id:102,
        name:'Rabeya',
        gpa: 2.04
    },
    {
        id:103,
        name:'Mini',
        gpa: 3.94
    },
]
function studentsName(){
   return students.filter(function(x){
    return x.gpa > 3
   }).map(function(y){
    return y.name
   }) 
}

const studentsName2 =() =>students.filter((x) => x.gpa >3).map((y) => y.id)
const studentsName3 =() =>students.map((x) => x.gpa)


console.log(studentsName());
console.log(studentsName2());
console.log(studentsName3());

const products =[
    {name:'laptop', price: 20000, brand:'lonevo', color: 'black'},
    {name:'phone', price: 2000, brand:'oppo', color: 'silver'},
    {name:'camera', price: 30000, brand:'apple', color: 'black'},
    {name:'watch', price: 1000, brand:'ciko', color: 'black'},
    {name:'sunglass', price: 300, brand:'ray', color: 'black'}
];
const productName = () =>products.map((x) => x.name);
const productPrice =() =>products.filter((x) => x.price > 5000).map((y) => y.brand)
console.log(productPrice());


// 
const friends =[
    {name:'roton',
    gpa: 4.88,
    subject:[
        {math:4.55,
        eng: 3.22,
        bang: 5.00,
        islam: 4.99

    }],
    sec:'a'
},
{name:'nayan',
    gpa: 4.44,
    subject:[
        {math:4.35,
        eng: 3.22,
        bang: 3.00,
        islam: 2.99

    }],
    sec:'b'
},
{name:'riad',
    gpa: 3.66,
    subject:[
        {math:3.25,
        eng: 2.22,
        bang: 3.56,
        islam: 3.99

    }],
    sec:'c'
},
{name:'poony',
    gpa: 4.08,
    subject:[
        {math:4.25,
        eng: 3.02,
        bang: 4.66,
        islam: 4.59

    }],
    sec:'d'
},
]
const hightestGpa =() =>friends.filter((x) => x.gpa > 4.5).map ((y) => y.name);
console.log(hightestGpa())
const hightestGpaInMath = () =>friends.filter((y) => y.subject[0].math < 4.00 ).map((x) => x.subject[0].math)
console.log(hightestGpaInMath())
