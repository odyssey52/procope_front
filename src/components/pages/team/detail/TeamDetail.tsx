import { useParams } from 'next/navigation';
import styled from 'styled-components';

const TeamDetail = () => {
  const params = useParams();
  return <Wrapper>{params.teamId}</Wrapper>;
};

const Wrapper = styled.div``;

TeamDetail.displayName = 'TeamDetail';

export default TeamDetail;
