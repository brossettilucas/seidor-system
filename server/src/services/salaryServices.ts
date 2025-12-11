export function calculateIRRFDiscount(baseSalary: number, discount: number, dependants: number) {
    const DEDUCTION_PER_DEPENDANT = 189.59;

    const baseSalaryIR = baseSalary - discount - (dependants * DEDUCTION_PER_DEPENDANT);
    let aliquot, portion: number;
    if (baseSalaryIR <= 2259.20) {
        aliquot = 0;
        portion = 0;
    } else if (baseSalaryIR > 2259.20 && baseSalaryIR <= 2826.65) {
        aliquot = 0.075;
        portion = 169.44;
    } else if (baseSalaryIR > 2826.65 && baseSalaryIR <= 3751.05) {
        aliquot = 0.15;
        portion = 381.44;
    } else if (baseSalaryIR > 3751.05 && baseSalaryIR <= 4664.68) {
        aliquot = 0.225;
        portion = 662.77;
    } else {
        aliquot = 0.275;
        portion = 896;
    }

    const discountIRRF = (baseSalaryIR * aliquot) - portion;

    return discountIRRF;
}