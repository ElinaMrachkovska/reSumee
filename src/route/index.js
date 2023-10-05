// Підключаємо технологію express для back-end сервера
const express = require('express')

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
      text: '+3806700001233',
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

                awardAmount: "3",
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

// ================================================================

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: "program",

    excursion: {
      name: 'Cultural Tour',
      location: {
        city: 'Paris',
        country: 'France',
      },
      date: '2023-06-15',
      program: [
        {
          name: 'Museum Visit',
          type: 'Art',
          duration: 3,
          details: {
            museum: {
              name: 'The Louvre',
              location: {
                address: 'Rue de Rivoli',
                city: 'Paris',
                country: 'France',
              },
              exhibits: [
                {
                  name: 'Mona Lisa',
                  artist: 'Leonardo da Vinci',
                  description: 'Iconic portrait painting',
                  audio_guide: true,
                },
                {
                  name: 'Winged Victory of Samothrace',
                  artist: "No",
                  description:
                    'Ancient Greek statue of Nike, the goddess of victory',
                  audio_guide: "yes",
                },
              ],
            },
            guide: {
              name: 'Francois',
              language: 'French',
              rating: 4.8,
            },
          },
        },
        {
          name: 'Cultural Show',
          type: 'Music and Dance',
          duration: 2,
          details: {
            venue: {
              name: 'Moulin Rouge',
              location: {
                address: '82 Boulevard de Clichy',
                city: 'Paris',
                country: 'France',
              },
            },
            performers: [
              {
                name: 'Mireille Mathieu',
                type: 'Chanson singer',
              },
              {
                name: "Ballet de l'Opéra National de Paris",
                type: 'Classical ballet company',
              },
            ],
            guide: {
              name: 'Sophie',
              language: 'English',
              rating: 4.6,
            },
          },
        },
      ],
    },
  })
})
//_____________________________
router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    layout: "basic",
    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})
// ================================================================

router.get('/js', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {
    layout: "basic",

    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: "person",
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})


// ================================================================


// Підключаємо роутер до бек-енду
module.exports = router
