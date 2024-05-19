import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const products = [{
        // _id: uuidv4(),
        _id: "001",
        name: "Men Shoes",
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        alt: "Mens F-shoes",
        brand: "Roadster",
        newPrice: 1750,
        oldPrice: 2499,
        discount: 67,
        size: "L-9",
        idealFor: "M",
        rating: 3.2,
        delivery: 50,
    },
    {
        _id: "002",
        name: "Women Shoes",
        img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Women F-shoes",
        brand: "Roadster",
        newPrice: 1299,
        oldPrice: 2299,
        discount: 75,
        size: "L-8",
        idealFor: "W",
        rating: 4.6,
        delivery: 60,

    },
    {
        _id: "003",
        name: "Mens T-shirt",
        img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        alt: "Mens-shirt",
        brand: "Premium Collection",
        newPrice: 999,
        oldPrice: 1599,
        discount: 45,
        size: "L",
        idealFor: "M",
        rating: 4.5,
        delivery: 100,

    },
    {
        _id: "004",
        name: "Women Hand-bag",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        alt: "Hand-bag",
        brand: "Premium Collection",
        newPrice: 1999,
        oldPrice: 2599,
        discount: 40,
        size: "L",
        idealFor: "W",
        rating: 3.7,
        delivery: 40,


    },
    {
        _id: "005",
        name: "Men Formal-Shirt",
        img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
        alt: "Formal-Shirt",
        brand: "Mens Fashion",
        newPrice: 1599,
        oldPrice: 2679,
        discount: 70,
        size: "L",
        idealFor: "M",
        rating: 2.9,
        delivery: 60,

    },
    {
        _id: "006",
        name: "Women Top-skirt",
        img: "https://images.unsplash.com/photo-1580530378867-a71ce08ec1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        alt: "Top-skirt",
        brand: "Mens Fashion",
        newPrice: 1299,
        oldPrice: 2479,
        discount: 68,
        size: "M",
        idealFor: "W",
        rating: 4.3,
        delivery: 50,

    },
    {
        _id: "007",
        name: "Realme-5G",
        img: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        alt: "Realme",
        brand: "Realme Andriod Phone",
        newPrice: 20999,
        oldPrice: 27999,
        discount: 30,
        size: "-",
        idealFor: "All",
        rating: 3.8,
        delivery: 100,

    },
    {
        _id: "008",
        name: "Women Shoes",
        img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Women F-shoes",
        brand: "Roadster",
        newPrice: 1299,
        oldPrice: 2299,
        discount: 75,
        size: "L-8",
        idealFor: "W",
        rating: 4.6,
        delivery: 60,

    },
    {
        _id: "009",
        name: "Mens T-shirt",
        img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        alt: "Mens-shirt",
        brand: "Premium Collection",
        newPrice: 999,
        oldPrice: 1599,
        discount: 45,
        size: "L",
        idealFor: "M",
        rating: 4.5,
        delivery: 100,

    },
    {
        _id: "010",
        name: "Women Hand-bag",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        alt: "Hand-bag",
        brand: "Premium Collection",
        newPrice: 1999,
        oldPrice: 2599,
        discount: 40,
        size: "L",
        idealFor: "W",
        rating: 3.7,
        delivery: 40,


    },
    {
        _id: "011",
        name: "Men Formal-Shirt",
        img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
        alt: "Formal-Shirt",
        brand: "Mens Fashion",
        newPrice: 1599,
        oldPrice: 2679,
        discount: 70,
        size: "L",
        idealFor: "M",
        rating: 2.9,
        delivery: 60,

    },
    {
        _id: "012",
        name: "Women Top-skirt",
        img: "https://images.unsplash.com/photo-1580530378867-a71ce08ec1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        alt: "Top-skirt",
        brand: "Mens Fashion",
        newPrice: 1299,
        oldPrice: 2479,
        discount: 68,
        size: "M",
        idealFor: "W",
        rating: 4.3,
        delivery: 50,

    },
    {
        _id: "013",
        name: "Realme-5G",
        img: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        alt: "Realme",
        brand: "Realme Andriod Phone",
        newPrice: 20999,
        oldPrice: 27999,
        discount: 30,
        size: "-",
        idealFor: "All",
        rating: 3.8,
        delivery: 100,

    }, {
        _id: "014",
        name: "Women Shoes",
        img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Women F-shoes",
        brand: "Roadster",
        newPrice: 1299,
        oldPrice: 2299,
        discount: 75,
        size: "L-8",
        idealFor: "W",
        rating: 4.6,
        delivery: 60,

    },
    {
        _id: "015",
        name: "Mens T-shirt",
        img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        alt: "Mens-shirt",
        brand: "Premium Collection",
        newPrice: 999,
        oldPrice: 1599,
        discount: 45,
        size: "L",
        idealFor: "M",
        rating: 4.5,
        delivery: 100,

    },
    {
        _id: "016",
        name: "Women Hand-bag",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        alt: "Hand-bag",
        brand: "Premium Collection",
        newPrice: 1999,
        oldPrice: 2599,
        discount: 40,
        size: "L",
        idealFor: "W",
        rating: 3.7,
        delivery: 40,


    },
    {
        _id: "017",
        name: "Men Formal-Shirt",
        img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
        alt: "Formal-Shirt",
        brand: "Mens Fashion",
        newPrice: 1599,
        oldPrice: 2679,
        discount: 70,
        size: "L",
        idealFor: "M",
        rating: 2.9,
        delivery: 60,

    },
    {
        _id: "018",
        name: "Women Top-skirt",
        img: "https://images.unsplash.com/photo-1580530378867-a71ce08ec1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        alt: "Top-skirt",
        brand: "Mens Fashion",
        newPrice: 1299,
        oldPrice: 2479,
        discount: 68,
        size: "M",
        idealFor: "W",
        rating: 4.3,
        delivery: 50,

    },
    {
        _id: "019",
        name: "Realme-5G",
        img: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        alt: "Realme",
        brand: "Realme Andriod Phone",
        newPrice: 20999,
        oldPrice: 27999,
        discount: 30,
        size: "-",
        idealFor: "All",
        rating: 3.8,
        delivery: 100,

    }, {
        _id: "020",
        name: "Women Shoes",
        img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Women F-shoes",
        brand: "Roadster",
        newPrice: 1299,
        oldPrice: 2299,
        discount: 75,
        size: "L-8",
        idealFor: "W",
        rating: 4.6,
        delivery: 60,

    },
    {
        _id: "021",
        name: "Mens T-shirt",
        img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        alt: "Mens-shirt",
        brand: "Premium Collection",
        newPrice: 999,
        oldPrice: 1599,
        discount: 45,
        size: "L",
        idealFor: "M",
        rating: 4.5,
        delivery: 100,

    },
    {
        _id: "022",
        name: "Women Hand-bag",
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
        alt: "Hand-bag",
        brand: "Premium Collection",
        newPrice: 1999,
        oldPrice: 2599,
        discount: 40,
        size: "L",
        idealFor: "W",
        rating: 3.7,
        delivery: 40,


    },
    {
        _id: "023",
        name: "Men Formal-Shirt",
        img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
        alt: "Formal-Shirt",
        brand: "Mens Fashion",
        newPrice: 1599,
        oldPrice: 2679,
        discount: 70,
        size: "L",
        idealFor: "M",
        rating: 2.9,
        delivery: 60,

    },
    {
        _id: "024",
        name: "Women Top-skirt",
        img: "https://images.unsplash.com/photo-1580530378867-a71ce08ec1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        alt: "Top-skirt",
        brand: "Mens Fashion",
        newPrice: 1299,
        oldPrice: 2479,
        discount: 68,
        size: "M",
        idealFor: "W",
        rating: 4.3,
        delivery: 50,

    },
    {
        _id: "025",
        name: "Realme-5G",
        img: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        alt: "Realme",
        brand: "Realme Andriod Phone",
        newPrice: 20999,
        oldPrice: 27999,
        discount: 30,
        size: "-",
        idealFor: "All",
        rating: 3.8,
        delivery: 100,

    },
];