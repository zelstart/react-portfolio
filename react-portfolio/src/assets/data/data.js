import SocialNetWorkAPI from '../images/project-images/placeholder-image.jpg';
import TechBlog from '../images/project-images/the-tech-blog.png';
import ECommerceBackend from '../images/project-images/pexels-544917.jpg';
import WeatherDashboard from '../images/project-images/weather-dashboard.png';
import Tunecast from '../images/project-images/tunecast.png';
import MyRecipeBook from '../images/project-images/my-recipe-book.png';


const projectData = [
    {
        name: 'Social Network API',
        description: 'A RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and add other users to their friends list.',
        liveWebsite: null,
        githubRepo: 'https://github.com/zelstart/social-network-api',
        image: SocialNetWorkAPI,
    },
    {
        name: 'Tech Blog',
        description: 'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
        liveWebsite: 'https://zelstart-tech-blog-7449797524ee.herokuapp.com/',
        githubRepo: 'https://github.com/zelstart/social-network-api',
        image: TechBlog,
    },
    {
        name: 'e-commerce backend',
        description: 'This E-Commerce Back End is a straightforward backend solution designed for managing categories, products, and tags in an e-commerce system.',
        liveWebsite: null,
        githubRepo: 'https://github.com/zelstart/e-commerce-back-end',
        image: ECommerceBackend,
    },
    {
        name: 'Weather Dashboard',
        description: 'A simple weather dashboard that allows the user to search for a US city and view the current weather conditions as well as the 5-day forecast for that city.',
        liveWebsite: null,
        githubRepo: 'https://github.com/zelstart/weather-dashboard',
        image: WeatherDashboard,
    },
    {
        name: 'Tunecast // Group Project',
        description: 'A web application using the Weather API and the YouTube API to fetch the users weather forecast and provide them with a playlist of songs based on their weather conditions.',
        liveWebsite: 'https://zelstart.github.io/tunecast/',
        githubRepo: 'https://github.com/zelstart/tunecast',
        image: Tunecast,
    },
    {
        name: 'My Recipe Book // Group Project',
        description: 'A web application that allows users to keep their recipes, and even discover new ones submitted by other users.',
        liveWebsite: 'https://myrecipebook-ztc-5e1e57d00e6c.herokuapp.com/',
        githubRepo: 'https://github.com/zelstart/my-recipe-book',
        image: MyRecipeBook,
    },
];


const skills = [
    { name: 'HTML', classification: 'frontend' },
    { name: 'CSS', classification: 'frontend' },
    { name: 'JavaScript', classification: 'frontend' },
    { name: 'jQuery', classification: 'frontend' },
    { name: 'React', classification: 'frontend' },
    { name: 'Bootstrap', classification: 'frontend' },
    { name: 'Node.js', classification: 'backend' },
    { name: 'Express.js', classification: 'backend' },
    { name: 'MySQL', classification: 'backend' },
    { name: 'MongoDB', classification: 'backend' },
    { name: 'Mongoose', classification: 'backend' },
    { name: 'GraphQL', classification: 'backend' },
    { name: 'Apollo', classification: 'backend' },
    { name: 'Handlebars.js', classification: 'frontend' },
    { name: 'Sequelize', classification: 'backend' },
    { name: 'RESTful APIs', classification: 'backend' },
    { name: 'Progressive Web Applications', classification: 'frontend' },
    { name: 'Object Oriented Programming', classification: 'both' },
    { name: 'Model View Controller', classification: 'both' },
    { name: 'Test Driven Development', classification: 'both' },
];

export { projectData, skills }