import Button from '@/components/Button/Button';
import * as S from '@/pages/Home/Home.styles';

function Home() {
  return (
    <S.Home>
      <S.Header>
        <S.Logo src="src/assets/logo.png" />
      </S.Header>
      <S.ButtonBox>
        <Button color="secondary">직접 쓰러가기</Button>
        <Button color="secondary">편지 템플릿 선택</Button>
      </S.ButtonBox>
      <S.InputBox readOnly />
      <Button>전송하기</Button>
    </S.Home>
  );
}

export default Home;
