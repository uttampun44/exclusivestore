const baseImageURL = process.env.NODE_ENV === 'production' ? 'https://exclusivestore-backend.onrender.com/images/' : 'http://localhost:8080/images/';

const product = {
   products : [

    {
        id:1,
        productName: "HAVIT HV-692 Gamepad",
        price: 120,
        quantity: 20,
        realPrice: 160,
        image: baseImageURL + 'gamepad.png',
    },
    {
        id: 2,
        productName : "Ak-900 Wired Keyboard",
        price: 960,
        quantity: 50,
        realPrice: 1160,
        image: baseImageURL + 'gamekeyboard.png'
    },
    {
        id:3,
        productName: "IPS LCD Gaming Monitor",
        price: 370,
        quantity: 100,
        realPrice: 400,
        image: baseImageURL + 'gamemonitor.png'
    },
    {
        id: 4,
        productName: "S Series Comfort Chair",
        price: 375,
        quantity: 25,
        realPrice: 400,
        image: baseImageURL + 'chair.png'
    },
    {
        id: 5,
        productName : "The North Coat",
        price: 260,
        quantity: 35,
        realPrice: 360,
        image: baseImageURL + 'northcoat.png',
    },
    {
        id: 6,
        productName : "Gucci duffle Bage",
        price: 960,
        quantity:  50,
        realPrice: 1160,
        image: baseImageURL + 'Guccidufflebag.png',
    },
    {
        id: 7,
        productName : "RGB Liquid Cooler",
        price: 160,
        quantity: 15,
        realPrice: 170,
        image: baseImageURL + 'rgbliquidcooler.png',
    },
    {
        id: 8,
        productName: "Small BookSelf",
        price: 360,
        quantity: 37,
        image: baseImageURL + 'smallbookself.png'
    },
    {
        id: 9,
        productName: "Bree Dry Dog Food",
        price: 100,
        quantity: 15,
        image: baseImageURL + 'breedfoog.png',
    }
    ,
    {
        id: 10,
        productName: "CANON EOS DSLR Camera",
        price: 360,
        quantity: 10,
        image: baseImageURL + 'canono eos.png',
    }
    ,
    {
        id: 11,
        productName: "ASUS FHD Gaming Laptop",
        price: 700,
        quantity: 15,
        image: baseImageURL + 'asusFHD Gaming Laptop.png',
    }
    ,
    {
        id: 12,
        productName: "Curology Product Set",
        price: 500,
        quantity: 8,
        image: baseImageURL + 'curology product.png',
    }
    ,
    {
        id: 13,
        productName: "Kids Electric Car",
        price: 200,
        quantity: 2,
        image: baseImageURL + 'kids electric car.png',
    }
    ,
    {
        id: 14,
        productName: "Jr Zoom Soccer Cleats",
        price: 116,
        quantity: 13,
        image: baseImageURL + 'soccer cleats.png',
    }
    ,
    {
        id: 15,
        productName: "GP11 Shooter USB Gamepad",
        price: 660,
        quantity: 15,
        image: baseImageURL + 'Gp11 USB gamepad.png',
    }
    ,
    {
        id: 16,
        productName: "Quilted Satin Jacket",
        price: 660,
        quantity: 10,
        image: baseImageURL + 'Quilted Satin Jacket.png'
    }
   ]
}

export default product;