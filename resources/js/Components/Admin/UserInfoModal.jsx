import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserProfile from "../DefaultProfile";

export default function UserInfoModal({ showInfo, handleCloseInfo, user }) {

    const getStatus = () => {
        if(user.account_type == 'teacher'){
            let account_type = "Nauczyciel";

            return account_type
        } else if(user.account_type == 'student'){
            let account_type = "Uczeń"

            return account_type
        }
    }
    const getRole = () => {
        if(user.role == 'admin'){
            return (<span className="text-danger">Admin</span>)
        } else if(user.role == 'moderator'){
            return (<span className="text-info">Moderator</span>)
        } else {
            return (<span className="text-success">Użytkownik</span>)
        }
    }

    return (
        <>
            <Modal show={showInfo} onHide={handleCloseInfo}>
                <Modal.Header closeButton>
                    <Modal.Title>{user?.name} {user?.surname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {user ? (
                        <>
                        <div className="d-flex justify-content-center mb-3">
                            <div className="profile-image" style={{ width: "150px", height: "150px" }}>
                                <UserProfile user={user}/>
                            </div>
                        </div>
                            <p>Imię: {user.name}</p>
                            <p>Nazwisko: {user.surname}</p>
                            <p>Email: {user.email}</p>
                            <p>Typ konta: <b>{getStatus()}</b></p>
                            <p>Ranga: <b className="text-uppercase">{getRole()}</b></p>

                            <hr className="mt-4 mb-4"/>

                            <p>Adres: <b>{user.address ? user.address : "Brak Adresu"}</b></p>
                            <p>Numer telefonu: <b>{user.phone_number ? user.phone_number : "Brak Numeru Telefonu"}</b></p>
                            <p>Opis: </p>
                            <textarea disabled className="form-control" value={user.about ? user.about : "Brak Opisu"}>
                                
                            </textarea>
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
