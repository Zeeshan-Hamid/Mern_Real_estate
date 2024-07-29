import "./singlePage.scss";
import Slider from "../../components/Slider/Slider";
import Map from "../../components/Map/Map";
import { singlePostData, userData } from "../../lib/dummy-data";
const SignlePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <div className="title">General</div>
          <div className="listVerticle">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is Responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have the rent in total hosehold income</p>
              </div>
            </div>
          </div>
          <div className="title">Sizes</div>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>88sq ft</span>
            </div>

            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 Beds</span>
            </div>

            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>

          <div className="title">Nearby Places</div>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>200m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>10m away</p>
              </div>
            </div>
          </div>
          <div className="title">Location</div>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignlePage;
