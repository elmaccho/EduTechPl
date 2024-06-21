import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { format } from "date-fns";

export default function SliderInfoModal({ showInfo, handleCloseInfo, slider }) {
    let formattedDate = "";
    if(slider){
        formattedDate = format(new Date(slider.created_at), 'dd.MM.yyyy');
    }
    return (
        <>
            <Modal show={showInfo} onHide={handleCloseInfo}>
                <Modal.Header closeButton>
                    <Modal.Title>{slider?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {slider ? (
                        <>
                        <div className="d-flex justify-content-center mb-3">
                            <div className="profile-image">
                                <img src={`/storage/${slider.image_path}`} alt={slider.name} />
                            </div>
                        </div>
                            <p className="mb-3">Tytuł slidera: <b>{slider.title}</b></p>
                            <p>Tekst 1: </p>
                            <textarea className="form-control mb-3" disabled value={slider.text1}></textarea>
                            <p>Tekst 2: </p>
                            <textarea className="form-control mb-3" disabled value={slider.text2}></textarea>
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
