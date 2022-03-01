// buttons for each flower icon
const daffodilBtn = document.getElementById('daffodil');
const daisyBtn = document.getElementById('daisy');
const lilyBtn = document.getElementById('lily');
const roseBtn = document.getElementById('rose');
const sunflowerBtn = document.getElementById('sunflower');
const poppyBtn = document.getElementById('poppy');
const geraniumBtn = document.getElementById('geranium');
const marigoldBtn = document.getElementById('marigold');
const chrysanthemumBtn = document.getElementById('chrysanthemum');
const pansyBtn = document.getElementById('pansy');
const carnationBtn = document.getElementById('carnation');
const orchidBtn = document.getElementById('orchid');

// modal containers
// const modalContainer1 = document.getElementById('modalContainer1');
// const modalContainer2 = document.getElementById('modalContainer2');
// const modalContainer3 = document.getElementById('modalContainer3');
// const modalContainer4 = document.getElementById('modalContainer4');
// const modalContainer5 = document.getElementById('modalContainer5');
// const modalContainer6 = document.getElementById('modalContainer6');
// const modalContainer7 = document.getElementById('modalContainer7');
// const modalContainer8 = document.getElementById('modalContainer8');
// const modalContainer9 = document.getElementById('modalContainer9');
// const modalContainer10 = document.getElementById('modalContainer10');
// const modalContainer11 = document.getElementById('modalContainer11');
// const modalContainer12 = document.getElementById('modalContainer12');

// back buttons for each flower icon
// const back1 = document.getElementById('back1');
// const back2 = document.getElementById('back2');
// const back3 = document.getElementById('back3');
// const back4 = document.getElementById('back4');
// const back5 = document.getElementById('back5');
// const back6 = document.getElementById('back6');
// const back7 = document.getElementById('back7');
// const back8 = document.getElementById('back8');
// const back9 = document.getElementById('back9');
// const back10 = document.getElementById('back10');
// const back11 = document.getElementById('back11');
// const back12 = document.getElementById('back12');

const zContainer = document.getElementById('zContainer');
const zFlower = document.getElementById('zFlower');
const zDate = document.getElementById('zDate');
const zTags = document.getElementById('zTags');
const zDescription = document.getElementById('zDescription');
const zImage = document.getElementById('zImage');

// Open/close daffodil (1)
daffodilBtn.addEventListener('click', function() {
    console.log('daffodil button clicked');
    // modalContainer1.classList.add('show');
    speakers.src = `sounds/daffodil-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Daffodil';
    zDate.innerHTML = 'March 21-April 20';
    zTags.innerHTML = 'Hope, Rebirth, Spring';
    zDescription.innerHTML = 'Daffodils bloom each year following the cold winter months. You are resilient when faced with obstacles and continuously bounce back. Your persistence and ability to adapt to your surroundings are your true strengths.';
    zImage.src = 'graphics/daffodil-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#D1DE96";
});
// back1.addEventListener('click', function() {
//     modalContainer1.classList.remove('show');
//     console.log('daffodil button closed');
// });

// Open/close daisy (2)
daisyBtn.addEventListener('click', function() {
    console.log('daisy button clicked');
    // modalContainer2.classList.add('show');
    speakers.src = `sounds/daisy-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Daisy';
    zDate.innerHTML = 'April 21-May 20';
    zTags.innerHTML = 'Innocence, Simplicity, Joy';
    zDescription.innerHTML = 'Your cheery, easygoing personality is what people love most about you! You have a positive outlook on life and choose to see the best in every situation.';
    zImage.src = 'graphics/daisy-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#ADE6E6";
});
// back2.addEventListener('click', function() {
//     modalContainer2.classList.remove('show');
//     console.log('daisy button closed');
// });

// Open/close lily (3)
lilyBtn.addEventListener('click', function() {
    console.log('lily button clicked');
    // modalContainer3.classList.add('show');
    speakers.src = `sounds/lily-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Lily';
    zDate.innerHTML = 'May 21-June 20';
    zTags.innerHTML = 'Warmth, Gentleness, Compassion';
    zDescription.innerHTML = 'You have a natural ability to bring comfort to anyone seeking your help. Your delicate touch makes people feel safe enough to confide in you.';
    zImage.src = 'graphics/lily-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#F9DDE7";
});
// back3.addEventListener('click', function() {
//     modalContainer3.classList.remove('show');
//     console.log('lily button closed');
// });

// Open/close rose (4)
roseBtn.addEventListener('click', function() {
    console.log('rose button clicked');
    // modalContainer4.classList.add('show');
    speakers.src = `sounds/rose-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Rose';
    zDate.innerHTML = 'June 21-July 22';
    zTags.innerHTML = 'Love, Passion, Sophistication';
    zDescription.innerHTML = 'Guided by your emotions, you tend to think with your heart. You may appear guarded or closed off at first, but the thorns exist to protect you from getting hurt.';
    zImage.src = 'graphics/rose-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#F5B1B7";
});
// back4.addEventListener('click', function() {
//     modalContainer4.classList.remove('show');
//     console.log('rose button closed');
// });

// Open/close sunflower (5)
sunflowerBtn.addEventListener('click', function() {
    console.log('sunflower button clicked');
    // modalContainer5.classList.add('show');
    speakers.src = `sounds/sunflower-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Sunflower';
    zDate.innerHTML = 'July 23-August 22';
    zTags.innerHTML = 'Loyalty, Boldness, Longevity';
    zDescription.innerHTML = 'You shine bright for the world to see because you are unafraid to be your authentic self. You love meeting new people, and your warm, outgoing personality makes you a true joy to be around.';
    zImage.src = 'graphics/sunflower-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#F9D9A1";
});
// back5.addEventListener('click', function() {
//     modalContainer5.classList.remove('show');
//     console.log('sunflower button closed');
// });

// Open/close poppy (6)
poppyBtn.addEventListener('click', function() {
    console.log('poppy button clicked');
    // modalContainer6.classList.add('show');
    speakers.src = `sounds/poppy-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Poppy';
    zDate.innerHTML = 'August 23-September 22';
    zTags.innerHTML = 'Vibrance, Creativity, Enthusiasm';
    zDescription.innerHTML = 'You are a natural leader, and your enthusiasm is apparent in everything you do! Your vibrant personality often makes you the center of attention, and you thrive under a spotlight.';
    zImage.src = 'graphics/poppy-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#F6BBAB";
});
// back6.addEventListener('click', function() {
//     modalContainer6.classList.remove('show');
//     console.log('poppy button closed');
// });

// Open/close geranium (7)
geraniumBtn.addEventListener('click', function() {
    console.log('geranium button clicked');
    // modalContainer7.classList.add('show');
    speakers.src = `sounds/geranium-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Geranium';
    zDate.innerHTML = 'August 23-September 22';
    zTags.innerHTML = 'Mystery, Ingenuity, Nonchalance';
    zDescription.innerHTML = 'Geraniums grow in tight groups, and similarly, you like to stick to a small, close-knit group of acquaintances. The people closest to you will see the sensitive and clever sides of your personality, but to everyone else, you are a mystery.';
    zImage.src = 'graphics/geranium-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#EDAAA4";
});
// back7.addEventListener('click', function() {
//     modalContainer7.classList.remove('show');
//     console.log('geranium button closed');
// });

// Open/close marigold (8)
marigoldBtn.addEventListener('click', function() {
    console.log('marigold button clicked');
    // modalContainer8.classList.add('show');
    speakers.src = `sounds/marigold-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Marigold';
    zDate.innerHTML = 'October 23-November 22';
    zTags.innerHTML = 'Creativity, Versatility, Motivation';
    zDescription.innerHTML = 'You are a hard-working person who is highly motivated to succeed. You strive to create harmony and incorporate creativity into all aspects of your life. You love taking on new challenges since they have the potential for success.';
    zImage.src = 'graphics/marigold-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#F4B18D";
});
// back8.addEventListener('click', function() {
//     modalContainer8.classList.remove('show');
//     console.log('marigold button closed');
// });

// Open/close chrysanthemum (9)
chrysanthemumBtn.addEventListener('click', function() {
    console.log('chrysanthemum button clicked');
    // modalContainer9.classList.add('show');
    speakers.src = `sounds/chrysanthemum-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Chrysanthemum';
    zDate.innerHTML = 'November 23-December 21';
    zTags.innerHTML = 'Friendship, Sensitivity, Optimism';
    zDescription.innerHTML = 'You are the best friend anyone can ask for and a true beacon of light! You are sensitive and nurturing, and you choose to see the best in every situation.';
    zImage.src = 'graphics/chrysanthemum-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#D59884";
});
// back9.addEventListener('click', function() {
//     modalContainer9.classList.remove('show');
//     console.log('chrysanthemum button closed');
// });

// Open/close pansy (10)
pansyBtn.addEventListener('click', function() {
    console.log('pansy button clicked');
    // modalContainer10.classList.add('show');
    speakers.src = `sounds/pansy-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Pansy';
    zDate.innerHTML = 'November 23-January 19';
    zTags.innerHTML = 'Tenacity, Kindness, Thoughtfulness';
    zDescription.innerHTML = 'Coming from a French word meaning "to think," pansies inspire reflection and contemplation. Likewise, you prefer thorough planning over jumping headfirst into a situation. You are ambitious and practical, which aids you in many facets of life.';
    zImage.src = 'graphics/pansy-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#D9C3FB";
});
// back10.addEventListener('click', function() {
//     modalContainer10.classList.remove('show');
//     console.log('pansy button closed');
// });

// Open/close carnation (11)
carnationBtn.addEventListener('click', function() {
    console.log('carnation button clicked');
    // modalContainer11.classList.add('show');
    speakers.src = `sounds/carnation-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Carnation';
    zDate.innerHTML = 'January 20-February 19';
    zTags.innerHTML = 'Fascination, Remembrance, Stability';
    zDescription.innerHTML = 'Like carnations, which typically last longer than other flowers in a bouquet, people love that you are so dependable. You set high personal and career goals, but you always make time for the people that matter most.';
    zImage.src = 'graphics/carnation-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#EDB4B3";
});
// back11.addEventListener('click', function() {
//     modalContainer11.classList.remove('show');
//     console.log('carnation button closed');
// });

// Open/close orchid (12)
orchidBtn.addEventListener('click', function() {
    console.log('orchid button clicked');
    // modalContainer12.classList.add('show');
    speakers.src = `sounds/orchid-sound.mp3`;
    speakers.play();
    zFlower.innerHTML = 'Orchid';
    zDate.innerHTML = 'February 20-March 20';
    zTags.innerHTML = 'Selflessness, Refinement, Uniqueness';
    zDescription.innerHTML = 'You don not like to stand out in a crowd. You seem reserved unless surrounded by the people you trust. You stay true to who you are and do not conform to fit the social norm.';
    zImage.src = 'graphics/orchid-transparent.png';
    modal.hidden = !modal.hidden;
    document.getElementById('modal').style.backgroundColor = "#EABFE7";
});
// back12.addEventListener('click', function() {
//     modalContainer12.classList.remove('show');
//     console.log('orchid button closed');
// });
