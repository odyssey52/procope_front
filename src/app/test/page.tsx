'use client';

import Select from '@/components/common/ui/select/Select';
import { useState } from 'react';

const page = () => {
  const [value, setValue] = useState<string>('');
  const valueHandler = (value: string) => {
    setValue(value);
  };
  const selectOptionList = [
    { value: 'option1' },
    { value: 'option2' },
    { value: 'option3' },
    { value: 'option4' },
    { value: 'option5' },
  ];
  return (
    <div>
      <Select placeholder="선택 필수" value={value} valueHandler={valueHandler} selectOptionList={selectOptionList} />
    </div>
  );
};

page.displayName = 'page';

export default page;
