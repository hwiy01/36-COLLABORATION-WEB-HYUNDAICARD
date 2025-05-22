import React from 'react'
import { baseButton, buttonColumnContainer, buttonRowContainer, columnListDescription, columnListItem, columnListTitle, container, defaultMessage, inputDot, inputDotContainer, loginButton, loginButtonBase, loginButtonContainer, loginButtonVariants, loginContainer, loginText, newsItem, newsList, otherLinkContainer, otherLinkIcon, otherLinkText, rightArrowIcon, rowListIcon, rowListItem, rowListText, sidebarSection, submitButton, submitContainer, subTitle, title, titleContainer } from './sidebar.css'
import SvgRightArrow from 'src/assets/svg/RightArrow'
import clsx from 'clsx'
import { themeVars } from 'src/styles'
import SvgIconBulb from 'src/assets/svg/IconBulb'
import SvgIconNote from 'src/assets/svg/IconNote'
import SvgIconWarning from 'src/assets/svg/IconWarning'

export const Sidebar = () => {
  return (
    <>
      <div className={container}>
        <div className={sidebarSection}>
          <div className={titleContainer}>
            <span className={title}>로그인</span>
            <div className={otherLinkContainer}>
              <span className={otherLinkText}>다른 로그인 방법</span>
              <span className={otherLinkIcon}>
                <SvgRightArrow style={{ color:  themeVars.color.h_black, height: "0.8rem", width: "1.2rem"}}/>
              </span>
            </div>
          </div>
          <div className={loginButtonContainer}>
              <button type="button" className={clsx(loginButtonBase, loginButtonVariants.black)}>간편번호</button>
              <button type="button" className={clsx(loginButtonBase, loginButtonVariants.gray)}>현대카드 앱</button>
          </div>
          <div className={loginContainer}>
            <div className={loginText}>현대카드 홈페이지 간편번호 <br /> 6자리를 설정해 주세요</div>
            <div className={inputDotContainer}>
              <div className={inputDot}></div>
              <div className={inputDot}></div>
              <div className={inputDot}></div>
              <div className={inputDot}></div>
              <div className={inputDot}></div>
              <div className={inputDot}></div>
            </div>
          </div>
          <div className={submitContainer}>
            <button type="submit" className={submitButton}>간편번호 등록</button>
            <div className={otherLinkContainer}>
              <span className={otherLinkText}>회원가입</span>
              <span className={otherLinkIcon}>
                <SvgRightArrow style={{ color:  themeVars.color.h_black, height: "0.8rem", width: "1.2rem"}}/>
              </span>
            </div>
          </div>
        </div>

        <div className={sidebarSection}>
          <ul className={clsx(baseButton, buttonRowContainer)}>
              <li className={rowListItem}>
                  <div className={rowListIcon}>
                    <SvgIconBulb width="2.4rem" />
                  </div>
                  <div className={rowListText}>고객지원</div>
              </li>
              <li className={rowListItem}>
                <div className={rowListIcon}>
                  <SvgIconNote width="2.4rem"  />
                </div>
                <div className={rowListText}>상담·문의</div>
              </li>
              <li className={rowListItem}>
                <div className={rowListIcon}>
                  <SvgIconWarning width="2.4rem"/>
                </div>
                <div className={rowListText}>도난·분실</div>
              </li>
          </ul>

        </div>
        <div className={sidebarSection}>
          <div className={titleContainer}>
            <span className={title}>금융</span>
            <span className={rightArrowIcon}>
              <SvgRightArrow style={{ color:  themeVars.color.h_black, height: "1.2rem", width: "1.2rem"}}/>
            </span>
          </div>
          <ul className={clsx(buttonColumnContainer, baseButton)}>
              <li className={columnListItem}>
                <div className={columnListTitle}>장기카드대출(카드론)</div>
                <div className={columnListDescription}>목돈이 필요할 때</div>
              </li>
              <li className={columnListItem}>
                <div className={columnListTitle}>단기카드대출(현금서비스)</div>
                <div className={columnListDescription}>일상에서 현금이 필요할 때</div>
              </li>
              <li className={columnListItem}>
                <div className={columnListTitle}>일부결제금액이월약정(리볼빙)</div>
                <div className={columnListDescription}>카드대금이 부담될 때</div>
              </li>
          </ul>
        </div>
        <div className={sidebarSection}>
          <div className={titleContainer}>
            <span className={subTitle}>뉴스·공지사항</span>
            <span className={rightArrowIcon}>
              <SvgRightArrow style={{ color:  themeVars.color.h_black, height: "1.2rem", width: "1.2rem"}}/>
            </span>
          </div>
          <ul className={newsList}>
            <li className={newsItem}>단기카드대출(현금서비스) 및 일부결제금...</li>
            <li className={newsItem}>카드 배송 사칭 보이스피싱 증가 주의 안내</li>
            <li className={newsItem}>SSG.COM카드 2종 상품설명서 개정 안내</li>
            <li className={newsItem}>코스트코 리워드 +5% 적립팩 이용 약관...</li>
            <li className={newsItem}>NOL 카드 상품설명서 개정 안내</li>
          </ul>
        </div>
        <div className={sidebarSection}>
          <div className={titleContainer}>
            <span className={subTitle}>소비자 경보</span>
            <span className={rightArrowIcon}>
            <SvgRightArrow style={{ color:  themeVars.color.h_black, height: "1.2rem", width: "1.2rem"}}/>
            </span>
          </div>
          <div className={defaultMessage}>
          유명인 무료강연을 활용한 <br /> 보험상품 판매를 주의하세요!
        </div>
        </div>
      </div>
    </>
  )
}
