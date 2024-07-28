import "./home.scss";
import SearchBar from "../../components/Searchbar/SearchBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            praesentium aliquam eaque quibusdam. Ex aliquam beatae ad ab animi
            ea officiis cum quasi facere dolorum.
          </p>
                  <SearchBar />
                  <div className="boxes">
                      <div className="box"><h1>16+</h1>
                      <h2>Years of Experience</h2>
                      </div>
                      <div className="box"><h1>200</h1>
                      <h2>Award Gains</h2>
                      </div>
                      <div className="box"><h1>2000+</h1>
                      <h2>Property Ready</h2>
                      </div>
                  </div>
        </div>
      </div>

      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
