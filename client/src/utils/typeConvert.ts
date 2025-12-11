import type { Employee, EmployeeFormValues } from "../types/employee";

// Funções utilitárias de conversão de tipo entre o formulário e o envio para API

export function normalizeEmployee(data: EmployeeFormValues): Omit<Employee, "id"> {
    return {
        name: data.name,
        cpf: data.cpf,
        baseSalary: Number(data.baseSalary) || 0,
        discount: Number(data.discount) || 0,
        dependants: Number(data.dependants) || 0,
    };
}

export function normalizeEmployeeForm(values: EmployeeFormValues): Omit<Employee, "id"> {
    return {
        name: values.name.trim(),
        cpf: values.cpf.trim(),
        baseSalary:
            values.baseSalary.trim() === "" ? 0 : Number(values.baseSalary.replace(",", ".")),
        discount:
            values.discount.trim() === "" ? 0 : Number(values.discount.replace(",", ".")),
        dependants:
            values.dependants.trim() === "" ? 0 : Number(values.dependants),
    };
}