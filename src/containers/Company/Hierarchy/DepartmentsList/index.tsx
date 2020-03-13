import * as React from 'react';
import { Props } from './types';
import { Container } from './styled'
import Department from './Department';

const DepartmentsList: React.FunctionComponent<Props> = ({ departments, handleSelectDepartment, activeDepartment, lang}) => {
  return(
      <Container>
            {departments && 
            departments.map((department, index) => 
              <Department 
                key={index} 
                show={false} 
                itemIndex={index + 1} 
                total={departments.length} 
                department={department}
                selectDepartment={handleSelectDepartment}
                activeDeparment={activeDepartment}
                lang={lang}
              />)}
      </Container> 
  );
};

export default DepartmentsList;
