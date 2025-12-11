import type { Employee, EmployeeFormValues } from "./employee";

export interface TableProps {
    data: Employee[];
}

export interface CardProps {
    employeeData: Employee;

}

export interface AppModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export interface EmployeeFormProps {
  employee?: Employee;
  onSubmit: (data: EmployeeFormValues) => void;
  onCancel?: () => void;
}

export interface EmployeeDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  employeeName?: string;
}