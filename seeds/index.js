const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers')
const Campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp');

// To check the database is connected successfully
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log('Database connected')
})

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async()=>{
    await Campground.deleteMany({});
    for(let i = 0; i < 200; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground ({
            author: '66bd0aa3675363847bf98aec',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate velit iusto eum iste magnam impedit praesentium nesciunt rerum maiores. Odio quas, nostrum magnam asperiores vel nesciunt repudiandae maiores laudantium.",
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
            ]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/dnjftlkm6/image/upload/v1723900530/YelpCamp/xkt1omkdnu2ybv8nhk44.jpg',
                  filename: 'YelpCamp/xkt1omkdnu2ybv8nhk44',
                },
                {
                  url: 'https://res.cloudinary.com/dnjftlkm6/image/upload/v1723900531/YelpCamp/r7cgehrcte8v7h8n0rej.jpg',
                  filename: 'YelpCamp/r7cgehrcte8v7h8n0rej',
                }
              ]
        })
        await camp.save()
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})