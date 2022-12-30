import Button from '@/components/Button/Button';
import * as S from '@/pages/Home/Home.styles';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <S.Home>
      <S.Header />
      <S.ButtonBox>
        <Button color="secondary">직접 쓰러가기</Button>
        <Button color="secondary" onClick={() => navigate(ROUTES.SELECT)}>
          편지 템플릿 선택
        </Button>
      </S.ButtonBox>
      <S.InputBox readOnly />
      <Button onClick={handleClick}>전송하기</Button>
    </S.Home>
  );
}

export default Home;
