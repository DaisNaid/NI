import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Tryve',
            email: 'iamtryve@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Travis',
            email: 'iamtravis@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        }
    ],

    products: [
        {
            name:'DarkSpot Removal',
            category:'Face',
            image:'/images/p-1.png',
            price:'100',
            countInStock:'10',
            rating:'5',
            description:'Removes all dark spots on the face.'
        }, 
        {
            name:'Eczema Skin-Care',
            category:'Face',
            image:'/images/p-2.png',
            price:'80',
            countInStock:'0',
            rating:'4',
            description:'Takes care of eczema, pimples and acne.'
        }, 
        {
            name:'Brighter Skin',
            category:'Body',
            image:'/images/p-3.png',
            price:'120',
            countInStock:'8',
            rating:'5',
            description:'Improves the natural tone of your skin.'
        }, 
        {
            name:'Smoothening Cream',
            category:'Body',
            image:'/images/p-4.png',
            price:'50',
            countInStock:'12',
            rating:'5',
            description:'Gives your skin a smooth feel.'
        }, 
        {
            name:'Stretch Mark Cleaner',
            category:'Body',
            image:'/images/p-5.png',
            price:'100',
            countInStock:'10',
            rating:'4',
            description:'Blends stretch mark with skin tone.'
        }, 
        {
            name:'Bleaching Soap',
            category:'Body',
            image:'/images/p-6.png',
            price:'100',
            countInStock:'15',
            rating:'5',
            description:'Completely changes skin color. Side-effects included.'
        }, 
    ],
};

export default data;