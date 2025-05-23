import React from 'react'
import {
  container,
  content,
  contentContainer,
  title,
  contentTitle,
  chipContainer,
  textContainer,
  description,
} from './recommendation-description.css'
import { subTitle } from '../header/header.css'
import Chip from '@/shared/components/chips/chip'
import { IconM, IconTruck } from 'src/assets/svg'

export const RecommendationDescription = () => {
  return (
    <div className={container}>
      {/* 추천 기준 */}
      <div className={contentContainer}>
        <div className={title}>추천 기준</div>
        <div className={content}>
          <div className={textContainer}>
            <div className={subTitle}>내가 선택한 필터</div>
            <div className={contentTitle}>라이프스타일 / 여행</div>
            <div className={chipContainer}>
              <Chip mode="selected" content="여행" />
              <Chip mode="selected" content="오프라인 쇼핑" />
              <Chip mode="selected" content="커피" />
              <Chip mode="selected" content="마켓/전통시장/편의점" />
              <Chip mode="selected" content="생활 서비스" />
            </div>
          </div>
          <div>

          </div>
          <div style={{ marginBottom: '10rem' }}> 
            <IconM width="4rem" />
          </div>
        </div>
      </div>

      {/* 추천 카드 스타일 */}
      <div className={contentContainer}>
        <div className={title}>추천 카드 스타일</div>
        <div className={content}>
          <div className={textContainer}>
            <div className={subTitle}>나는 어떤 카드가 어울릴까?</div>
            <div className={contentTitle}>
              가치있는 여행을 위한<br />라이프스타일 카드
            </div>
            <div className={description}>
              단순한 지출이 아닌 가치 있는 경험 <br />
              프리미엄 라이프스타일을 아우르는 <br />
              Boutique - Velvet 카드
            </div>
          </div>
          <div style={{ marginBottom: '10rem' }}>
            <IconTruck width="6rem" />
          </div>
        </div>
      </div>
    </div>
  )
}
