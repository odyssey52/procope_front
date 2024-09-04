import styled from "styled-components";

interface LogoProps {
  type?: "icon2" | "iconText-white" | "iconText" | "iconText2" | "text";
  size?: number;
}
const Logo = ({ type, size }: LogoProps) => {
  return (
    <Image
      src={`/assets/icons/graphic/logo/type=${type ?? "icon"}.svg`}
      width={size}
    />
  );
};

const Image = styled.img`
  cursor: pointer;
`;

Logo.displayName = "Logo";

export default Logo;
