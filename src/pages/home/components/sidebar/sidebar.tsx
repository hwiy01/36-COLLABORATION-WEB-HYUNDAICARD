import * as styles from "./sidebar.css";
import SvgRightArrow from "src/assets/svg/RightArrow";
import clsx from "clsx";
import { themeVars } from "src/styles";
import SvgIconBulb from "src/assets/svg/IconBulb";
import SvgIconNote from "src/assets/svg/IconNote";
import SvgIconWarning from "src/assets/svg/IconWarning";
import LoginButton from "@/shared/components/login-button/login-button";

export const Sidebar = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.sidebarSection}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>로그인</span>
            <div className={styles.otherLinkContainer}>
              <span className={styles.otherLinkText}>다른 로그인 방법</span>
              <span className={styles.otherLinkIcon}>
                <SvgRightArrow
                  style={{
                    color: themeVars.color.h_black,
                    height: "0.8rem",
                    width: "1.2rem",
                  }}
                />
              </span>
            </div>
          </div>
          <div className={styles.loginButtonContainer}>
            <LoginButton
              color={"whiteOutline"}
              size={"medium"}
              placeholder="간편번호"
            />
            <LoginButton
              size={"medium"}
              placeholder="현대카드 앱"
              color={"white"}
            />
          </div>
          <div className={styles.loginContainer}>
            <div className={styles.loginText}>
              현대카드 홈페이지 간편번호 <br /> 6자리를 설정해 주세요
            </div>
            <div className={styles.inputDotContainer}>
              <div className={styles.inputDot}></div>
              <div className={styles.inputDot}></div>
              <div className={styles.inputDot}></div>
              <div className={styles.inputDot}></div>
              <div className={styles.inputDot}></div>
              <div className={styles.inputDot}></div>
            </div>
          </div>
          <div className={styles.submitContainer}>
            <LoginButton
              size={"large"}
              placeholder={"간편번호 등록"}
              color={"blackGray"}
            />
            <div className={styles.otherLinkContainer}>
              <span className={styles.otherLinkText}>회원가입</span>
              <span className={styles.otherLinkIcon}>
                <SvgRightArrow
                  style={{
                    color: themeVars.color.h_black,
                    height: "0.8rem",
                    width: "1.2rem",
                  }}
                />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.sidebarSection}>
          <ul className={clsx(styles.baseButton, styles.buttonRowContainer)}>
            <li className={styles.rowListItem}>
              <div className={styles.rowListIcon}>
                <SvgIconBulb width="2.4rem" />
              </div>
              <div className={styles.rowListText}>고객지원</div>
            </li>
            <li className={styles.rowListItem}>
              <div className={styles.rowListIcon}>
                <SvgIconNote width="2.4rem" />
              </div>
              <div className={styles.rowListText}>상담·문의</div>
            </li>
            <li className={styles.rowListItem}>
              <div className={styles.rowListIcon}>
                <SvgIconWarning width="2.4rem" />
              </div>
              <div className={styles.rowListText}>도난·분실</div>
            </li>
          </ul>
        </div>
        <div className={styles.sidebarSection}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>금융</span>
            <span className={styles.rightArrowIcon}>
              <SvgRightArrow
                style={{
                  color: themeVars.color.h_black,
                  height: "1.2rem",
                  width: "1.2rem",
                }}
              />
            </span>
          </div>
          <ul className={clsx(styles.buttonColumnContainer, styles.baseButton)}>
            <li className={styles.columnListItem}>
              <div className={styles.columnListTitle}>장기카드대출(카드론)</div>
              <div className={styles.columnListDescription}>
                목돈이 필요할 때
              </div>
            </li>
            <li className={styles.columnListItem}>
              <div className={styles.columnListTitle}>
                단기카드대출(현금서비스)
              </div>
              <div className={styles.columnListDescription}>
                일상에서 현금이 필요할 때
              </div>
            </li>
            <li className={styles.columnListItem}>
              <div className={styles.columnListTitle}>
                일부결제금액이월약정(리볼빙)
              </div>
              <div className={styles.columnListDescription}>
                카드대금이 부담될 때
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.sidebarSection}>
          <div className={styles.titleContainer}>
            <span className={styles.subTitle}>뉴스·공지사항</span>
            <span className={styles.rightArrowIcon}>
              <SvgRightArrow
                style={{
                  color: themeVars.color.h_black,
                  height: "1.2rem",
                  width: "1.2rem",
                }}
              />
            </span>
          </div>
          <ul className={styles.newsList}>
            <li className={styles.newsItem}>
              단기카드대출(현금서비스) 및 일부결제금...
            </li>
            <li className={styles.newsItem}>
              카드 배송 사칭 보이스피싱 증가 주의 안내
            </li>
            <li className={styles.newsItem}>
              SSG.COM카드 2종 상품설명서 개정 안내
            </li>
            <li className={styles.newsItem}>
              코스트코 리워드 +5% 적립팩 이용 약관...
            </li>
            <li className={styles.newsItem}>NOL 카드 상품설명서 개정 안내</li>
          </ul>
        </div>
        <div className={styles.sidebarSection}>
          <div className={styles.titleContainer}>
            <span className={styles.subTitle}>소비자 경보</span>
            <span className={styles.rightArrowIcon}>
              <SvgRightArrow
                style={{
                  color: themeVars.color.h_black,
                  height: "1.2rem",
                  width: "1.2rem",
                }}
              />
            </span>
          </div>
          <div className={styles.defaultMessage}>
            유명인 무료강연을 활용한 <br /> 보험상품 판매를 주의하세요!
          </div>
        </div>
      </section>
    </>
  );
};
