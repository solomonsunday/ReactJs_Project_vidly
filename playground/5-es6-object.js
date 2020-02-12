const name = 'Andrew'
const userAge = '27'

const user = {
    name,
    age: userAge,
    location: 'philadelphia'
}

console.log(user)

// object Distructuring
const product = {
    lebel: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}


const transaction = (type, {
    label,
    stock = 0
} = {}) => {
    console.log(type, label, stock)
}


transaction('order', product)