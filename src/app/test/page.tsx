'use client';

import Description from '@/components/common/ui/description/Description';
import Label from '@/components/common/ui/label/Label';
import Select from '@/components/common/ui/select/Select';
import { useEffect, useState } from 'react';

const page = () => {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
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
  useEffect(() => {
    if (value === '') {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [value]);
  return (
    <div style={{ padding: '2%' }}>
      <Select
        label={<Label text="label" required />}
        placeholder="선택 필수"
        value={value}
        valueHandler={valueHandler}
        state={isError ? 'error' : undefined}
        selectOptionList={selectOptionList}
        description={
          <Description text={isError ? '필수 선택입니다' : '선택 완료'} type={isError ? 'error' : 'success'} />
        }
      />
    </div>
  );
};

page.displayName = 'page';

export default page;
