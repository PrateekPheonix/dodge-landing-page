// local reviews data
const reviews = [
  {
    id: 1,
    nameowner: "Susan Smith",
    own: "Owned 9 years",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I traded a 2012 Challenger RT Classic (owned 9 years and 2 months) for a 2021 Scat Pack Challenger.  I liked my old car so much that when I thought it was time to get a new one, I did, another Challenger.  You will not find a muscle car that is a smooth and quite, yet fast and powerful as a Challenger.   Yes, a Mustang and Camaro will be faster, but they will not look as nice or be as comfortable to ride in.  You can take a 300 mile road trip in a Challenger and not be tired or beat up at the end of the day.   The 8 speed automatic transmission is supposed to be one of the best in the world.   I will agree, as it is also found in Mercedes and other high end cars.  The car had Brembo brakes and they do a great job.  I cannot say enough good things about this car.   Dodge is number 1 in initial quality by JD Powers.   I can understand why, since Dodge has been building the same car since 2008.   They go the bugs out long ago."
  },
  {
    id: 2,
    nameowner: "Anna Johnson",
    own: "Owned 5 years",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "I purchased my SUPER STOCK after comparing the Nissan GTR, Z06 and stingray, ZL1 1LE and the Shelby GT500. 0-60 in 3.31 seconds is my fastest so far that I have went. The comfort of being able to just ride for hundreds of miles without cramping up is amazing. The throttle response is insane. The trunk has plenty of space which I find amazing. The surround sound system is incredible. I can say out of 10, MY SUPER STOCK is a 9.5. The only thing I didn't like was no power window. Everything else is perfect for me. "
  },
  {
    id: 3,
    nameowner: "Peter Jones",
    own: "Owned 3 months",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "We just purchased a brand new 2021 R/T Scat Pack and couldn't be happier! We had been looking for a while since we wanted a manual transmission, which are hard to come by these days. Now a manual is referred to as the 'millennial theft deterrent system' since younger people don't know how to drive a stick. The amount of power this 392 packs is amazing! 485 horsepower is nothing to play around with. I've had the backend almost come around on me a couple of times when we first got it. The interior is comfortable and stylish. It is so much fun to drive!"
  },
  {
    id: 4,
    nameowner: "Bill Anderson",
    own: "Owned 12 years",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "I had a 2013 RT Classic for over 5 years and I loved it. However, it was not very drivable in the snow. So, this year, I decided to get a 2021 GT with AWD. I was apprehensive about the V6 but, it does have 300HP after all. Although I’ve only had it a few weeks now, I really love this car. The V6 runs great and has plenty of power for a daily driver. I do love fast acceleration, and this car is plenty fast for a daily driver. (I do not need to do wheelies with a daily driver). "
  },
  {
    id: 5,
    nameowner: "Billy Jensen",
    own: "Owned 4 years",
    img:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    text:
      "This car never disappoints. Whether I want to relax and go for a leisure drive or I want to have some fun it has all the thrills. The interior level of quality is also top notch. I did change the exhaust for a Borla Atak. It gives such a beautiful sound without compromising on cabin drone. And the reason I mention the exhaust at all is because one of the best things about this car is how highly upgradable it is. Cheers I hope you enjoy yours as much as I do mine."
  },
];
// select items
const img = document.getElementById("person-img");
const nameowner = document.getElementById("nameowner");
const own = document.getElementById("own");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  nameowner.textContent = item.name;
  own.textContent = item.own;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  nameowner.textContent = item.nameowner;
  own.textContent = item.own;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});