'use client';
import React from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Title from '@/components/common/Title';
import SelectTeam from '@/components/vote/SelectTeam';
import Button from '@/components/vote/Button';
import Link from 'next/link';

function page() {
  return (
    <Container>
      <Title content="데모데이 투표 결과" />
      <Line />
      <SelectPersonWrapper>
        <Team>
          <SelectTeam team="Repick" />
        </Team>
        <Team>
          <SelectTeam team="Dan-support" />
        </Team>
        <Team>
          <SelectTeam team="BariBari" />
        </Team>
        <Team>
          <SelectTeam team="Therapease" />
        </Team>
        <Team>
          <SelectTeam team="Hooking" />
        </Team>
      </SelectPersonWrapper>
      <Link href={'/vote'}>
        <Button content="돌아가기" />
      </Link>
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectPersonWrapper = styled.div``;
const Team = styled.div`
  display: flex;
  width: 280px;
  margin-top: 13px;
`;