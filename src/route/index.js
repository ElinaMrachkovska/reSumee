// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================


var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, KamenetsPodilskij',
};

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
};

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
    work on a new project I learn the domain and try to understand the idea of the project. Good team
    player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },
    header,

    main:
    {
      hobbies: [
        {
          name: "Painting",
          isMain: true,
        },
        {
          name: "travell",
          isMain: true,
        },
        {
          name: "teaching",
          isMain: false,
        },
      ],

      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 5,
          isTop: false,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 7,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 8,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 6,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: false,
        },
        {
          name: 'PHP',
          point: null,
          isTop: false,
        },
      ],
    },
    footer,
  })
})
router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },
    header,

    main:
    {
      certificates: [
        {
          name: "Технік-технолог",
          id: 2889748,
        },
        {
          name: "Інженер-конструктор",
          id: 5864979,
        },
        {
          name: "Інженер-педагог",
          id: 10102356,
        },
      ],

      educations: [
        {
          name: 'Подільський спеціальний навчально-реабілітаційний соціально-економічний коледж',
          isEnd: true,
        },
        {
          name: 'Камянець-Подільський коледж культури і мистецтв',
          isEnd: true,
        },
        {
          name: 'ДВНЗ "Камянець-Подільський індустріальний коледж',
          isEnd: true,
        },
        {
          name: 'Фаховий коледж економіки, права та інформаційних технологій',
          isEnd: false,
        },
        {
          name: 'ВСП "Камянець-Подільський фаховий коледж харчової промисловості Національного університету харчових технологій"',
          isEnd: false,
        },
      ],
    },
    footer,
  })
})
// ================================================================
router.get('/work', function (req, res) {
  // res.render генерує нам HTML сторінку
  res.render('work', {
    //            ↙ cюди вводимо назву файлу з сontainer

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },
    header,

    main: {
      works: [
        {
          position: "Junior Fullstack Developer",
          company: {
            name: "IT Brains",
            url: "https://web.skillzrun.com/learn/130344",
          },
          duration: {
            from: "10.10.2022",
            to: null,
          },
          projectAmount: '3',

          projects:
            [
              {
                name: "Resume",
                url: "https://web.skillzrun.com/learn/130344",
                about: "VS code, JS",
                stackAmount: '3',
                stacks:
                  [
                    {
                      name: "React JS",
                    },
                    {
                      name: "HTML / CSS",
                    },
                    {
                      name: "Node js",
                    },
                  ],

                awardAmount: '2',
                awards:
                  [
                    {
                      name: 'Certificate QA',
                    },
                    {
                      name: 'The automated process of getting data for sites from data base',
                    },
                  ],
              },
            ],
        },
      ],
    },

    footer,

  })
})


// Підключаємо роутер до бек-енду
module.exports = router