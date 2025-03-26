import { ContentLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
// import { useUser } from '@/lib/auth';
// import { ROLES } from '@/lib/authorization';

import dw_logo from '@/assets/dw-logo.png'
import { useState } from 'react';

type MemberCardProps = {
  name: string;
  points: number;
  balance: number,
  join_date: string
};

function currencyFormat(num: number) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const MemberCard = ({ name, points, balance, join_date }: MemberCardProps) => (
  <section
    className='p-6 rounded-lg text-white flex justify-between max-w-[420px] relative'
    style={{
      background: 'linear-gradient(180deg, #1A4033 0%, #05120A 100%)'
    }}>
    <div>
      <div className='text-[14px] font-medium'>Hello</div>
      <div className='text-[18px] mb-6'>{name}</div>

      <div className='text-[18px] font-semibold my-4'>Rp {currencyFormat(balance)}</div>
      <div className='text-[14px]'>Join Date: {join_date}</div>
    </div>
    <div className='flex flex-col justify-between items-end'>
      <img src={dw_logo} width={100} className='min-w-[100px]' />
      <div className='text-[18px] font-bold'>{points} Points</div>
    </div>
  </section>
)

const MembershipRoute = () => {
  const user = {
    name: 'Rizki Dwi Saputra',
    balance: 500000,
    points: 100,
    join_date: '20/12/2024'
  }

  return (
    <ContentLayout title="Membership">
      <section className='flex mb-6 md:md-4'>
        <Button className='px-6 py-1 mr-4'>
          Top Up
        </Button>
        <Button className='px-6 py-1 mr-4'>
          QR Membership
        </Button>
      </section>
      <MemberCard name={user.name} balance={user.balance} join_date={user.join_date} points={user.points}></MemberCard>
    </ContentLayout>
  );
};

export default MembershipRoute;
