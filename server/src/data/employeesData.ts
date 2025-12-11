import { Employee } from "../types";

let currentId = 1;

const store = {
    employees: new Map<number, Employee>(),
    generateId: () => { return currentId++ }
}

const setStoreInitialValue = () => {
    store.employees.set(1, {
        id: 323,
        name: "José",
        cpf: '071.531.770-94',
        baseSalary: 0,
        discount: 0,
        dependants: 0,
        discountIRPF: 0
    });

    store.employees.set(2, {
        id: 643,
        name: 'Maria',
        cpf: '381.522.850-64',
        baseSalary: 0,
        discount: 0,
        dependants: 0,
        discountIRPF: 0
    });

    store.employees.set(3, {
        id: 9534,
        name: 'Gustavo',
        cpf: '124.432.570-88',
        baseSalary: 31,
        discount: 0,
        dependants: 0,
        discountIRPF: 0
    });

    currentId = 4;
}

// TODO - valores iniciais de teste
// setStoreInitialValue();

export default store;