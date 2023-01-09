import Template from '@/components/Template/Template';
import { TEMPLATE_LIST } from '@/constants/templates';
import { ITemplate } from '@/types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useState } from 'react';

function Select() {
  const navigate = useNavigate();
  const [template, setTemplate] = useState<ITemplate | null>(null);

  const handleBackClick = () => {
    if (template) return setTemplate(null);

    return navigate(ROUTES.HOME);
  };

  const handleTemplateClick = (template: ITemplate) => {
    if (template.title) setTemplate(template);
    console.log(template);
  };

  return (
    <Template
      title={template?.title ? template.title : 'Template 선택'}
      templateList={template?.lists ? template.lists : TEMPLATE_LIST}
      onBackClick={handleBackClick}
      onTemplateClick={handleTemplateClick}
    />
  );
}

export default Select;
