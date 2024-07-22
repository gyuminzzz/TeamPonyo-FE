import React from 'react'
import './Footer.css'
import axiosInstance from '../api/axiosInstance'
import { ReactComponent as FooterLogo } from '../footerLogo.svg'

const footer = () => {

  const handleTeamToken = async () => {
    try {
      const response = await axiosInstance.post('/test/api/v1/auth/signup/team', {
        access_token: "sample"
      })
      const accessToken = response.data.access_token
      console.log('Team Test AccessToken: ', accessToken)
      localStorage.setItem('access_token', accessToken)
    } catch (error) {
      console.error ('테스트 팀계정 로그인 에러', error)
    }
  }

  const handlePersonalToken = async () => {
    try {
      const response = await axiosInstance.post('/test/api/v1/auth/signup/personal', {
        access_token: "sample"
      })
      const accessTokenPersonal = response.data.access_token
      console.log('Personal Test AccessToken: ', accessTokenPersonal)
      localStorage.setItem('access_token_personal', accessTokenPersonal)
    } catch (error) {
      console.error ('테스트 팀계정 로그인 에러', error)
    }
  }

  return (
    <div className='Footer'>
        <div className='footerLogo'><FooterLogo /></div>
        <div className='footerBottom'>
          <div className='footerFAQ'>이메일 문의&nbsp;&nbsp;/&nbsp;&nbsp;개인정보 처리방침</div>
          <div className='footerToken'>
            <div className='footerTokenTeam' onClick={handleTeamToken}>팀 계정 토큰</div>
            <div>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
            <div className='footerTokenPersonal' onClick={handlePersonalToken}>개인 계정 토큰</div>
          </div>
        </div>
        
    </div>
  )
}

export default footer