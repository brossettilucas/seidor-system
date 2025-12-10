import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import EmployeesTable from '../Table';
import type { Employee } from '../../types/employee';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

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
      <div>
        <EmployeesTable data={employees}></EmployeesTable>
      </div>
    </>
  )
}

export default App
