// buttons for each flower icon
const daffodilBtn = document.getElementById('Ari');
const daisyBtn = document.getElementById('Tau');
const lilyBtn = document.getElementById('Gem');
const roseBtn = document.getElementById('Can');
const sunflowerBtn = document.getElementById('Leo');
const poppyBtn = document.getElementById('Vir');
const geraniumBtn = document.getElementById('Lib');
const marigoldBtn = document.getElementById('Sco');
const chrysanthemumBtn = document.getElementById('Sag');
const pansyBtn = document.getElementById('Cap');
const carnationBtn = document.getElementById('Aqu');
const orchidBtn = document.getElementById('Pis');

// Cap = pansy
// Sag = chrysanthemum
// Sco = marigold
// Lib = geranium
// Vir = poppy
// Leo = sunflower
// Can = rose
// Gem = lily
// Tau = daisy
// Ari = daffodil
// Pis = orchid
// Aqu = carnation

daffodilBtn.addEventListener('click', function() {
    userPicked('Ari');
});

daisyBtn.addEventListener('click', function() {
    userPicked('Tau');
});

lilyBtn.addEventListener('click', function() {
    userPicked('Gem');
});

roseBtn.addEventListener('click', function() {
    userPicked('Can');
});

sunflowerBtn.addEventListener('click', function() {
    userPicked('Leo');
});

poppyBtn.addEventListener('click', function() {
    userPicked('Vir');
});

geraniumBtn.addEventListener('click', function() {
    userPicked('Lib');
});

marigoldBtn.addEventListener('click', function() {
    userPicked('Sco');
});

chrysanthemumBtn.addEventListener('click', function() {
    userPicked('Sag');
});

pansyBtn.addEventListener('click', function() {
    userPicked('Cap');
});

carnationBtn.addEventListener('click', function() {
    userPicked('Aqu');
});

orchidBtn.addEventListener('click', function() {
    userPicked('Pis');
});

function userPicked(buttonName) {

    const zFlower = document.getElementById('zFlower');
    const zDate = document.getElementById('zDate');
    const zTags = document.getElementById('zTags');
    const zDescription = document.getElementById('zDescription');
    const zImage = document.getElementById('zImage');

    switch (buttonName) {

        case 'Ari':
            console.log('daffodil button clicked');
            speakers.src = `sounds/daffodil-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Daffodil';
            zDate.innerHTML = 'March 21-April 19';
            zTags.innerHTML = 'Hope, Rebirth, Spring';
            zDescription.innerHTML = 'Daffodils bloom each year following the cold winter months. You are resilient when faced with obstacles and continuously bounce back. Your persistence and ability to adapt to your surroundings are your true strengths.';
            zImage.src = 'graphics/daffodil-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#D1DE96";
        break;

        case 'Tau':
            console.log('daisy button clicked');
            speakers.src = `sounds/daisy-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Daisy';
            zDate.innerHTML = 'April 20-May 20';
            zTags.innerHTML = 'Innocence, Simplicity, Joy';
            zDescription.innerHTML = 'Your cheery, easygoing personality is what people love most about you! You have a positive outlook on life and choose to see the best in every situation, making you a true joy to be around.';
            zImage.src = 'graphics/daisy-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#ADE6E6";
        break;

        case 'Gem':
            console.log('lily button clicked');
            speakers.src = `sounds/lily-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Lily';
            zDate.innerHTML = 'May 21-June 21';
            zTags.innerHTML = 'Warmth, Gentleness, Compassion';
            zDescription.innerHTML = 'You have a natural ability to bring comfort to anyone seeking your help, and you always how to make others feel better. Your delicate touch makes people feel safe enough to confide in you and fully express themselves.';
            zImage.src = 'graphics/lily-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#F9DDE7";
        break;

        case 'Can':
            console.log('rose button clicked');
            speakers.src = `sounds/rose-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Rose';
            zDate.innerHTML = 'June 22-July 22';
            zTags.innerHTML = 'Love, Passion, Sophistication';
            zDescription.innerHTML = 'Guided by your emotions, you tend to think more with your heart than your head. You may appear guarded or closed off at first, but you just want to protect yourself from disappointment and heartbreak.';
            zImage.src = 'graphics/rose-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#F5B1B7";
        break;

        case 'Leo':
            console.log('sunflower button clicked');
            speakers.src = `sounds/sunflower-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Sunflower';
            zDate.innerHTML = 'July 23-August 22';
            zTags.innerHTML = 'Loyalty, Boldness, Longevity';
            zDescription.innerHTML = 'You shine bright for the world to see because you are unafraid to be your authentic self. You love meeting new people, and your warm, outgoing personality makes you a true joy to be around.';
            zImage.src = 'graphics/sunflower-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#F9D9A1";
        break;

        case 'Vir':
            console.log('poppy button clicked');
            speakers.src = `sounds/poppy-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Poppy';
            zDate.innerHTML = 'August 23-September 22';
            zTags.innerHTML = 'Vibrance, Creativity, Enthusiasm';
            zDescription.innerHTML = 'You are a natural leader, and your enthusiasm is apparent in everything you do! Your vibrant personality often makes you the center of attention, and you thrive when given the opportunity to shine.';
            zImage.src = 'graphics/poppy-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#F6BBAB";
        break;

        case 'Lib':
            console.log('geranium button clicked');
            speakers.src = `sounds/geranium-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Geranium';
            zDate.innerHTML = 'September 23-October 23';
            zTags.innerHTML = 'Mystery, Ingenuity, Nonchalance';
            zDescription.innerHTML = 'Geraniums grow in tight groups, and similarly, you like to stick to a small, close-knit group of acquaintances. The people closest to you will see the sensitive and clever sides of your personality, but to everyone else, you are a mystery.';
            zImage.src = 'graphics/geranium-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#EDAAA4";
        break;

        case 'Sco':
            console.log('marigold button clicked');
            speakers.src = `sounds/marigold-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Marigold';
            zDate.innerHTML = 'October 24-November 21';
            zTags.innerHTML = 'Creativity, Versatility, Motivation';
            zDescription.innerHTML = 'You are a hard-working person who is highly motivated to succeed. You strive to create harmony and incorporate creativity into all aspects of your life. You love taking on new challenges because you want to succeed.';
            zImage.src = 'graphics/marigold-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#F4B18D";
        break;

        case 'Sag':
            console.log('chrysanthemum button clicked');
            speakers.src = `sounds/chrysanthemum-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Chrysanthemum';
            zDate.innerHTML = 'November 22-December 21';
            zTags.innerHTML = 'Friendship, Sensitivity, Optimism';
            zDescription.innerHTML = 'You are the best friend anyone can ask for and a true beacon of light! You are sensitive and nurturing, and you choose to see the best in every situation.';
            zImage.src = 'graphics/chrysanthemum-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#D59884";
        break;

        case 'Cap':
            console.log('pansy button clicked');
            speakers.src = `sounds/pansy-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Pansy';
            zDate.innerHTML = 'December 22-January 19';
            zTags.innerHTML = 'Tenacity, Kindness, Thoughtfulness';
            zDescription.innerHTML = 'Pansies inspire reflection and contemplation. Likewise, you prefer thorough planning over jumping headfirst into a situation. You are ambitious and practical, which aids you in many facets of life.';
            zImage.src = 'graphics/pansy-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#D9C3FB";
        break;

        case 'Aqu':
            console.log('carnation button clicked');
            speakers.src = `sounds/carnation-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Carnation';
            zDate.innerHTML = 'January 20-February 18';
            zTags.innerHTML = 'Fascination, Remembrance, Stability';
            zDescription.innerHTML = 'Like carnations, which typically last longer than other flowers in a bouquet, people love that you are so dependable. You set high personal and career goals, but you always make time for the people that matter most.';
            zImage.src = 'graphics/carnation-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#EDB4B3";
        break;

        case 'Pis':
            console.log('orchid button clicked');
            speakers.src = `sounds/orchid-sound.mp3`;
            speakers.play();
            zFlower.innerHTML = 'Orchid';
            zDate.innerHTML = 'February 19-March 20';
            zTags.innerHTML = 'Altruism, Refinement, Uniqueness';
            zDescription.innerHTML = 'You seem reserved unless you are surrounded by the people you trust, and you do not like to stand out in a crowd. You stay true to who you are and do not conform to fit the social norm.';
            zImage.src = 'graphics/orchid-transparent.png';
            flowerModal.hidden = !flowerModal.hidden;
            document.getElementById('flowerModal').style.backgroundColor = "#EABFE7";
        break;
        default: console.log('A button was selected');
    }
}

const userSubmitBtn = document.getElementById('userSubmit');

userSubmitBtn.addEventListener('click', function() {
    //console.log('Submit button clicked!');

const userBday = new Date(document.getElementById('bday').value);
    //console.log(userBday);

    const whichMonth = userBday.getUTCMonth() + 1;
    //console.log(`Users month is: ${whichMonth}`);

    const whichDayOfMonth = userBday.getUTCDate();
    //console.log(`Users birth day is: ${whichDayOfMonth}`);

    // Zodiac Algorithm
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
    console.log(AstroSign);
    }

    console.log(AstroSign);
    userPicked(AstroSign);
});

const flowerModal = document.getElementById('flowerModal');
const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', function() {
    console.log('Closed flower modal');
    flowerModal.hidden = !flowerModal.hidden;
});


// Open & Close sunModal
const helpBtn = document.getElementById('helpBtn');
const sunModal = document.getElementById('sunModal');
const closeBtn = document.getElementById('closeBtn');

helpBtn.addEventListener('click', function() {
    console.log('Click for help');
    speakers.src = `sounds/sun-sound.mp3`;
    speakers.play();
    sunModal.hidden = !sunModal.hidden;
});

closeBtn.addEventListener('click', function() {
    console.log('Closed sun modal');
    sunModal.hidden = !sunModal.hidden;
});