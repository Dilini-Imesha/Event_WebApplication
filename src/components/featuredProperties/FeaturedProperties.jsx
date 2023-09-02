import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://absolutemusicdjs.com/wp-content/uploads/2020/08/uplighting.jpg"
           alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Miasto</span>
        <span className="fpCity">Colombo</span>
        <span className="fpPrice">Starting from 1 laks</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://2.bp.blogspot.com/-4GRHQ1U5ieQ/Vs_t7wTvDyI/AAAAAAAABug/2nZp433mriI/s1600/galle_face_hotel__2_1.jpg"
            alt=""
          className="fpImg"
        />
        <span className="fpName">Galle Face Hotel</span>
        <span className="fpCity">Colombo</span>
        <span className="fpPrice">Starting from 3 laks</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://i.ytimg.com/vi/ejlUlMXMfvs/maxresdefault.jpg"
             alt=""
          className="fpImg"
        />
        <span className="fpName">Christima Residence</span>
        <span className="fpCity">Negambo</span>
        <span className="fpPrice">Starting from 1.5 laks</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://th.bing.com/th/id/R.e429ee47bc042a6553686a0c94be1c13?rik=tELFbLcZZR4dzA&riu=http%3a%2f%2fwww.tnhglobal.com%2fwp-content%2fuploads%2f2018%2f02%2fOutdoor-Wedding-Cinnamon-Hotels-Resorts.jpg&ehk=5Nc457UCZvmr292tVegKTgrDvsYqOL4dvhJ%2fQf%2fEiiM%3d&risl=&pid=ImgRaw&r=0"
              alt=""
          className="fpImg"
        />
        <span className="fpName">Cinnoman Hotels and Resorts</span>
        <span className="fpCity">Colombo</span>
        <span className="fpPrice">Starting from 5 laks</span>
        <div className="fpRating">
          <button>9.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
