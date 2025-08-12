// LogoBanner.jsx
import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  position: relative;
  height: 8vh;
  width: 100%;
  overflow: hidden;
  background: transparent;
`;

const LogoTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Logo = styled.img`
  height: 2.5rem;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 200px;
  pointer-events: none;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const logos = [
  "https://api.iconify.design/mdi:thermostat.svg?color=%23000000", // Thermostat icon
  "https://api.iconify.design/material-symbols:heat-pump.svg?color=%23000000", // Heat pump icon
  "https://api.iconify.design/mdi:hvac.svg?color=%23000000", // HVAC icon
  "https://api.iconify.design/carbon:temperature-hot.svg?color=%23000000", // Heating icon
  "https://api.iconify.design/mdi:air-conditioner.svg?color=%23000000", // AC icon
  "https://api.iconify.design/carbon:energy-renewable.svg?color=%23000000", // Energy efficiency
  "https://api.iconify.design/healthicons:award-ribbon.svg?color=%23000000", // Quality/certification
  "https://api.iconify.design/material-symbols:home.svg?color=%23000000", // Home comfort
  "https://api.iconify.design/carbon:certificate.svg?color=%23000000", // Certification icon
  "https://api.iconify.design/mdi:tools.svg?color=%23000000", // Service/repair icon
  "https://api.iconify.design/mdi:shield-check.svg?color=%23000000", // Security and trust
  "https://api.iconify.design/mdi:hand-heart.svg?color=%23000000", // Customer care and support
];
const LogoBanner = () => {
  return (
    <BannerContainer>
      <Gradient className="left" />
      <LogoTrack>
        {logos.concat(logos).map((logo, index) => (
          <Logo key={index} src={logo} alt={`Partner ${index}`} />
        ))}
      </LogoTrack>
      <Gradient className="right" />
    </BannerContainer>
  );
};

export default LogoBanner;
