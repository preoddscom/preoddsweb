import React from "react";
import AdSense from "react-adsense";

class PreoddsAds extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8414032873723562"
          data-ad-slot="1735416017"
          data-ad-format="auto"
        />
      </div>
    );
  }
}

export default PreoddsAds;
