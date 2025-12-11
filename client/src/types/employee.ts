export interface Employee {
    id: number;
    name: string;
    cpf: string;
    baseSalary: number;
    discount: number;
    dependants: number;
    discountIRPF?: number;
}

export interface EmployeeFormValues {
  name: string;
  cpf: string;
  baseSalary: string;
  discount: string;
  dependants: string;
}