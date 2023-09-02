import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/R.9793dc9beb5d2841fc917347ba3ae649?rik=wRM%2bA3kDRrmgcg&riu=http%3a%2f%2fwww.weddingelation.com%2fwp-content%2fuploads%2f2014%2f01%2fbeautiful-outdoor-wedding-venue-decor-4.jpg&ehk=D76CKWHqg%2bpLTKalwh2QrMh9vnFpPtXXbSuwyVBYnNk%3d&risl=&pid=ImgRaw&r=0" 
        
            alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Wedding</h1>
          <h2>125 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src=" https://th.bing.com/th/id/OIP.3NMQnvwe-MFDzqzqq9epWwHaLV?pid=ImgDet&rs=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Parties</h1>
          <h2>345 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src=  "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
       
            alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tourist</h1>
          <h2>412 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
