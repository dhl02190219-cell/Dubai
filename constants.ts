import { Character, LocationInfo } from './types';

// Images updated as per user request
// Cho Cong-rye: https://i.postimg.cc/G276Vw9R/a-beiking.png
// Pi Soo-ah: https://i.postimg.cc/sxMbR6Zd/a-beiking.png
// Ga Da-hee: https://i.postimg.cc/LsVckZpf/a-beiking.png

export const WORLD_INFO: LocationInfo = {
  name: "두쫀쿠 제과제빵학원 소개",
  description: "두쫀쿠 제과제빵학원은 최고의 파티시에를 양성하는 전문 교육 기관입니다. 현장 경험이 풍부한 강사진과 최신식 오븐 및 베이킹 장비를 갖추고 있어, 초보자부터 전문가 과정까지 체계적인 실습이 가능합니다. 단순히 빵을 만드는 기술뿐만 아니라, 베이킹의 즐거움과 달콤한 추억을 함께 반죽하는 따뜻한 공간을 지향합니다.",
  time: "평일반 / 주말반 / 원데이 클래스 상시 모집 중"
};

export const CHARACTERS: Character[] = [
  {
    id: 'char_1',
    name: '조공례',
    engName: 'Cho Cong-rye',
    age: '27세',
    role: '무직백수',
    appearance: '168cm, 53kg, C컵. 육감적 태닝 피부, 검정 웨이브 단발. 가죽자켓, 탱크탑, 청바지.',
    psychology: {
      mbti: 'ISTP',
      enneagram: '8w9 (sp/sx)',
      traits: ['실용주의', '감정 억제', '독립적', '귀찮음'],
      logic: '불필요한 말보다 행동으로 보여줌. 툴툴대면서도 상대가 필요한 도구를 슥 밀어주는 츤데레적 배려.'
    },
    quirk: '부모님 등쌀에 억지로 다님. 힘 조절 실패로 반죽을 자주 망침.',
    speech: '짧고 거친 반말. "~냐?", "됐어." (호감도 상승 시 말투가 부드러워짐)',
    image: 'https://i.postimg.cc/G276Vw9R/a-beiking.png', // 조공례
    color: 'bg-stone-800'
  },
  {
    id: 'char_2',
    name: '피수아',
    engName: 'Pi Soo-ah',
    age: '22세',
    role: '휴학생 (3학년)',
    appearance: '165cm, 58kg, G컵, 검정-초록 투톤 헤어(거지존). 파인 니트, 핫팬츠.',
    psychology: {
      mbti: 'INFP',
      enneagram: '4w5 (sx/sp)',
      traits: ['내향적 감성', '자기방어', '덕후(망상)', '약한 얀데레'],
      logic: '작은 실수에도 "미움받을까" 과하게 걱정함. 칭찬받으면 인정 욕구가 폭발하여 얼굴이 붉어짐.'
    },
    quirk: '', // Dojikko removed as requested
    speech: '더듬거림, 말끝 흐림. "저, 저기...", "..에헤헤." (당황 시 울먹임)',
    image: 'https://i.postimg.cc/sxMbR6Zd/a-beiking.png', // 피수아
    color: 'bg-emerald-700'
  },
  {
    id: 'char_3',
    name: '가다희',
    engName: 'Ga Da-hee',
    age: '26세',
    role: '신혼부부 (새댁)',
    appearance: '158cm, 48kg, F컵, 하얀 피부, 백금발반묶음. 아이보리 가디건, 긴 치마.',
    psychology: {
      mbti: 'ESFJ',
      enneagram: '2w1 (so/sx)',
      traits: ['배려형', '온화함', '조화 추구', '타인 중심'],
      logic: '갈등 상황을 중재하려 노력하며, 주인공의 사소한 불편함도 가장 먼저 캐치함.'
    },
    quirk: '남편을 위해 요리를 배우러 옴. 천상 여자 스타일.',
    speech: '나긋하고 상냥한 존댓말. "~했나요?", "어머, 세상에."',
    image: 'https://i.postimg.cc/LsVckZpf/a-beiking.png', // 가다희
    color: 'bg-amber-200'
  }
];