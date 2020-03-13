import React, { useEffect, useState } from 'react';
import { Props } from './types'
import { connected } from './connect'
import Header from '../../../components/Header';
import { ContentBlock } from '../../../styledTheme/globalStyles';
import Breadcrumbs from '../../../components/UI/Breadcrumbs';
import { HierarchyCrumbs, DEPARTMENTS_REQUEST } from './constants';
import DivisionsPanel from './DivisionsPanel/index';
import LoaderComponent from '../../../components/UI/Loader/index';
import ErrorComponent from '../../../components/UI/Error/index';
import { IDivision } from '../../../store/company/types';
import HierarchySearch from './Search/index';
import { formDataRequestFormat } from '../../../utils/index';
import DepartmentsList from './DepartmentsList';

const Hierarchy: React.FunctionComponent<Props> = ({
  setCurrentPageAction,
  path,
  getDivisionsAction,
  divisions,
  divisionsIsLoading,
  divisionsError,
  getDeptarmentsAction,
  sessionId,
  departmentsIsLoading,
  departmentsError,
  departments,
  lang
}) => {
  const [activeDivision, setActiveDivision] = useState<IDivision>({ id: '', manual_id: 0, name: '', short_name: false })
  const [activeDepartment, setDepartment] = useState('')
  useEffect(() => {
    setCurrentPageAction(path)
  }, [setCurrentPageAction, path])


  useEffect(() => {
    if (!divisions) {
      getDivisionsAction()
    } else {
      setActiveDivision(divisions[0])
    }
  }, [divisions, getDivisionsAction])

  useEffect(() => {
    if (!departments) {
      const request = {...DEPARTMENTS_REQUEST};
      const formData = formDataRequestFormat(request, sessionId);
      getDeptarmentsAction(formData)
    } else {
      setDepartment(departments[0].name)
    }
  },[departments, getDeptarmentsAction, sessionId])

  const handlerSelectDivision = (division: IDivision) => {
    setActiveDivision(division)
    setDepartment(departments![0].name)
  }

  const handleSelectDepartment = (departmentName: string) => {
    setDepartment(departmentName)
  }

  const findHandler = (query: string) => {
      // TODO change when created endpoint backend
    console.log(query)
  }
  const cancelSearch = () => {
      // TODO change when created endpoint backend
  }

  const error = departmentsError ? departmentsError : divisionsError

  return (
    <div>
      <Header isMobile={false} />
      {divisions &&
        <ContentBlock>
          <Breadcrumbs crumbs={HierarchyCrumbs} lastCrumb={activeDivision.name} />
          <DivisionsPanel divisions={divisions} activeDivision={activeDivision} selectDivision={handlerSelectDivision} />
          <HierarchySearch divisionName={activeDivision.name} findHandler={findHandler} cancelSearch={cancelSearch} departmentName={activeDepartment} />
          <DepartmentsList
            departments={departments} 
            handleSelectDepartment={handleSelectDepartment} 
            activeDepartment={activeDepartment}
            lang={lang}
          />
        </ContentBlock>}
      {divisionsIsLoading || departmentsIsLoading? <LoaderComponent margin="200px" /> : ''}
      {error && <ErrorComponent error={error} />}
    </div>
  );
};

export default connected(Hierarchy);
