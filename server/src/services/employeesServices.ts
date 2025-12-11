import store from "../data/employeesData";
import { Employee } from "../types";

export function getEmployees(): Employee[] {
    return Array.from(store.employees.values());
}

export function getEmployee(id: string): Employee | null {
    const numericId = Number(id);
    return store.employees.get(numericId) ?? null;
}

export function addEmployee(data: Omit<Employee, "id">): Employee {
    const id = store.generateId();

    const newEmployee: Employee = {
        id,
        ...data,
    };

    store.employees.set(id, newEmployee);
    return newEmployee;
}

export function removeEmployee(id: string): boolean {
    const numericId = Number(id);
    return store.employees.delete(numericId);
}

export function updateEmployee(id: string, data: Employee): Employee | null {
    const numericId = Number(id);

    const existing = store.employees.get(numericId);
    if (!existing) return null;

    const updated: Employee = {
        ...existing,
        ...data,
        id: numericId, 
    };

    store.employees.set(numericId, updated);

    return updated;
}
