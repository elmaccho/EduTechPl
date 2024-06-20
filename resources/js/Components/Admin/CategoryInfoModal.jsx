import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { format } from "date-fns";

export default function CategoryInfoModal({ showInfo, handleCloseInfo, category }) {
    let formattedDate = "";
    if(category){
        formattedDate = format(new Date(category.created_at), 'dd.MM.yyyy');
    }
    return (
        <>
            <Modal show={showInfo} onHide={handleCloseInfo}>
                <Modal.Header closeButton>
                    <Modal.Title>{category?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {category ? (
                        <>
                        <div className="d-flex justify-content-center mb-3">
                            <div className="profile-image">
                                <img src={`/storage/${category.image_path}`} alt={category.name} />
                            </div>
                        </div>
                            <p>Nazwa kategorii: {category.name}</p>
                            <hr className="mt-4 mb-4"/>
                            <p>Data utworzenia: {formattedDate}</p>
                        </>
                    ) : (
                        <p>Brak danych.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseInfo}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
