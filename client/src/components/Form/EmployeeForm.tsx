import { useState } from "react";
import {
    TextField,
    Button,
    Grid,
} from "@mui/material";
import type { EmployeeFormProps } from "../../types/props";
import type { EmployeeFormValues } from "../../types/employee";

export default function EmployeeForm({
    employee,
    onSubmit,
    onCancel,
}: EmployeeFormProps) {
    const [formValues, setFormValues] = useState<EmployeeFormValues>({
        name: employee?.name ?? "",
        cpf: employee?.cpf ?? "",
        baseSalary: employee?.baseSalary && employee.baseSalary !== 0 ? String(employee.baseSalary) : "",
        discount: employee?.discount && employee.discount !== 0 ? String(employee.discount) : "",
        dependants: employee?.dependants && employee.dependants !== 0 ? String(employee.dependants) : "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormValues(prev => {
            // Trata campos numéricos para ignorar caracteres alfabéticos
            if (["baseSalary", "discount", "dependants"].includes(name)) {
                const numericRegex = /^[0-9]*[.,]?[0-9]*$/;
                if (value === "" || numericRegex.test(value)) {
                    return { ...prev, [name]: value };
                }
                return prev;
            }

            // Retorna os campos em strings
            return { ...prev, [name]: value };
        });

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    return (
        <div className="form-root">
            <form id="employeeForm" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid size={12}>
                        <TextField
                            label="Nome"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid size={12}>
                        <TextField
                            label="CPF"
                            name="cpf"
                            value={formValues.cpf}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid size={12}>
                        <TextField
                            label="Salário Bruto"
                            name="baseSalary"
                            value={formValues.baseSalary}
                            onChange={handleChange}
                            slotProps={{ htmlInput: { inputMode: "numeric" } }}
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid size={12}>
                        <TextField
                            label="Desconto da Previdência"
                            name="discount"
                            value={formValues.discount}
                            onChange={handleChange}
                            slotProps={{ htmlInput: { inputMode: "numeric" } }}
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid size={12}>
                        <TextField
                            label="Número de Dependentes"
                            name="dependants"
                            value={formValues.dependants}
                            onChange={handleChange}
                            slotProps={{ htmlInput: { inputMode: "numeric" } }}
                            fullWidth
                            required
                        />
                    </Grid>
                </Grid>
            </form>
            <div className="buttons">
                <Button variant="contained" color="primary" type="submit" form="employeeForm">{employee ? "Atualizar" : "Cadastrar"}</Button>
                <Button variant="outlined" onClick={onCancel}>Cancelar</Button>
            </div>
        </div>

    );
}
