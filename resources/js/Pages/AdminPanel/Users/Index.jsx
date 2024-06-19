import react, { useState } from "react";

import AdminLayout from "@/Layouts/AdminLayout";

import UserProfile from "@/Components/DefaultProfile";
import Pagination from "@/Components/Pagination";
import UserInfoModal from "@/Components/Admin/UserInfoModal";

import Button from "react-bootstrap/Button";

import { Head } from "@inertiajs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo,
    faPencil,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import { PieChart } from "react-minimal-pie-chart";

export default function Index({ users, user, count, weekly, roles }) {
    const usersCount = count;
    const usersWeekly = weekly;

    const [show, setShow] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showInfo = (user) => {
        setSelectedUser(user);
        handleShow();
    };

    return (
        <AdminLayout user={user}>
            <Head title="Użytkownicy" />

            <h1 className="h1 mb-4">Użytkownicy</h1>

            <div className="stats">
                <div className="admin-box d-flex align-items-center justify-content-between">
                    <p className="chart-title h4">Wszyscy użytkownicy</p>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            position: "relative",
                        }}
                    >
                        <PieChart
                            data={[{ value: usersCount, color: "#4CAF50" }]}
                            lineWidth={15}
                            startAngle={-90}
                            animate={true}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                textAlign: "center",
                                fontSize: "35px",
                                width: "100%",
                            }}
                        >
                            {usersCount}
                        </div>
                    </div>
                </div>
                <div className="admin-box d-flex align-items-center justify-content-between">
                    <p className="chart-title h4">
                        Nowi użytkownicy w tym tygodniu
                    </p>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            position: "relative",
                        }}
                    >
                        <PieChart
                            data={[
                                { value: usersWeekly, color: "#0084ff" },
                                { value: 7 - usersWeekly, color: "#0084ff3b" },
                            ]}
                            lineWidth={15}
                            startAngle={-90}
                            animate={true}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                textAlign: "center",
                                fontSize: "35px",
                                width: "100%",
                            }}
                        >
                            +{usersWeekly}
                        </div>
                    </div>
                </div>
            </div>

            <div className="admin-box">
                <p className="h5 mb-3">Wyszukiwarka</p>
                <input
                    type="text"
                    className="form-control rounded mb-3"
                    name=""
                    id=""
                    placeholder="Imię lub Nazwisko"
                />

                <div className="row d-flex">
                    <div className="rank max-w-max d-flex gap-3 align-items-center">
                        <label htmlFor="role">Ranga</label>
                        <select name="" id="role">
                            <option value="">Wybierz range</option>
                            {roles.map((role) => (
                                <option value={role} key={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="account_type max-w-max d-flex gap-3 align-items-center">
                        <label htmlFor="account_type">Typ konta</label>
                        <select name="" id="account_type">
                            <option value="">Wybierz typ konta</option>
                            <option value="teacher">Nauczyciel</option>
                            <option value="student">Uczeń</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="admin-box">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Zdjęcie</th>
                            <th scope="col">Imię</th>
                            <th scope="col">Nazwisko</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <div className="table-user-image">
                                        <UserProfile user={user} />
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td
                                    className="d-flex gap-2 justify-content-end"
                                    style={{ height: "52.5px" }}
                                >
                                    <Button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => {
                                            showInfo(user);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faInfo} />
                                    </Button>
                                    <button className="btn btn-danger btn-sm">
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                    <button className="btn btn-success btn-sm">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={users.links} />
            </div>

            <UserInfoModal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                user={selectedUser}
            />
        </AdminLayout>
    );
}
