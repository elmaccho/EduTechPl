import react, { useState } from "react";

import AdminLayout from "@/Layouts/AdminLayout";

import UserProfile from "@/Components/DefaultProfile";
import Pagination from "@/Components/Pagination";
import UserInfoModal from "@/Components/Admin/UserInfoModal";
import Button from "react-bootstrap/Button";

import { Head, Link, router, usePage } from "@inertiajs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo,
    faPencil,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";
import { PieChart } from "react-minimal-pie-chart";

export default function Index({ users, user, count, weekly, roles }) {
    const { flash } = usePage().props;

    const usersCount = count;
    const usersWeekly = weekly;

    const [selectedUser, setSelectedUser] = useState(null);

    // modal info
    const [showInfo, setShowInfo] = useState(false);

    const handleCloseInfo = () => setShowInfo(false);
    const handleShowInfo = () => setShowInfo(true);

    const showInfoModal = (user) => {
        setSelectedUser(user);
        handleShowInfo();
    };
    // modal info

    const showError = () => {
        Swal.fire({
            title: "Błąd!",
            text: flash.error,
            icon: "error",
        })
    }
    const showSuccess = () => {
        Swal.fire({
            title: 'Sukces!',
            text: flash.success,
            icon: "success",
        })
    }

    const deleteUser = (user) => {
        let name = user.name + " " + user.surname;
        Swal.fire({
            title: `Czy chcesz usunąć użytkownika <br> ${name}`,
            text: "Nie będziesz mógł cofnąć tej akcji!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Usuń",
            cancelButtonText: "Anuluj",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("adminpanel.users.delete", user.id));
            }
        });
    };

    return (
        <AdminLayout user={user}>
            {flash.error && (
                showError()
            )}
            {flash.success && (
                showSuccess()
            )}
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
                            <th scope="col">Ranga</th>
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
                                <td>{user.role}</td>
                                <td
                                    className="d-flex gap-2 justify-content-end"
                                    style={{ height: "52.5px" }}
                                >
                                    <Button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => {
                                            showInfoModal(user);
                                        }}
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faInfo} />
                                    </Button>
                                    <Link
                                        className="btn btn-success btn-sm d-flex justify-content-center align-items-center"
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                        }}
                                        href={route(
                                            "adminpanel.users.edit",
                                            user.id
                                        )}
                                    >
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                        }}
                                        onClick={() => deleteUser(user)}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={users.links} />
            </div>

            <UserInfoModal
                showInfo={showInfo}
                handleCloseInfo={handleCloseInfo}
                user={selectedUser}
            />
        </AdminLayout>
    );
}
