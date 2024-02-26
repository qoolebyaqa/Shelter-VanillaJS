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






// Carousel
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

  const BTN_LEFT = document.querySelector('.scrool_btn_left');
  const BTN_RIGHT = document.querySelector('.scrool_btn_right');
  const CAROUSEL = document.querySelector('.carousel');
  let newArr = petsArr;
  let RIGHT_ITEMS = document.querySelector('.pets_container_right');
  let LEFT_ITEMS = document.querySelector('.pets_container_left');
  let popItem = document.querySelector('.popup_body');

  const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
  }
  const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight); 
  }

  

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

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);


  CAROUSEL.addEventListener('animationend', animationEvent => {
    if (animationEvent.animationName === 'move-left') {
        CAROUSEL.classList.remove('transition-left');
        document.querySelector('.pets_container').innerHTML = LEFT_ITEMS.innerHTML;
        
        document.querySelector('.pets_container').children[0].addEventListener('click', e => {
          const namePet = document.querySelector('.pets_container').children[0].children[1].innerText;
          for (let i = 0; i < petsArr.length; i++){
            if (namePet === petsArr[i].name){
              popItem.innerHTML = '';
              popItem.appendChild(createPopup(petsArr[i]));
              document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
              document.querySelector('.popup_passive').classList.remove('popup_wrapper');
              document.body.classList.add('body_active');
            }
          }
          
        })
        document.querySelector('.pets_container').children[1].addEventListener('click', e => {
          const namePet = document.querySelector('.pets_container').children[1].children[1].innerText;
          for (let i = 0; i < petsArr.length; i++){
            if (namePet === petsArr[i].name){
              popItem.innerHTML = '';
              popItem.appendChild(createPopup(petsArr[i]));
              document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
              document.querySelector('.popup_passive').classList.remove('popup_wrapper');
              document.body.classList.add('body_active');
            }
          }
        })
        document.querySelector('.pets_container').children[2].addEventListener('click', e => {
          const namePet = document.querySelector('.pets_container').children[2].children[1].innerText;
          for (let i = 0; i < petsArr.length; i++){
            if (namePet === petsArr[i].name){
              popItem.innerHTML = '';
              popItem.appendChild(createPopup(petsArr[i]));
              document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
              document.querySelector('.popup_passive').classList.remove('popup_wrapper');
              document.body.classList.add('body_active');
            }
          }
        })

        LEFT_ITEMS.innerHTML = '';

        let first_name = document.querySelector('.pets_container').children[0].children[1].innerText;
        let second_name = document.querySelector('.pets_container').children[1].children[1].innerText;
        let third_name = document.querySelector('.pets_container').children[2].children[1].innerText;
        const arr_names = [first_name, second_name, third_name];

        const arrCollection = [];
        for (let i = 0; i < petsArr.length; i++) {
          if (petsArr[i].name !== arr_names[0] && petsArr[i].name !== arr_names[1] && petsArr[i].name !== arr_names[2]) {
            arrCollection.push(petsArr[i]);
          }
        }

        let randomArr = [];
        let random_value = 0;
        while (randomArr.length < 3) {
          random_value = Math.floor(Math.random() * 4);
          if (!(randomArr.includes(random_value))) {
            randomArr.push(random_value);
          }
        }
        LEFT_ITEMS.appendChild(createCard(arrCollection[randomArr[0]]));
        LEFT_ITEMS.appendChild(createCard(arrCollection[randomArr[1]]));
        LEFT_ITEMS.appendChild(createCard(arrCollection[randomArr[2]]));

        newArr = [];
      }
    else {
        CAROUSEL.classList.remove('transition-right');
        document.querySelector('.pets_container').innerHTML = RIGHT_ITEMS.innerHTML;
        RIGHT_ITEMS.innerHTML = '';

        document.querySelector('.pets_container').children[0].addEventListener('click', e => {
          const namePet = document.querySelector('.pets_container').children[0].children[1].innerText;
          for (let i = 0; i < petsArr.length; i++){
            if (namePet === petsArr[i].name){
              popItem.innerHTML = '';
              popItem.appendChild(createPopup(petsArr[i]));
              document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
              document.querySelector('.popup_passive').classList.remove('popup_wrapper');
              document.body.classList.add('body_active');
            }
          }
          
        })
        document.querySelector('.pets_container').children[1].addEventListener('click', e => {
          const namePet = document.querySelector('.pets_container').children[1].children[1].innerText;
          for (let i = 0; i < petsArr.length; i++){
            if (namePet === petsArr[i].name){
              popItem.innerHTML = '';
              popItem.appendChild(createPopup(petsArr[i]));
              document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
              document.querySelector('.popup_passive').classList.remove('popup_wrapper');
              document.body.classList.add('body_active');
            }
          }
        })
        document.querySelector('.pets_container').children[2].addEventListener('click', e => {
          const namePet = document.querySelector('.pets_container').children[2].children[1].innerText;
          for (let i = 0; i < petsArr.length; i++){
            if (namePet === petsArr[i].name){
              popItem.innerHTML = '';
              popItem.appendChild(createPopup(petsArr[i]));
              document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
              document.querySelector('.popup_passive').classList.remove('popup_wrapper');
              document.body.classList.add('body_active');
            }
          }
        })
        
        let first_name = document.querySelector('.pets_container').children[0].children[1].innerText;
        let second_name = document.querySelector('.pets_container').children[1].children[1].innerText;
        let third_name = document.querySelector('.pets_container').children[2].children[1].innerText;
        const arr_names = [first_name, second_name, third_name];

        const arrCollection = [];
        for (let i = 0; i < petsArr.length; i++) {
          if (petsArr[i].name !== arr_names[0] && petsArr[i].name !== arr_names[1] && petsArr[i].name !== arr_names[2]) {
            arrCollection.push(petsArr[i]);
          }
        }

        let randomArr = [];
        let random_value = 0;
        while (randomArr.length < 3) {
          random_value = Math.floor(Math.random() * 4);
          if (!(randomArr.includes(random_value))) {
            randomArr.push(random_value);
          }
        }
        RIGHT_ITEMS.appendChild(createCard(arrCollection[randomArr[0]]));
        RIGHT_ITEMS.appendChild(createCard(arrCollection[randomArr[1]]));
        RIGHT_ITEMS.appendChild(createCard(arrCollection[randomArr[2]]));

        newArr = [];

    }
 
    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
  
  })

  //Pop-ups

  
  

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


  document.querySelector('.pets_container').children[0].addEventListener('click', e => {
    const namePet = document.querySelector('.pets_container').children[0].children[1].innerText;
    for (let i = 0; i < petsArr.length; i++){
      if (namePet === petsArr[i].name){
        popItem.innerHTML = '';

        popItem.appendChild(createPopup(petsArr[i]));
        document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
        document.querySelector('.popup_passive').classList.remove('popup_wrapper');
        document.body.classList.add('body_active');
      }
    }
    
  })
  document.querySelector('.pets_container').children[1].addEventListener('click', e => {
    const namePet = document.querySelector('.pets_container').children[1].children[1].innerText;
    for (let i = 0; i < petsArr.length; i++){
      if (namePet === petsArr[i].name){
        popItem.innerHTML = '';
        popItem.appendChild(createPopup(petsArr[i]));
        document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
        document.querySelector('.popup_passive').classList.remove('popup_wrapper');
        document.body.classList.add('body_active');
      }
    }
  })
  document.querySelector('.pets_container').children[2].addEventListener('click', e => {
    const namePet = document.querySelector('.pets_container').children[2].children[1].innerText;
    for (let i = 0; i < petsArr.length; i++){
      if (namePet === petsArr[i].name){
        popItem.innerHTML = '';
        popItem.appendChild(createPopup(petsArr[i]));
        document.querySelector('.popup_passive').classList.add('popup_wrapper_active');
        document.querySelector('.popup_passive').classList.remove('popup_wrapper');
        document.body.classList.add('body_active');
      }
    }
  })

  document.querySelector('.popup_close').addEventListener('click', () => {
    document.querySelector('.popup_passive').classList.add('popup_wrapper');
    document.querySelector('.popup_passive').classList.remove('popup_wrapper_active');
    document.body.classList.remove('body_active');
  })

  document.querySelector('.popup_body').addEventListener('click', () => {
    document.querySelector('.popup_passive').classList.add('popup_wrapper');
    document.querySelector('.popup_wrapper').classList.remove('popup_wrapper_active');
    document.body.classList.remove('body_active');
  })


  





  
  
  


