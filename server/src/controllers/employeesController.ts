import { Request, Response } from "express";
import * as service from "../services/employeesServices";

export const testController = (req: Request, res: Response) => {
    return res.send("Teste de rota");
};

export const getEmployees = (req: Request, res: Response) => {
    const employees = service.getEmployees();
    return res.json(employees);
};

export const getEmployee = (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Id é obrigatório." });

    const employee = service.getEmployee(id);
    if (!employee) return res.status(404).json({ error: "Funcionário não encontrado." });

    return res.json(employee);
};

export const addEmployee = (req: Request, res: Response) => {
    const data = req.body;

    if (!data) return res.status(400).json({ error: "Dados inválidos." });

    const newEmployee = service.addEmployee(data);
    return res.status(201).json(newEmployee);
};

export const removeEmployee = (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: "Id é obrigatório." });

    const ok = service.removeEmployee(id);
    if (!ok) return res.status(404).json({ error: "Funcionário não encontrado." });

    return res.json({ success: true });
};

export const updateEmployee = (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    if (!id) return res.status(400).json({ error: "Id é obrigatório." });

    const updated = service.updateEmployee(id, data);

    if (!updated) return res.status(404).json({ error: "Funcionário não encontrado." });

    return res.json(updated);
};
