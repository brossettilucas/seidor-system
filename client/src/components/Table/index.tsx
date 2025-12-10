import { useState } from "react";
import type { TableProps } from "../../types/props";
import "./Table.css"
import TableCard from "../Card";

export default function EmployeesTable({ data }: TableProps) {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="table-wrapper">
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th className="table-th">Lista de Funcionários</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((employee) => (
                        <tr key={employee.id}>
                            <td className="table-td">
                                <div
                                    className="row-closed"
                                    onClick={() => toggle(employee.id)}
                                >
                                    <span>{employee.name}</span>  /  {employee.cpf}
                                </div>

                                {openId === employee.id && (
                                    <div className="row-open">
                                        <TableCard employeeData={employee}></TableCard>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}



