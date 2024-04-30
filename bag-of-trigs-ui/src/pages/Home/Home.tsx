import './Home.scss';

export default function Home() {
  return (
    <div className='d-flex flex-column justify-contents-center home-content-container'>
      <div className="home-content">
        <h1>Welcome to Bag of Trigs</h1>
        <h2>Research your next trig point adventure!</h2>
        <br/>
        <a href="/trigs" className='btn btn-outline-dark'>Find a trig point!</a>
      </div>
    </div>
  );
}