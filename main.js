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
const modalContainer1 = document.getElementById('modalContainer1');
const modalContainer2 = document.getElementById('modalContainer2');
const modalContainer3 = document.getElementById('modalContainer3');
const modalContainer4 = document.getElementById('modalContainer4');
const modalContainer5 = document.getElementById('modalContainer5');
const modalContainer6 = document.getElementById('modalContainer6');
const modalContainer7 = document.getElementById('modalContainer7');
const modalContainer8 = document.getElementById('modalContainer8');
const modalContainer9 = document.getElementById('modalContainer9');
const modalContainer10 = document.getElementById('modalContainer10');
const modalContainer11 = document.getElementById('modalContainer11');
const modalContainer12 = document.getElementById('modalContainer12');

// back buttons for each flower icon
const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');
const back3 = document.getElementById('back3');
const back4 = document.getElementById('back4');
const back5 = document.getElementById('back5');
const back6 = document.getElementById('back6');
const back7 = document.getElementById('back7');
const back8 = document.getElementById('back8');
const back9 = document.getElementById('back9');
const back10 = document.getElementById('back10');
const back11 = document.getElementById('back11');
const back12 = document.getElementById('back12');


// Open/close daffodil (1)
daffodilBtn.addEventListener('click', function() {
    console.log('daffodil button clicked');
    modalContainer1.classList.add('show');
});
back1.addEventListener('click', function() {
    modalContainer1.classList.remove('show');
    console.log('daffodil button closed');
});

// Open/close daisy (2)
daisyBtn.addEventListener('click', function() {
    console.log('daisy button clicked');
    modalContainer2.classList.add('show');
});
back2.addEventListener('click', function() {
    modalContainer2.classList.remove('show');
    console.log('daisy button closed');
});

// Open/close lily (3)
lilyBtn.addEventListener('click', function() {
    console.log('lily button clicked');
    modalContainer3.classList.add('show');
});
back3.addEventListener('click', function() {
    modalContainer3.classList.remove('show');
    console.log('lily button closed');
});

// Open/close rose (4)
roseBtn.addEventListener('click', function() {
    console.log('rose button clicked');
    modalContainer4.classList.add('show');
});
back4.addEventListener('click', function() {
    modalContainer4.classList.remove('show');
    console.log('rose button closed');
});

// Open/close sunflower (5)
sunflowerBtn.addEventListener('click', function() {
    console.log('sunflower button clicked');
    modalContainer5.classList.add('show');
});
back5.addEventListener('click', function() {
    modalContainer5.classList.remove('show');
    console.log('sunflower button closed');
});

// Open/close poppy (6)
poppyBtn.addEventListener('click', function() {
    console.log('poppy button clicked');
    modalContainer6.classList.add('show');
});
back6.addEventListener('click', function() {
    modalContainer6.classList.remove('show');
    console.log('poppy button closed');
});

// Open/close geranium (7)
geraniumBtn.addEventListener('click', function() {
    console.log('geranium button clicked');
    modalContainer7.classList.add('show');
});
back7.addEventListener('click', function() {
    modalContainer7.classList.remove('show');
    console.log('geranium button closed');
});

// Open/close marigold (8)
marigoldBtn.addEventListener('click', function() {
    console.log('marigold button clicked');
    modalContainer8.classList.add('show');
});
back8.addEventListener('click', function() {
    modalContainer8.classList.remove('show');
    console.log('marigold button closed');
});

// Open/close chrysanthemum (9)
chrysanthemumBtn.addEventListener('click', function() {
    console.log('chrysanthemum button clicked');
    modalContainer9.classList.add('show');
});
back9.addEventListener('click', function() {
    modalContainer9.classList.remove('show');
    console.log('chrysanthemum button closed');
});

// Open/close pansy (10)
pansyBtn.addEventListener('click', function() {
    console.log('pansy button clicked');
    modalContainer10.classList.add('show');
});
back10.addEventListener('click', function() {
    modalContainer10.classList.remove('show');
    console.log('pansy button closed');
});

// Open/close carnation (11)
carnationBtn.addEventListener('click', function() {
    console.log('carnation button clicked');
    modalContainer11.classList.add('show');
});
back11.addEventListener('click', function() {
    modalContainer11.classList.remove('show');
    console.log('carnation button closed');
});

// Open/close orchid (12)
orchidBtn.addEventListener('click', function() {
    console.log('orchid button clicked');
    modalContainer12.classList.add('show');
});
back12.addEventListener('click', function() {
    modalContainer12.classList.remove('show');
    console.log('orchid button closed');
});