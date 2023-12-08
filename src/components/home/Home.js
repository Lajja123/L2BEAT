import React from 'react';
import arrow from "../../assests/right-arrow.png"
import "../home/Home.css"
import { Link } from 'react-router-dom';
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';
import AllDaos from "../Daos/AllDaos"

function Home() {
    const { address, isConnected, isDisconnected } = useAccount();
    const walletAddress = address;
    console.log(walletAddress);
    const navigate = useNavigate();
    const handleDashboardNavigation = () => {
      if (isConnected) {
        navigate("/all-daos");
      } else {
        alert("Please connect your wallet");
      }
    };
  
    return (
     
          <div className='home-sec1'>
            <h1>
            Buy and trade cryptos like never <span style={{color:"#a6ff35"}}>before</span>.
            </h1>
            <div className='home-pera'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit at pharetra nec sed erat non metus suspendisse mus non lectus vel vitae massa id in in turpis posuere laoreet tortor.
            </div>
            <button id="button-7" className="home-button"onClick={() => handleDashboardNavigation()}>
            Explore DOAs
                <div id="dub-arrow">
                    <img src={arrow} />
                </div>  
            </button>
            
          </div>
            
       
    );
}

export default Home;