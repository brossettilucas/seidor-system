import "./Card.css"
import type { CardProps } from "../../types/props";
import { useState } from "react";
import AppModal from "../Modal/AppModal";
import EmployeeForm from "../Form/EmployeeForm";
import EmployeeDeleteModal from "../Modal/EmployeeDeleteModal";
import { deleteEmployee, updateEmployee } from "../../api/employeeApi";
import { normalizeEmployeeForm } from "../../utils/typeConvert";

export default function TableCard({ employeeData }: CardProps) {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <div className="card-root">
      <div className="card-info">
        <div className="card-line">
          <span className="label">Nome: </span>
          <span>{employeeData.name}</span>
        </div>

        <div className="card-line">
          <span className="label">CPF: </span>
          <span>{employeeData.cpf}</span>
        </div>

        <div className="card-line">
          <span className="label">Salário base: </span>
          <span>R$ {employeeData.baseSalary.toFixed(2)}</span>
        </div>

        <div className="card-line">
          <span className="label">Desconto da previdência: </span>
          <span>R$ {employeeData.discount.toFixed(2)}</span>
        </div>

        <div className="card-line">
          <span className="label">Número de dependentes:  </span>
          <span>{employeeData.dependants}</span>
        </div>
      </div>
      <div className="card-buttons">
        <button onClick={() => setOpenUpdate(true)} className="btn">Atualizar</button>
        <AppModal open={openUpdate} onClose={() => { setOpenUpdate(false) }}>
          <EmployeeForm
            employee={employeeData}
            onSubmit={async (updatedData) => {
              await updateEmployee(employeeData.id, normalizeEmployeeForm(updatedData));
              setOpenUpdate(false);
            }}
            onCancel={() => { setOpenUpdate(false) }}></EmployeeForm>
        </AppModal>

        <button onClick={() => setOpenDelete(true)} className="btn btn-delete">Deletar</button>
        <EmployeeDeleteModal
          open={openDelete}
          onClose={() => { setOpenDelete(false) }}
          onConfirm={async () => {
            await deleteEmployee(employeeData.id);
            setOpenDelete(false);
          }}
          employeeName={employeeData.name} />
      </div>
    </div>
  );
};