import 'bootstrap-icons/font/bootstrap-icons.css';

const CardGrid = () => {
  const cards = [
    {
      icon: './images/web logo.png',
      title: 'UI/UX Design',
      description:
        'User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style.',
      imageUrl: './images/web.avif',
    },
    {
      icon: './images/angular logo.png',
      title: 'Angular',
      description:
        'Angular is a development platform, built on TypeScript. As a platform, Angular includes a component-based framework.',
      imageUrl: './images/angular.png',
    },
    {
      icon: './images/react logo.png',
      title: 'React JS',
      description:
        'ReactJS is an open-source JavaScript library used to create user interfaces in a declarative and efficient way.',
      imageUrl: './images/react.png',
    },
    {
      icon: './images/java.jpg',
      title: 'Java',
      description:
        'Java is a programming language and a platform. Java is a high-level, robust, and secure programming language.',
      imageUrl: './images/java.jpg',
      
    },
    {
      icon: './images/Python-logo.png',
      title: 'Python',
      description:
        'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability.',
      imageUrl: './images/python.jpg',
    },
    {
      icon: './images/php logo.jpg',
      title: 'PHP',
      description:
        'PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language.',
      imageUrl: './images/php.jpg',
    },
  ];

  return (
    <>
<h2 className='text-center text-3xl font-bold mt-14 mb-5 text-blue-950'>Internship Technologies</h2>
<div className="container mx-auto p-6 grid grid-cols-1 lg:w-[80%]  md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-md bg-white p-3 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative overflow-hidden ">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-48 object-cover  transform transition-transform duration-300 group-hover:scale-110"
            />
            
          </div>
          <div className="absolute top-44 left-6 bg-transparent  w-16 h-16 p-1 bg-white rounded-full shadow-md">
              <img className='rounded-full ' src={`${card.icon}`}></img>
            </div>
          <div className="mt-10  p-6">
            <h3 className="text-2xl  tracking-wider text-gray-800">{card.title}</h3>
            <p className="text-md tracking-widest text-gray-600 mt-2">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default CardGrid;
