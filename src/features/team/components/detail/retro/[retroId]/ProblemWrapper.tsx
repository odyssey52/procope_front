'use client';

import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { Client } from '@stomp/stompjs';
import styled from 'styled-components';
import ProblemCardList from './ProblemCardList';

interface ProblemWrapperProps {
  retroId: string;
  client: Client | null;
}

const ProblemWrapper = ({ retroId, client }: ProblemWrapperProps) => {
  return (
    <Wrapper>
      <Head>
        <PageSubTitle first="Q2. 개선할 점은 무엇이고 개선하기 위해 어떤 걸 시도할 수 있나요?" />
      </Head>
      <Content>
        <ProblemCardList retroId={retroId} kanbanStatus="RCG" client={client} />
        <ProblemCardList retroId={retroId} kanbanStatus="PRG" client={client} />
        <ProblemCardList retroId={retroId} kanbanStatus="OK" client={client} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  padding: 7px 24px;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 0 48px;
  padding-bottom: 24px;
  flex-grow: 1;
`;

ProblemWrapper.displayName = 'ProblemWrapper';

export default ProblemWrapper;
