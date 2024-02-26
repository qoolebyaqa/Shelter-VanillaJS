// Burger-menu
const burger = document.querySelector('.header_burger');
const burgerBlock = document.querySelector('.burger_navigation');
const burgerLogo = document.querySelector('.logo_top');
const burgerBack = document.querySelector('.burger_backgroud');

burger.addEventListener('click', () => {
    burger.classList.toggle('header_burger_active');
    burgerBlock.classList.toggle('burger_navigation_active');
    burgerBack.classList.toggle('burger_backgroud_active')
    document.querySelector('.logo_top').classList.toggle('inactive');
    document.body.classList.toggle('body_active');
})

burgerBack.addEventListener('click', e => {
  burger.classList.remove('header_burger_active');
  burgerBlock.classList.remove('burger_navigation_active');
  burgerBack.classList.remove('burger_backgroud_active');
  document.querySelector('.logo_top').classList.remove('inactive');
  document.body.classList.remove('body_active');
})


// Carousel, popups, pangination 
const petsArr = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets_jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets_woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets_katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn't fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

const createCard = (petsObj) => {
    const card = document.createElement('div');
    card.classList.add('cute_animal');
    const card_img = document.createElement('img');
    card_img.classList.add('animal');
    card_img.src = petsObj.img;
    const card_p = document.createElement('p');
    card_p.classList.add('animal_name');
    card_p.innerText = petsObj.name;
    const card_btn = document.createElement('button');
    card_btn.classList.add('button_below_animal');
    card_btn.innerText = "Learn more";
    card.appendChild(card_img);
    card.appendChild(card_p);
    card.appendChild(card_btn);
    return card;
    }

const createPopup = (popObj) => {
  const pop_content = document.createElement('div');
  pop_content.classList.add('popup_content');

  const pop_img = document.createElement('img');
  pop_img.classList.add('popup_pic');
  pop_img.src = popObj.img;
  const pop_div = document.createElement('div');
  pop_div.classList.add('popup_text');

  const pop_h2 = document.createElement('h2');
  pop_h2.classList.add('popup_name');
  pop_h2.innerText = popObj.name;
  pop_div.appendChild(pop_h2);

  const pop_p1 = document.createElement('p');
  pop_p1.classList.add('popup_title');
  pop_p1.innerText = popObj.breed;
  pop_div.appendChild(pop_p1);

  const pop_p2 = document.createElement('p');
  pop_p2.classList.add('popup_subtitle');
  pop_p2.innerText = popObj.description;
  pop_div.appendChild(pop_p2);

  const pop_ul = document.createElement('ul');
  pop_ul.classList.add('popup_discript');
  pop_div.appendChild(pop_ul);

  const pop_li1 = document.createElement('li');
  pop_li1.classList.add('popup_item');
  const pop_span1 = document.createElement('span');
  pop_span1.classList.add('popup_key');
  pop_span1.innerText = 'Age: ';
  const pop_span2 = document.createElement('span');
  pop_span2.classList.add('popup_value');
  pop_span2.innerText = popObj.age;
  pop_li1.append(pop_span1, pop_span2);
  pop_ul.appendChild(pop_li1);

  const pop_li2 = document.createElement('li');
  pop_li2.classList.add('popup_item');
  const pop_span3 = document.createElement('span');
  pop_span3.classList.add('popup_key');
  pop_span3.innerText = 'Inoculations: ';
  const pop_span4 = document.createElement('span');
  pop_span4.classList.add('popup_value');
  pop_span4.innerText = popObj.inoculations;
  pop_li2.append(pop_span3, pop_span4);
  pop_ul.appendChild(pop_li2);

  const pop_li3 = document.createElement('li');
  pop_li3.classList.add('popup_item');
  const pop_span5 = document.createElement('span');
  pop_span5.classList.add('popup_key');
  pop_span5.innerText = 'Diseases: ';
  const pop_span6 = document.createElement('span');
  pop_span6.classList.add('popup_value');
  pop_span6.innerText = popObj.diseases;
  pop_li3.append(pop_span5, pop_span6);
  pop_ul.appendChild(pop_li3);

  const pop_li4 = document.createElement('li');
  pop_li4.classList.add('popup_item');
  const pop_span7 = document.createElement('span');
  pop_span7.classList.add('popup_key');
  pop_span7.innerText = 'Parasites: ';
  const pop_span8 = document.createElement('span');
  pop_span8.classList.add('popup_value');
  pop_span8.innerText = popObj.parasites;
  pop_li4.append(pop_span7, pop_span8);
  pop_ul.appendChild(pop_li4);

  const pop_btn = document.createElement('button');
  pop_btn.classList.add('popup_close');
  pop_btn.innerText = 'X';

  pop_content.appendChild(pop_img);
  pop_content.appendChild(pop_div);
  pop_content.appendChild(pop_btn);
  return pop_content;
}

  
  const petsCards = document.querySelectorAll('.cute_animal');
  let popItem = document.querySelector('.popup_body');

  function showPopup() {
    document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
    document.querySelector('.popup_passive').classList.remove('popup_wrapper');
    document.body.classList.add('body_active');
  }

  function hidePopup() {
    document.querySelector('.popup_passive').classList.remove('popup_wrapper_active');
    document.querySelector('.popup_passive').classList.add('popup_wrapper');
    document.body.classList.remove('body_active');
  }


  
  
  document.querySelector('.popup_close').addEventListener('click', hidePopup);
  document.querySelector('.popup_body').addEventListener('click', hidePopup);

  for (let k = 0; k < 8; k++){
    let namePet;
    document.querySelector('.pets_cards_visible').children[k].addEventListener('click', e => {
      namePet = document.querySelector('.pets_cards_visible').children[k].children[1].innerText;
      for (let i = 0; i < petsArr.length; i++){
        if (namePet === petsArr[i].name){
          popItem.innerHTML = '';
          popItem.appendChild(createPopup(petsArr[i]));
          showPopup()
        }
      }
    })
  }

  const BTN_LEFT_FORCE = document.querySelector('.scroll_left_force')
  const BTN_LEFT = document.querySelector('.scroll_left');
  let Page_counter = document.querySelector('.scrool_value');
  const BTN_RIGHT = document.querySelector('.scroll_right');
  const BTN_RIGHT_FORCE = document.querySelector('.scroll_right_force');
  const CAROUSEL = document.querySelector('.carousel');
  let counter = 1;
  
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
  }
  const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
  }

  
  BTN_RIGHT.addEventListener('click', moveRight);
    



 CAROUSEL.addEventListener('animationend', animationEvent => {
    if (animationEvent.animationName === 'move-left') {
        CAROUSEL.classList.remove('transition-left');

        document.querySelector('.pets_cards_visible').innerHTML = document.querySelector('.pets_cards_right').innerHTML;
        document.querySelector('.pets_cards_right').innerHTML = '';

        for (let k = 0; k < 8; k++){
          let namePet;
          document.querySelector('.pets_cards_visible').children[k].addEventListener('click', e => {
            namePet = document.querySelector('.pets_cards_visible').children[k].children[1].innerText;
            for (let i = 0; i < petsArr.length; i++){
              if (namePet === petsArr[i].name){
                popItem.innerHTML = '';
                popItem.appendChild(createPopup(petsArr[i]));
                showPopup()
              }
            }
          })
        }

        let sortedArr = shuffleArray(petsArr);
        sortedArr.forEach((value) => {
          document.querySelector('.pets_cards_right').appendChild(createCard(value));

        })

         
         
        document.querySelector('.scrool_value').innerHTML = counter - 1;
        counter -= 1;

        

        if (document.querySelector('.scrool_value').innerHTML === '1') {
          document.querySelector('.scrool_left').classList.remove('scrool_active');
          document.querySelector('.scrool_left').classList.add('scrool');
          document.querySelector('.scrool_left').removeEventListener('click', moveLeft);
          document.querySelector('.scrool_left_force').classList.remove('scrool_active');
          document.querySelector('.scrool_left_force').classList.add('scrool');
        }

        if (document.querySelector('.scrool_value').innerHTML < 6){
          BTN_RIGHT.classList.add('scrool_active');
          BTN_RIGHT.classList.remove('scrool');
          BTN_RIGHT.addEventListener('click', moveRight);
          BTN_RIGHT_FORCE.classList.add('scrool_active');
          BTN_RIGHT_FORCE.classList.remove('scrool');
        }

               

      }
    else {
        CAROUSEL.classList.remove('transition-right');
             

        document.querySelector('.pets_cards_visible').innerHTML = document.querySelector('.pets_cards_left').innerHTML;

        for (let k = 0; k < 8; k++){
          let namePet;
          document.querySelector('.pets_cards_visible').children[k].addEventListener('click', e => {
            namePet = document.querySelector('.pets_cards_visible').children[k].children[1].innerText;
            for (let i = 0; i < petsArr.length; i++){
              if (namePet === petsArr[i].name){
                popItem.innerHTML = '';
                popItem.appendChild(createPopup(petsArr[i]));
                showPopup()
              }
            }
          })
        }

        document.querySelector('.pets_cards_left').innerHTML = '';

        

        let sortedArr = shuffleArray(petsArr);
        sortedArr.forEach((value) => {
          document.querySelector('.pets_cards_left').appendChild(createCard(value));

        })

        document.querySelector('.scrool_value').innerHTML = counter + 1;
        counter += 1;
        document.querySelector('.scrool_left').classList.remove('scrool');
        document.querySelector('.scrool_left').classList.add('scrool_active');
        document.querySelector('.scrool_left_force').classList.remove('scrool');
        document.querySelector('.scrool_left_force').classList.add('scrool_active');
        
        if (document.querySelector('.scrool_value').innerHTML > 1) {
          document.querySelector('.scrool_left').addEventListener('click', moveLeft);
        }
        else {
          document.querySelector('.scrool_left').removeEventListener('click', moveLeft);
        }

        if (document.querySelector('.scrool_value').innerHTML === '6') {
          BTN_RIGHT.classList.remove('scrool_active');
          BTN_RIGHT.classList.add('scrool');
          BTN_RIGHT.removeEventListener('click', moveRight);
          BTN_RIGHT_FORCE.classList.remove('scrool_active');
          BTN_RIGHT_FORCE.classList.add('scrool');
        }
      
     }

     
    });
    

    for (let k = 0; k < 8; k++){
      let namePet;
      document.querySelector('.pets_cards_visible').children[k].addEventListener('click', e => {
        namePet = document.querySelector('.pets_cards_visible').children[k].children[1].innerText;
        for (let i = 0; i < petsArr.length; i++){
          if (namePet === petsArr[i].name){
            popItem.innerHTML = '';
            popItem.appendChild(createPopup(petsArr[i]));
            showPopup()
          }
        }
      })
    }



  
  
  
  