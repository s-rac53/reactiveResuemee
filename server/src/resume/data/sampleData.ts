import { Resume } from '../entities/resume.entity';

const sampleData: Partial<Resume> = {
  basics: {
    name: 'Alexis Jones',
    email: 'alexis.jones@gmail.com',
    phone: '+1 800 1200 3820',
    birthdate: '1995-08-06',
    photo: {
      url: `https://i.imgur.com/40gTnCx.jpg`,
      filters: {
        size: 128,
        shape: 'rounded-square',
        grayscale: false,
        border: false,
      },
      visible: true,
    },
    placeofbirth:'Bronx, New York',
    genderandnationality: 'FEMALE AND AMERICAN',
    location:'Stuttgard, Baden-Württemberg, Ollenhauer Str. 51, Germany, 70376',
    profiles: [],
  },
  sections: {
    work: {
      id: 'work',
      name: 'Work Experience',
      type: 'basic',
      items: [
        {
          id: 'fe280c61-9d92-4dba-8a08-274866470096',
          url: 'https://www.espritcam.com',
          date: '2015-09-1 - Present',
          name: 'DP Technology Corp.',
          summary:
            '- Manage website development projects from initial design through completion, optimizing all cross-browser and multi-platform compatibility.\n- Work closely with programmers and clients to meet project requirements, goals, and desired functionality.\n- Develop and integrate customized themes into WordPress, PHP-Fusion, and Concrete5.\nConduct training for clients on handling website content management systems.\n- Enable site-wide promotions by programming HTML5 canvases to animate particles on web backgrounds.',
          position: 'Frontend Developer, Stuttgart DE',
	  about: '',
        },
        {
          id: '285d78f8-df56-4569-ba6b-cff5ebe5381e',
          url: 'https://www.vokophone.com',
          date:  '2015-07-31 - 2011-05-31',
          name: 'Voko Communications',
          summary:
            '- Developed websites from front to backend using PHP, JavaScript, and HTML.\n- Enhanced user experience and accomplish webpage objectives by creating site structure, navigation, page optimization, and graphics integration.\n- Implemented enhancements that improved web functionality and responsiveness.\n- Designed and maintained both corporate and client websites, using scripting languages and content management systems including WordPress.',
          position: 'Frontend Developer',
	  about: '',
        },
      ],
      columns: 1,
      visible: true,
    },
    professional: {
      id: 'professional',
      name: 'Professional Trainings',
      type: 'basic',
      items: [
        {
          summary: '',
          id: '657cadb0-c07d-4a35-8351-9079598c7ac0',
        },
      ],
      columns: 3,
      visible: true,
    },
    skills: {
      id: 'skills',
      name: 'Skills',
      type: 'basic',
      items: [
        {
          id: 'e27660b2-2b0f-48b0-9b04-3597f0282d06',
          skills: 'ReactJS, HTML/CSS, jQuery, PHP',
          
        },
      ],
      columns: 2,
      visible: true,
    },
    projects: {
      id: 'projects',
      name: 'Projects',
      type: 'basic',
      items: [
        {
          summary:
            '- Created a content management system serving as a client interface that reduced download times by 30%.\n- Developed new admin panel, which improved internal operating efficiency by over 40%.\n- Created comprehensive testing regime using RSpec to ensure bug-free code.\n- Rebuilt entire website with up to date technologies and frameworks.',
          id: '8c12add5-605a-449f-a8a6-e7625c702e60',
        },
        
      ],
      columns: 1,
      visible: true,
    },
    education: {
      id: 'education',
      name: 'Education',
      type: 'basic',
      items: [
        {
          id: '3f0eded8-ee1f-4c0e-b4a7-7a0811c150db',
          url: 'https://www.greenriver.edu',
          date: 'Present - 2011-01-04T23:00:00.000Z',
          score: 'Honors: cum laude (GPA: 3.6/4.0)',
          degree: 'Bachelor of Science',
          courses: ['Data Structures and Algorithms', 'Logic Design'],
          summary: '',
          institution: 'Green River College',
	  dateofpassing: '09/2016',
        },
        {
          id: 'e4977e01-25bf-4524-95c4-20c77c3cf700',
          url: 'https://www.lsu.edu',
          date: '2010-12-31T23:00:00.000Z - 2008-01-31T23:00:00.000Z',
          score: 'Baton Rouge, LA',
          degree: 'Bachelor of Arts',
          courses: ['Copywriting', 'Product Analysis'],
          summary: '',
          institution: 'Louisiana State University',
	  dateofpassing: '05/07/2020',
        },
      ],
      columns: 2,
      visible: true,
    },
    interests: {
      id: 'interests',
      name: 'Hobbies',
      type: 'basic',
      items: [
        {
          name: 'Video Games, Football, AI, Mindfulness',
          id: 'ddebb0e1-0a49-4ca6-be8a-956f10f62307',
        },
      ],
      columns: 2,
      visible: true,
    },
    languages: {
      id: 'languages',
      name: 'Languages',
      type: 'basic',
      items: [
        {
          language: 'English',
          entry: 'Profficient',
          id: 'dd9eb2b8-2956-463b-b0b1-0ffef84f9fc2',
        },
        {
          name: 'German',
          entry: 'B1 (Intermediate)',
          id: '6cf99d85-4efc-4ff8-9a7f-e76abd2d2857',
        },
      ],
      columns: 2,
      visible: true,
    },
    vocational: {
      id: 'vocational',
      name: 'Vocational Trainings',
      type: 'basic',
      items: [
	   {
	date: '2019 - 2018',
	company: 'Amazon',
	organization: '',
	id: '2wdfsfse-wet555-d127hhn-jghnd43erg53',
      },
      ],
      columns: 2,
      visible: true,
    },
    extracurricular: {
      id: 'extracurricula',
      name: 'Extra Curricular Activities',
      type: 'basic',
      items: [
        {
          summary:
            'Lorem ipsum dolor sit amet, **consectetur adipiscing elit.** Nam scelerisque ac metus sit amet tempor. Sed luctus dui fermentum aliquet dapibus.',
          id: '5a114a83-b62c-4b90-a0ef-1ab5516dc0dd',
        },
      ],
      columns: 2,
      visible: true,
    },
    entrance: {
      id: 'entrance',
      name: 'entrance exams',
      type: 'basic',
      items: [],
      columns: 2,
      visible: true,
    },
  },  
    
  metadata: {
    css: {
      value: '/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}',
      visible: false,
    },
    locale: 'en',
    date: {
      format: 'MMMM DD, YYYY',
    },
    theme: {
      text: '#000000',
      primary: '#1682cf',
      background: '#ffffff',
    },
    layout: [
      [
        ['work', 'education'],
        ['extracurricular', 'vocational'],
      ],
      [
        ['skills', 'professional','entrance'],
        [ 'interests', 'languages','projects'],
      ],
    ],
    template: 'kakuna',
    typography: {
      size: {
        body: 14,
        heading: 28,
      },
      family: {
        body: 'Open Sans',
        heading: 'Open Sans',
      },
    },
  },
 
  public: true,
};

export default sampleData;
