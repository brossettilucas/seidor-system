import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import EmployeesTable from '../Table';
import type { Employee } from '../../types/employee';
import AppModal from '../Modal/AppModal';
import EmployeeForm from '../Form/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [openCreate, setOpenCreate] = useState(false);

  useEffect(() => {
    (async () => {
      const API_URL = "http://localhost:5000/api/";
      try {
        const response = await axios.get(API_URL + 'employees');
        console.log(response.data);
        setEmployees(response.data || []);
      } catch (e) {
        console.error(e);
      }
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
              <EmployeeForm onSubmit={() => { console.log('submit') }} onCancel={() => { setOpenCreate(false) }}></EmployeeForm>
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
