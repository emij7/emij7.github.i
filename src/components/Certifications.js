const list = [
    {
        'id':1,
        'name': 'Curso de animaciones con CSS',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/2337-animaciones-css/diploma/detalle/'
    },
    {
        'id':2,
        'name':'Ruta de aprendizaje: Arquitectura Frontend',
        'plataforma': 'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/ruta/7-arquitecto-frontend-old/diploma/detalle/'
    },
    {
        'id':3,
        'name': 'Curso de asincronismo con Javascript',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/1789-asincronismo-js/diploma/detalle/'
    },
    {
        'id':4,
        'name': 'Curso básico de Javascript',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1814-basico-javascript/diploma/detalle/'
    },
    {
        'id':5,
        'name': 'Curso de CSS grid layout',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/2222-css-grid-layout/diploma/detalle/'
    },
    {
        'id':6,
        'name': 'Curso de ECMASCRIPT 6+ - Javascript',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1815-ecmascript-6/diploma/detalle/'
    },
    {
        'id':7,
        'name': 'Curso de diseño web con CSS grid y flexbox',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/2229-flexbox-css-grid/diploma/detalle/'
    },
    {
        'id':8,
        'name': 'Curso de frontend developer',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1640-frontend-developer/diploma/detalle/'
    },
    {
        'id':9,
        'name': 'Curso de fundamentos de Javascript',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/1339-fundamentos-javascript-2018/diploma/detalle/'
    },
    {
        'id':10,
        'name': 'Curso profesional de GIT y GITHUB',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/1557-git-github/diploma/detalle/'
    },
    {
        'id':11,
        'name': 'Curso definitivo de HTML y CSS',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/2008-html-css/diploma/detalle/'
    },
    {
        'id':12,
        'name': 'Curso práctico de HTML y CSS',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1758-html-practico/diploma/detalle/'
    },
    {
        'id':13,
        'name': 'Curso de introducción a la web: historia y funcionamiento de internet',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/2053-introweb/diploma/detalle/'
    },
    {
        'id':14,
        'name': 'Curso de Javascript Engine (V8) y el navegador',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1798-javascript-navegador/diploma/detalle/'
    },
    {
        'id':15,
        'name': 'Curso de responsive design: maquetación mobile first. HTML-CSS',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/2030-mobile-first/diploma/detalle/'
    },
    {
        'id':16,
        'name': 'Curso de programación orientada a objetos',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1474-oop/diploma/detalle/'
    },
    {
        'id':17,
        'name': 'Curso práctico de maquetación en CSS',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1744-practico-css/diploma/detalle/'
    },
    {
        'id':18,
        'name': 'Curso de preprocesadores de CSS',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1665-preprocesadores/diploma/detalle/'
    },
    {
        'id':19,
        'name': 'Curso de REACT.JS',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/1548-react/diploma/detalle/'
    },
    {
        'id':20,
        'name': 'Curso profesional de REACT hooks',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/2118-react-hooks/diploma/detalle/'
    },
    {
        'id':21,
        'name': 'Reto ROAD TO CODE 3.0',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/2379-roadtocode3-secret/diploma/detalle/'
    },
    {
        'id':22,
        'name': 'Curso de SASS',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/1244-sass/diploma/detalle/'
    },
    {
        'id':23,
        'name': 'Curso de closures y scope en Javascript',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/1807-scope/diploma/detalle/'
    },
    {
        'id':24,
        'name': 'Curso de transformaciones y transiciones en CSS',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/2336-transformaciones-transiciones-css/diploma/detalle/'
    },
    {
        'id':25,
        'name': 'Responsive Web Design',
        'plataforma':'FreeCodeCamp',
        'important':true,
        'link':'https://freecodecamp.org/certification/emij7/responsive-web-design'
    },
    {
        'id':26,
        'name': 'JavaScript Algorithms and Data Structures',
        'plataforma':'FreeCodeCamp',
        'important':true,
        'link':'https://freecodecamp.org/certification/emij7/javascript-algorithms-and-data-structures'
    },
    {
        'id':27,
        'name': 'Curso Práctico de Javascript',
        'plataforma':'Platzi',
        'important':false,
        'link':'https://platzi.com/p/emij7/curso/2327-javascript-practico/diploma/detalle/'
    },
    {
        'id':28,
        'name': 'Curso de Manipulación del DOM',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/2193-dom/diploma/detalle/'
    },
    {
        'id':29,
        'name': 'Curso de estructura de datos con Javascript',
        'plataforma':'Platzi',
        'important':true,
        'link':'https://platzi.com/p/emij7/curso/2156-estructuras-datos/diploma/detalle/'
    }

]
export default list;