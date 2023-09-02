import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">

        <img
          src="https://excitingtravel.lk/wp-content/uploads/2017/10/cinnamon-grand-colombo-6-1366x520.jpg"
               alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://lh6.googleusercontent.com/proxy/_IeeP7PKSUt7Uax5N7oKHmpWANMPYU1ofX0K4asU_82Ww0ptxDdihwY0F4gXp1hkX78AT6euoufKH8IBA2xRbr00gM7Htss4mvEaWig=w1200-h630-p-k-no-nu"
             alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Wedding Halls</h1>
          <h2>129 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://images.myguide-cdn.com/cyprus/companies/golden-bay-beach-hotel-weddings/large/golden-bay-beach-hotel-weddings-512198.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Out Door Events</h1>
          <h2>276 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://www.thesuitelife.com.hk/wp-content/uploads/2020/10/98-Acres-Sri-Lanka-Jungle-and-Rainforest-Resorts.jpg"
               alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Jungle Villas</h1>
          <h2>131 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://th.bing.com/th/id/R.8b0d79302c82aa4e9c184b42df98f110?rik=s1UGzZG%2fklJ4Mg&pid=ImgRaw&r=0"
                 alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Beach Side Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
