import react, { useEffect, useState } from "react";

import AdminLayout from "@/Layouts/AdminLayout";

import Pagination from "@/Components/Pagination";

import { Head, Link, router, usePage } from "@inertiajs/react";

import { PieChart } from "react-minimal-pie-chart";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo,
    faPencil,
    faPlus,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import CourseInfoModal from "@/Components/Admin/CourseInfoModal";

export default function Index({ user, courses, coursesCount }) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            showSuccess();
        }
    }, [flash.success]);

    const [selectedCourse, setSelectedCourse] = useState(null);

    // modal info
    const [showInfo, setShowInfo] = useState(false);

    const handleCloseInfo = () => setShowInfo(false);
    const handleShowInfo = () => setShowInfo(true);

    const showInfoModal = (course) => {
        setSelectedCourse(course);
        handleShowInfo();
    };
    // modal info

    const deleteCourse = (course) => {
        Swal.fire({
            title: `Czy chcesz usunąć kategorię <br> ${course.name}`,
            text: "Nie będziesz mógł cofnąć tej akcji!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Usuń",
            cancelButtonText: "Anuluj",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("adminpanel.course.delete", course.id));
            }
        });
    };

    const showSuccess = () => {
        Swal.fire({
            title: "Sukces!",
            text: flash.success,
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
        });
    };
    return (
        <AdminLayout user={user}>
            <Head title="Kursy" />

            <h1 className="h1 mb-4">Kursy</h1>

            <div className="stats">
                <div className="admin-box d-flex align-items-center justify-content-between">
                    <p className="chart-title h4">Wszystkie kursy</p>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            position: "relative",
                        }}
                    >
                        <PieChart
                            data={[{ value: coursesCount, color: "#4CAF50" }]}
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
                            {coursesCount}
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
                    placeholder="Nazwa kategorii"
                />
            </div>

            <div className="admin-box">
                <div className="row m-0 d-flex justify-content-end">
                    <Link
                        className="btn btn-primary w-max"
                        href={route("adminpanel.course.create")}
                    >
                        Dodaj kategorie <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </div>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Zdjęcie</th>
                            <th scope="col">Tytuł</th>
                            <th scope="col">Prowadzący</th>
                            <th scope="col">Kategoria</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.data.map((course, index) => (
                            <tr key={course.id} style={{ height: "100px" }}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img
                                        src={`/storage/${course.image_path}`}
                                        alt=""
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            objectFit: "cover",
                                        }}
                                    />
                                </td>
                                <td>{course.title}</td>
                                <td>
                                    <Link href={route('profile.index', course.teacher.id)}>
                                        {course.teacher.name}
                                        {" "}
                                        {course.teacher.surname}
                                    </Link>
                                </td>
                                <td>{course.category}</td>
                                <td
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        height: "100.5px",
                                        alignItems: "center",
                                    }}
                                >
                                    {course.name}
                                </td>
                                <td style={{ height: "80px" }}>
                                    <div
                                        className="d-flex gap-2 justify-content-end align-items-center"
                                        style={{ height: "100%" }}
                                    >
                                        <Button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => {
                                                showInfoModal(course);
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
                                                "adminpanel.course.edit",
                                                course.id
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
                                            onClick={() => deleteCourse(course)}
                                        >
                                            <FontAwesomeIcon
                                                icon={faTrashCan}
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={courses.meta.links} />
            </div>

            <CourseInfoModal
                showInfo={showInfo}
                handleCloseInfo={handleCloseInfo}
                course={selectedCourse}
            />
        </AdminLayout>
    );
}
