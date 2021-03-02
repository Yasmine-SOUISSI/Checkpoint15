import Adress from "./Component/Profile/Adress";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import "./styles.css";

export default function App() {
  return (
    <>
    <section>
      <div className="card">
<div className="card-body"> 
<ProfilPhoto/>
<FullName/>
<Adress/>
  </div>

  <div className="card-footer">

    <div className="a1"> 
      <h4 className="nombre">800</h4>
<h5 className="text"> Followers</h5>
      </div>

      <div className="a1"> 
      <h4 className="nombre">800</h4>
<h5 className="text">Likes</h5>
      </div>

      <div className="a1"> 
      <h4 className="nombre">50</h4>
<h5 className="text">Photos</h5>
      </div>


    </div>
 

      
    
    
     </div>
    </section>
     
    </>
  );
}
