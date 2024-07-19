import React, { useState } from 'react';
import Profile from '../components/Profile';
import GridList from '../components/GridList';
import '../design/MyPageGrid.css';
import Follow from '../components/Follow';
import HorizonLine from '../components/HorizonLine';
import '../design/MyPage.css';

const MyPageGroup = () => {
  const userId = 'econovation'; // 예시 userId
  const [sortOrder, setSortOrder] = useState('LATEST'); // 정렬 기준 상태

  return (
    <div>
      <div className='profile-container'>
        <Profile userId={userId} />
        <Follow
          FollowerNumber={120} // 팔로워 수
          FollowingNumber={150} // 팔로잉 수
        />
      </div>
      <HorizonLine />
      <div className='filter-buttons'>
        <button onClick={() => setSortOrder('LATEST')} className={sortOrder === 'LATEST' ? 'active' : ''}>
          최신순
        </button>
        <button onClick={() => setSortOrder('POPULARITY')} className={sortOrder === 'POPULARITY' ? 'active' : ''}>
          인기순
        </button>
      </div>
      <div className='MyPageContainer'>
        <GridList sortOrder={sortOrder} />
      </div>
    </div>
  );
}

export default MyPageGroup;
