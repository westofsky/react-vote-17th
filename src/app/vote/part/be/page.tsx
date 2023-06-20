'use client';
import { useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Link from 'next/link';

function page() {
  const [selectedLeader, setSelectedLeader] = useState('');

  const leaders = [
    { key: 1, name: '서찬혁', team: 'Repick' },
    { key: 2, name: '서혜준', team: 'Repick' },
    { key: 3, name: '몰라', team: 'Dan-support' },
    { key: 4, name: '몰라', team: 'Dan-support' },
    { key: 5, name: '몰라', team: 'BariBari' },
    { key: 6, name: '몰라', team: 'BariBari' },
    { key: 7, name: '몰라', team: 'Therapease' },
    { key: 8, name: '몰라', team: 'Therapease' },
    { key: 9, name: '몰라', team: 'Hooking' },
    { key: 10, name: '몰라', team: 'Hooking' },
  ];

  const selectLeaderHandler = (name: React.SetStateAction<string>) => {
    setSelectedLeader(name);
  };
  return (
    <Container>
      <Header content="BE 파트장 투표" href="/vote/part" />
      <Line />
      <SelectPersonWrapper>
        {leaders.map((leader) => (
          <VoteForm
            key={leader.key}
            onClick={() => selectLeaderHandler(leader.name)}
          >
            <VoteTeam>{leader.team}</VoteTeam>
            <VoteName>{leader.name}</VoteName>
          </VoteForm>
        ))}
      </SelectPersonWrapper>
      <Link href={'/vote/part/be/voting'}>
        <Button content="제출하기" />
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

const SelectPersonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 280px;
  margin-top: 13px;
`;
const VoteForm = styled.div`
  width: 120px;
  height: 55px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 13px;
`;
const VoteTeam = styled.div`
  color: #979797;
  font-size: 13px;
  font-weight: bold;
`;
const VoteName = styled.div`
  font-size: 19px;
  font-weight: bold;
`;
