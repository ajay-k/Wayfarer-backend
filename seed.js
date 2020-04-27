require('dotenv').config()
const mongoose = require('mongoose')
const db = require('./models')


const cities = [
    {
        name: 'San Francisco',
        description: 'City by the Bay',
        image: 'https://qtxasset.com/2016-05/sanfrancisco1.jpg?d03luT2_JZoz7SlHPz83.SRgx2rFOaA5'
    },
    {

        name: 'New York',
        description: 'The Big Apple',
        image: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822'
    },
    {

        name: 'Paris',
        description: 'City of Romance',
        image: 'https://www.riotgames.com/darkroom/1440/b2b587d91d3c5d2922953ac62fbb2cb8:dfd0d5c2d07f981fb8cda29623b5e54e/paris.jpg'
    },
    {

        name: 'London',
        description: 'Home of Big Ben',
        image: 'https://metro.co.uk/wp-content/uploads/2016/07/ad_212177409.jpg?quality=80&strip=all'
    },
    {

        name: 'Manchester',
        description: 'big city in England',
        image: 'https://metro.co.uk/wp-content/uploads/2016/07/ad_212177409.jpg?quality=80&strip=all'
    },
];




const posts = [
    {
        title: 'What is Lorem Ipsum?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: 'https://qtxasset.com/2016-05/sanfrancisco1.jpg?d03luT2_JZoz7SlHPz83.SRgx2rFOaA5'
    },
    {

        title: 'Why do we use it',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        image: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822'
    },
    {

        title: 'Where does it come from?',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont',
        image: 'https://www.riotgames.com/darkroom/1440/b2b587d91d3c5d2922953ac62fbb2cb8:dfd0d5c2d07f981fb8cda29623b5e54e/paris.jpg'
    },
    {

        title: 'Where can I get some?',
        content: 'Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc',
        image: 'https://metro.co.uk/wp-content/uploads/2016/07/ad_212177409.jpg?quality=80&strip=all'
    },
];
// 1. Delete city from database

// db.City.deleteMany({}, (err, result) => {
//     if(err) {
//         console.log(err);
//         process.exit();
//     }
//     console.log(`Successfully deleted ${result.deletedCount} cities.`);
//     console.log('Creating new cities...');

//     db.City.create(cities, (err, newCities) => {
//         if(err) {
//             console.log(err);
//             process.exit();
//         }
//         console.log(`Successfully created ${newCities.length} cities.`);
//         process.exit();
//     });
// });

db.City.create(cities, (err, newCities) => {
        if(err) {
            console.log(err);
            process.exit();
        }
        console.log(`Successfully created ${newCities.length} cities.`);
        process.exit();
    });


// db.Post.create(posts, (err, newPosts) => {
//     if (err) {
//         console.log(err);
//         process.exit();
//     }
//     console.log(`Successfully created ${newPosts.length} posts.`);
//     process.exit();
// });    