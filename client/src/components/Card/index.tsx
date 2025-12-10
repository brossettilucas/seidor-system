import "./Card.css"
import type { CardProps } from "../../types/props";

export default function TableCard({ employeeData }: CardProps) {

  return (
    <div className="card-root"><div>
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
        <button onClick={() => console.log('Update')} className="btn">Atualizar</button>
        <button onClick={() => console.log('Delete')} className="btn btn-delete">Deletar</button>
      </div>
    </div></div>

  );
};




