import * as S from '@/components/Template/Template.styles';
import TemplateHeader from '@/components/Template/TemplateHeader/TemplateHeader';
import { ReactComponent as RightIcon } from '@/assets/right.svg';
import { ITemplate } from '@/types';

export interface TemplateProps {
  title: string;
  templateList: ITemplate[];
  onBackClick: () => void;
  onTemplateClick: (template: ITemplate) => void;
}

const Template = ({ title, templateList, onBackClick, onTemplateClick }: TemplateProps) => {
  return (
    <S.Template>
      <TemplateHeader onClick={onBackClick}>{title}</TemplateHeader>
      <S.TemplateBox>
        {templateList.map((template) => (
          <S.TemplateItem key={template.id} onClick={() => onTemplateClick(template)}>
            {template.name}
            <RightIcon />
          </S.TemplateItem>
        ))}
      </S.TemplateBox>
    </S.Template>
  );
};

export default Template;
