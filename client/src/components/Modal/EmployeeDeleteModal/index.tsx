import type { EmployeeDeleteModalProps } from "../../../types/props";
import AppModal from "../AppModal";
import "./EmployeeDeleteModal.css";

export default function EmployeeDeleteModal({ open, onClose, onConfirm, employeeName }: EmployeeDeleteModalProps) {
    return (
        <AppModal open={open} onClose={onClose}>
            <div className="delete-modal-container">
                <h2 className="delete-modal-title">Confirmar exclusão</h2>

                <p className="delete-modal-text">
                    Tem certeza que deseja excluir{" "}
                    <strong>{employeeName}</strong>?
                    <br />
                    Esta ação não pode ser desfeita.
                </p>

                <div className="delete-modal-actions">
                    <button className="btn-cancel" onClick={onClose}>
                        Cancelar
                    </button>

                    <button className="btn-delete" onClick={onConfirm}>
                        Excluir
                    </button>
                </div>
            </div>
        </AppModal>
    );
}
