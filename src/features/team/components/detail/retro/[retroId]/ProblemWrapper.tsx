'use client';

import retroQueries from '@/features/team/query/retroQueries';
import PageSubTitle from '@/shared/ui/title/PageSubTitle';
import { Client } from '@stomp/stompjs';
import styled from 'styled-components';
import RCGWrapper from './RCGWrapper';

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
        <RCGWrapper retroId={retroId} client={client} />
        <RCGWrapper retroId={retroId} client={client} />
        <RCGWrapper retroId={retroId} client={client} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  padding: 0 24px;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 0 48px;
`;

ProblemWrapper.displayName = 'ProblemWrapper';

export default ProblemWrapper;
