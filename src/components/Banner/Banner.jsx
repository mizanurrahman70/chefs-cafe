

const Banner = () => {
    return (
        <>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/fnskmTs/pexels-photo-954677.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold w-[897px] -ml-60">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 w-[933px] text-gray-200 -ml-52">Originating in London in 1989, Cafe Rouge now brings French-inspired cuisine to charming, Parisian-style restaurants across the UK. Combining a warm, inviting setting with classic French dishes, Cafe Rouge is the perfect restaurant for every occasion and time of day. Join us at your local Cafe Rouge bistro for a true taste of Paris, whatever the celebration.</p>
      <button className="btn btn-primary text-black bg-green-600 border-none">Explore Now</button>
      <button className="w-[150px] h-[55px] font-semibold rounded-2xl border-2 border-white  ml-5">Our Feedback</button>
    </div>
  </div>
</div>
       </> 
    );
};

export default Banner;