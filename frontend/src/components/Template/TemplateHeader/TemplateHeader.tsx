import { ReactComponent as BackIcon } from '@/assets/back.svg';
import * as S from '@/components/Template/TemplateHeader/TemplateHeader.styles';

export interface TemplateHeaderProps {
  children: React.ReactNode;
  onClick: () => void;
}

const TemplateHeader = ({ children, onClick }: TemplateHeaderProps) => {
  return (
    <S.TemplateHeader>
      <S.BackButton onClick={onClick}>
        <BackIcon />
      </S.BackButton>
      <S.Title>{children}</S.Title>
    </S.TemplateHeader>
  );
};

export default TemplateHeader;
