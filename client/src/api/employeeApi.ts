import axios from "axios";
import type { Employee } from "../types/employee";

const api = axios.create({
  baseURL: "http://localhost:5000/api/employees",
});

export async function getEmployees(): Promise<Employee[]> {
  const response = await api.get("/");
  return response.data;
}

export async function createEmployee(employee: Omit<Employee, "id">): Promise<Employee> {
  const response = await api.post("/", employee);
  return response.data;
}

export async function updateEmployee(id: number, employee: Omit<Employee, "id">): Promise<Employee> {
  const response = await api.put(`/${id}`, employee);
  return response.data;
}

export async function deleteEmployee(id: number): Promise<{ message: string }> {
  const response = await api.delete(`/${id}`);
  return response.data;
}
