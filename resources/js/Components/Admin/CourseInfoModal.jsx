import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { format } from "date-fns";

export default function CourseInfoModal({ showInfo, handleCloseInfo, course }) {
    let formattedDate = "";
    if(course){
        formattedDate = format(new Date(course.created_at), 'dd.MM.yyyy');
    }
    return (
        <>
            <Modal show={showInfo} onHide={handleCloseInfo}>
                <Modal.Header closeButton>
                    <Modal.Title>{course?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {course ? (
                        <>
                        <div className="d-flex justify-content-center mb-3">
                            <div className="profile-image">
                                <img src={`/storage/${course.image_path}`} alt={course.title} />
                            </div>
                        </div>
                            <p>Tytuł: {course.title}</p>
                            <p>Opis: {course.description}</p>
                            <p>Prowadzący: {course.description}</p>
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
