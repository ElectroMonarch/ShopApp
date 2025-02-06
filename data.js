module.exports = function () {
    return {
        products: [
            { id: 1, name: "Samsung S21 FE", price: 1000, imageUrl: 'Yab.jpg', description: 'Benim telefonum', category: 'Telefon' },
            { id: 2, name: "Samsung S6", price: 2000, imageUrl: '2.jpg', description: 'iyi telefon', category: 'Telefon' },
            { id: 3, name: "Samsung S7", price: 3000, imageUrl: '3.jpg', description: 'güzel', category: 'Telefon' },
            { id: 4, name: "Samsung S8", price: 4000, imageUrl: '4.jpg', description: 'idare eder', category: 'Telefon' },
            { id: 5, name: "Macbook 8", price: 5000, imageUrl: '5.jpg', description: 'idare eder', category: 'Bilgisayar' },
            { id: 6, name: "Macbook Pro", price: 6000, imageUrl: '6.jpg', description: 'idare eder', category: 'Bilgisayar' },
            { id: 7, name: "HP Victus", price: 7000, imageUrl: 'Asus.jpg', description: 'idare eder', category: 'Bilgisayar' }],
        categories: [
            { id: 1, name: "Telefon" },
            { id: 2, name: "Bilgisayar" },
            { id: 3, name: "Elektronik" }
        ],
        orders: []
    }
}