import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface LogoProps {
  type?: 'icon2' | 'iconText-white' | 'iconText' | 'iconText2' | 'text';
  size?: number;
  onClick?: () => void; // Optional onClick handler
}

const Logo = ({ type, size, onClick }: LogoProps) => {
  const router = useRouter();

  // If no onClick prop is passed, default to navigating to '/'
  const handleClick = onClick || (() => router.push('/'));

  return <Image src={`/assets/icons/graphic/logo/${type ?? 'icon'}.svg`} width={size} onClick={handleClick} />;
};

const Image = styled.img`
  cursor: pointer;
`;

Logo.displayName = 'Logo';

export default Logo;
