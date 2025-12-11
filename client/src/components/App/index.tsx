import { useEffect, useState } from 'react';
import './App.css';
import EmployeesTable from '../Table';
import type { Employee } from '../../types/employee';
import AppModal from '../Modal/AppModal';
import EmployeeForm from '../Form/EmployeeForm';
import { createEmployee, getEmployees } from '../../api/employeeApi';
import { normalizeEmployeeForm } from '../../utils/typeConvert';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [openCreate, setOpenCreate] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getEmployees();
      setEmployees(response || []);
    })();
  }, [])

  return (
    <>
      <div className="app-container">
        <div className="app-header-container">
          <header className="app-header">
            <div className="header-spacer"></div>
            <h1 className="app-header-title">Gerenciamento de Funcionários</h1>
            <button className="add-user-btn" onClick={() => { setOpenCreate(true) }}>Cadastrar</button>
            <AppModal open={openCreate} onClose={() => { setOpenCreate(false) }}>
              <EmployeeForm
                onSubmit={async (employeeData) => {
                  await createEmployee(normalizeEmployeeForm(employeeData));
                  setOpenCreate(false);
                }}
                onCancel={() => { setOpenCreate(false) }}></EmployeeForm>
            </AppModal>
          </header>
        </div>
        <div className="app-table">
          <EmployeesTable data={employees}></EmployeesTable>
        </div>

      </div>
    </>
  )
}

export default App
