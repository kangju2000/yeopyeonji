import { ITemplate } from '@/types';

export const NEWS_TEMPLATE_LIST: ITemplate[] = [
  {
    id: 1,
    name: '헤드라인 기사',
    path: '',
  },
  {
    id: 2,
    name: 'IT 키워드',
    path: '',
  },
  {
    id: 3,
    name: '정치 기사',
    path: '',
  },
  {
    id: 4,
    name: '보안 기사',
    path: '',
  },
];

export const TEMPLATE_LIST: ITemplate[] = [
  {
    id: 1,
    name: '뉴스',
    path: 'news',
    title: '뉴스 선택',
    lists: NEWS_TEMPLATE_LIST,
  },
  {
    id: 2,
    name: '노래가사',
    path: 'lryics',
  },
  {
    id: 3,
    name: '스토쿠',
    path: 'sudoku',
  },
  {
    id: 4,
    name: '한 줄 명언',
    path: 'one-line-quotes',
  },
];
