import styled from 'styled-components';

interface IconProps {
  src: string;
  width?: number;
  height?: number;
}
const Icon = ({ src, width, height }: IconProps) => {
  return <Img src={src} width={width} height={height} />;
};

const Img = styled.img`
  aspect-ratio: 1/1;
`;
Icon.displayName = 'Icon';

export default Icon;
