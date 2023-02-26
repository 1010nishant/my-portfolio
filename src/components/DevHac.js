import devhac from '../assets/img/devhac.jpeg'

export const DevHac = () => {
    const handleClick = () => {
      window.location.href = 'https://discord.gg/p4TWyft886';
    };

  return (
    <div className='devhac-box' id='community'>
    <div className='box2'>
      <img src={devhac} className="devhac" alt='discord'/> 
      <span>
      <h1 className='headline'>Join Our Community</h1>
      <p>
      This is a tech community where techy folks can share their knowledge and experiences with each other. here, you can see many updates regarding tech events, job opportunities, internships, Hackathon updates and Meetups Updates.
We have a variety of resources available, including notes and discussion forums. Our community also has a number of mentors, including IITians and working professionals, who are available to offer guidance and support.
      </p>
      <button onClick={handleClick} type="button" class="button-join">JOIN SERVER</button>
      </span>
    </div>
    </div>
  )
  }
