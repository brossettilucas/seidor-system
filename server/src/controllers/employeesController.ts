import { Request, Response } from "express";
import * as service from "../services/employeesServices";

export const testController = (req: Request, res: Response) => {
    return res.send("Teste de rota");
}

export const getEmployees = (req: Request, res: Response) => {
    const employees = service.getEmployees();
    return res.json(employees);
}
