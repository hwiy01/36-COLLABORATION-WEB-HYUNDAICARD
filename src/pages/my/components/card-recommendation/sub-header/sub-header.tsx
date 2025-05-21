import React from 'react'
import { baseButton, breadcrumb, breadcrumbText, buttonVariants, container, loginButtonContainer } from './sub-header.css'
import SvgIconRightArrow from 'src/assets/svg/IconRightArrow'
import { themeVars } from 'src/styles'
import clsx from 'clsx'

export const SubHeader = () => {
  return (
    <>
        <header className={container}>
            <div className={breadcrumb}>
              <span className={breadcrumbText}>홈</span>
              <SvgIconRightArrow style={{ color:  themeVars.color.gray300, height: "2.4rem", width: "2.4rem"}}/>      
              <span className={breadcrumbText}>카드</span>
              <SvgIconRightArrow style={{ color:  themeVars.color.gray300, height: "2.4rem", width: "2.4rem"}}/>      
              <span className={breadcrumbText}>내게 맞는 카드 찾기</span>         
            </div>
            <div className={loginButtonContainer}>
              <button type="button" className={clsx(baseButton, buttonVariants.signup)}>회원가입</button>
              <button type="button" className={clsx(baseButton, buttonVariants.login)}>로그인</button>
            </div>
        </header>
    </>
  )
}
