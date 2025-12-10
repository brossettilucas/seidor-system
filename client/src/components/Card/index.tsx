import "./Card.css"
import type { CardProps } from "../../types/props";

export default function TableCard({ employeeData } : CardProps) {

  return (
    <div className="card">
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
  );
};




