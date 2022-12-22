const categories = [
    {name: "Exploring"},
    {name: "Hiking"},
    {name: "Biking"},
    {name: "Water"},
    {name: "Beach"},
    {name: "Rockhounding"},
    {name: "Urban"},
    {name: "Family-Friendly"},
    {name: "Pet-Friendly"},
    {name: "No or low cost"}
]

const adventures = [
    { 
        userId: 1,
        title: "Rope Swinging at Mona Ponds",
        locPin: "",
        locDetails: "Mona, Utah",
        cost: 0,
        costNotes: "Public pond, no parking or entrance fees required",
        summary: "Spend the day paddleboarding, fishing, picknicking, and rope-swinging at this beautiful pond that's not too far off the beaten path",
        extras: "Bring fishing gear, kayaks, towels, bug spray, and your camera",
        imageUrl: "http://localhost:3000/images/mona-ponds.jpg",
        link: "https://www.santaquin.org/community/page/mona-reservoir-and-burraston-ponds",
        private: false
    },
    {
        userId: 1,
        title: "Tide Pool Hunting in La Jolla",
        locPin: "",
        locDetails: "San Diego, California",
        cost: 0,
        costNotes: "Public beach so no entrance fees and parking is busy, but free as well",
        summary: "Hunt throught tidepools for hermit crabs, anenomes, and small fish",
        extras: "See more at low tide, no supplies needed except shoes that are good for walking on slick rocks",
        imageUrl: "http://localhost:3000/images/la-jolla-tide-pools.jpg",
        link: "https://lajolla.com/article/la-jolla-tide-pools-complete-guide/",
        private: false
    },
    {
        userId: 1,
        title: "Hike Canyonlands National Park",
        locPin: "",
        locDetails: "Canyonlands, Utah",
        cost: 3000,
        costNotes: "Park entrance fee is $30/vehicle and the pass is good for 7 days",
        summary: "Take in the breathtaking scenery of Canyonlands while hiking on one of the many park trails",
        extras: "Going in the off-season can mean muddy trails and cooler weather, but also fewer crowds and stunning contrast between the red rock and the white snow.",
        imageUrl: "http://localhost:3000/images/canyonlands.jpg",
        link: "https://www.visitutah.com/Articles/wild-horses-in-the-west-desert",
        private: false
    }, 
    {
        userId: 1,
        title: "Watch the Wild Horses",
        locPin: "",
        locDetails: "West Desert, Utah",
        cost: 0,
        costNotes: "Just gas money",
        summary: "Take a drive to look for the a wild horse herd in the west desert of Utah",
        extras: "Make sure your tank is full of gas, there are no facilities for many miles, the herds move around but are frequently spotted near the Simpson Springs camping area on your way to the Dugway Geode Beds. ",
        imageUrl: "http://localhost:3000/images/wild-horses.jpg",
        link: "https://www.nps.gov/cany/index.htm",
        private: false
    }, 
    {
        userId: 1,
        title: "Hill Aerospace Museum",
        locPin: "",
        locDetails: "Hill Air Force Base, Utah",
        cost: 0,
        costNotes: "No parking or entrance fees, you can choose to make a donation",
        summary: "View more than 70 aircraft, many artifacts, interactive displays, and learn so much history with a visit to Hill Aerospace Museum",
        extras: "Check the calendar on the website to coordinate your visit with extra events the museum hosts",
        imageUrl: "http://localhost:3000/images/hill-afb.jpg",
        link: "https://www.aerospaceutah.org/",
        private: false
    }, 
    {
        userId: 1,
        title: "Feed the Deer of Nara",
        locPin: "",
        locDetails: "Nara, Japan",
        cost: 0,
        costNotes: "The park is free to enter, you can purchase deer crackers to feed the deer from vendors throughout the park",
        summary: "Feel like you have stepped into another world while you wander the beautiful and ancient grounds of Nara Park with more than 1,000 deer roaming freely and explore the Kasuga Taisha Shrine.",
        extras: "Have a camera ready, and don't put the deer feed in your backpack, they will smell it and try to help themselves.",
        imageUrl: "http://localhost:3000/images/nara-deer.jpg",
        link: "https://narashikanko.or.jp/en/feature/deer/",
        private: false
    }, 
    {
        userId: 1,
        title: "Black Light Scorpion Hunting",
        locPin: "",
        locDetails: "St. George, Utah",
        cost: 1000,
        costNotes: "This activity is free, but you'll need a black light flashlight, they are around $10 on Amazon.",
        summary: "This adventure is not for the faint of heart, you'll be amazed at how much scorpions glow when they are hit by the black light.",
        extras: "Wear close toed shoes, sandy spots and by bushes are where we were able to see the most scorpions, it needs to be dark for this adventure. And, obviously, be careful and don't get pinched or stung!",
        imageUrl: "http://localhost:3000/images/scorpions.jpg",
        link: "https://www.nbcnews.com/id/wbna43027595",
        private: false
    }, 
    {
        userId: 1,
        title: "Strawberry Picking",
        locPin: "",
        locDetails: "Carlsbad, California",
        cost: 500,
        costNotes: "Entrance fee is $5 per person, you can pick and eat as many as you'd like, to bring them out of the fields is $12/bucket.",
        summary: "Probably the sweetest adventure you'll have all summer. Pick and eat the juiciest strawberries you've ever eaten until your heart is content.",
        extras: "Come hungry!",
        imageUrl: "http://localhost:3000/images/strawberry-picking.jpg",
        link: "https://www.carlsbadstrawberrycompany.com/strawberry",
        private: false
    },
    { 
        userId: 1,
        title: "Ice Fishing",
        locPin: "",
        locDetails: "Henry's Lake, Idaho",
        cost: 1400,
        costNotes: "No fee to fish on the lake, obviously, if you don't have it you'll need fishing to purchase ice fishing gear. Fishing licenses for Idaho are $13.50/day plus around $6/day to add on additional days.",
        summary: "Hook a big one out on the ice to a backdrop of big skies and majestic mountains.",
        extras: "Make sure the ice is safely thick",
        imageUrl: "http://localhost:3000/images/henrys-lake-ice-fishing.jpg",
        link: "https://parksandrecreation.idaho.gov/parks/henrys-lake/",
        private: false
    }, 
    { 
        userId: 1,
        title: "Seashell Finding",
        locPin: "",
        locDetails: "Bimini, Bahamas",
        cost: 1000,
        costNotes: "Shuttle fee to public beach",
        summary: "Walk past the crowds and vendors and continue down the beach to find beautiful seashells washing on shore.",
        extras: "They don't let you bring them back on the cruise ship. ;) ",
        imageUrl: "http://localhost:3000/images/seashells.jpg",
        link: "https://www.bahamas.com/islands/bimini",
        private: false
    },
    { 
        userId: 1,
        title: "River Rafting at Flaming Gorge",
        locPin: "",
        locDetails: "Flaming Gorge, Utah",
        cost: 15000,
        costNotes: "Raft Rental fees and a rafting permit, 8-10 people can use a single raft",
        summary: "Spend an afternoon paddling down the Green River. Enjoy crystal clear water, fun rapids, great swim spots, and beautiful scenery.",
        extras: "The rapid intensity changes throughout the season, make sure you are aware of river conditions.",
        imageUrl: "http://localhost:3000/images/river-rafting.jpg",
        link: "https://www.flaminggorgecountry.com/Rafting",
        private: false
    },
    { 
        userId: 1,
        title: "Butterfly Biosphere at Thanksgiving Point",
        locPin: "",
        locDetails: "Lehi, Utah",
        cost: 2400,
        costNotes: "$24/ adult and $17/child, buying an annual Thanksgiving Point pass is a great value if you plan on visiting this or any of the other venues more than once or twice throughout a year",
        summary: "Learn about amazing insects in the bright and colorful butterly biosphere, the highlight is getting up close and personal with the butterflies.",
        extras: "There are lots more insects besides butterlies to discover here. Also an indoor nature-themed playground for younger visitors, and interactive events throughout the day",
        imageUrl: "http://localhost:3000/images/butterflies.jpg",
        link: "https://thanksgivingpoint.org/attractions-tickets/butterfly-biosphere/",
        private: false
    },
]

const categorizations = [
    {
        categoryId: 4,
        adventureId: 1
    },
    {
        categoryId: 8,
        adventureId: 1
    },
    {
        categoryId: 10,
        adventureId: 1
    },
    {
        categoryId: 5,
        adventureId: 2
    },
    {
        categoryId: 8,
        adventureId: 2
    },
    {
        categoryId: 10,
        adventureId: 2
    },
    {
        categoryId: 1,
        adventureId: 3
    },
    {
        categoryId: 2,
        adventureId: 3
    },
    {
        categoryId: 1,
        adventureId: 4
    },
    {
        categoryId: 8,
        adventureId: 4
    },
    {
        categoryId: 10,
        adventureId: 4
    },
    {
        categoryId: 7,
        adventureId: 5
    },
    {
        categoryId: 8,
        adventureId: 5
    },
    {
        categoryId: 10,
        adventureId: 5
    },
    {
        categoryId: 1,
        adventureId: 6
    },
    {
        categoryId: 8,
        adventureId: 6
    },
    {
        categoryId: 8,
        adventureId: 7
    },
    {
        categoryId: 10,
        adventureId: 7
    },
    {
        categoryId: 7,
        adventureId: 8
    },
    {
        categoryId: 8,
        adventureId: 8
    },
    {
        categoryId: 4,
        adventureId: 9
    },
    {
        categoryId: 1,
        adventureId: 10
    },
    {
        categoryId: 5,
        adventureId: 10
    },
    {
        categoryId: 1,
        adventureId: 11
    },
    {
        categoryId: 4,
        adventureId: 11
    },
    {
        categoryId: 7,
        adventureId: 12
    },
    {
        categoryId: 8,
        adventureId: 12
    }
]


const seed = async() => {
    const {Category, Adventure, Categorization} = require("./util/models")
    // await Category.bulkCreate(categories)
    // await Adventure.bulkCreate(adventures)
    // await Categorization.bulkCreate(categorizations)
    return
}

module.exports = {seed}