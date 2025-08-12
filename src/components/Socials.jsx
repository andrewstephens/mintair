import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  height: 300px;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%; /* Take full width of parent */
  margin: 0 auto; /* Center the container itself */
`;

const SocialButton = styled.a`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 25px;
    color: #333;
  }

  &.twitter:hover svg {
    color: #1da1f2;
  }
  &.instagram:hover svg {
    color: #e1306c;
  }
  &.linkedin:hover svg {
    color: #0077b5;
  }
  &.youtube:hover svg {
    color: #ff0000;
  }
`;

const Socials = () => {
  return (
    <SocialContainer>
      <SocialButton
        href="https://instagram.com/mintair.co"
        target="_blank"
        className="instagram"
      >
        <FaInstagram />
      </SocialButton>
    </SocialContainer>
  );
};

export default Socials;
