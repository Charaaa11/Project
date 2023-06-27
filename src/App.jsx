import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Main from "./component/Pages/HomePage";
import Footer from "./component/Footer";
import "./styles/Styles.css";
import SecNav from "./component/blocks/SecNav";
import AuthBlock from "./component/Auth/AuthBlock";
import { Routes, Route } from "react-router-dom";
import Trips from "./component/Pages/Trips";
import PageNotFound from "./component/Pages/PageNotFound";
import Gifts from "./component/Pages/Gifts";
import MediaGallery from "./component/Pages/MediaGallery";

import Application from "./component/Pages/Application";
import RegionPage from "./component/Pages/RegionPage";
import GetWebsiteData from "./component/Data/GetWebsiteData";
import RegionCollectionpage from "./component/Pages/RegionCollectionpage";
import LocationPage from "./component/Pages/LocationPage";

export const Context = React.createContext();

function App() {
  const [ShowAuthBlock, setShowAuthBlock] = useState(false);
  // const [Data, setData] = useState();
  // useEffect(() => {
  //   setData(GetWebsiteData());
  //   console.log(Data);
  // }, []);
  const Data = GetWebsiteData();
  if (ShowAuthBlock) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
  return (
    <Context.Provider value={[ShowAuthBlock, setShowAuthBlock]}>
      <div className="App">
        {ShowAuthBlock && <AuthBlock />}
        <div className={ShowAuthBlock ? "content blurred" : "content"}>
          <Header />
          <SecNav />
          <Routes>
            <Route path="/" element={<Main RegData={Data.regions} />}></Route>
            <Route path="Trips" element={<Trips />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            <Route path="Gifts" element={<Gifts />}></Route>
            <Route path="MediaGallery" element={<MediaGallery />}></Route>

            <Route
              path="Application"
              element={<Application data={Data} />}
            ></Route>
            <Route path="Regions" element={<RegionCollectionpage />}></Route>
            {Data.regions.map((region) => {
              return (
                <React.Fragment key={region.id}>
                  <Route
                    path={"Regions/" + region.name}
                    element={
                      <RegionPage
                        regionName={region.name}
                        regionID={region.id}
                      />
                    }
                  ></Route>
                  <Route
                    path={"Regions/" + region.name + "/:locationID"}
                    element={<LocationPage />}
                  ></Route>
                </React.Fragment>
              );
            })}
          </Routes>
          <Footer />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
