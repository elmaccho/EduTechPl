import react, { useEffect, useState } from "react";

import AdminLayout from "@/Layouts/AdminLayout";

import Pagination from "@/Components/Pagination";

import { Head, Link, router, usePage } from "@inertiajs/react";

import { PieChart } from "react-minimal-pie-chart";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPencil, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import SliderInfoModal from "@/Components/Admin/SliderInfoModal";


export default function Index({ auth, sliders, slidersCount }) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            showSuccess();
        }
    }, [flash.success]);

    const [selectedSlider, setSelectedSlider] = useState(null);

    // modal info
    const [showInfo, setShowInfo] = useState(false);

    const handleCloseInfo = () => setShowInfo(false);
    const handleShowInfo = () => setShowInfo(true);

    const showInfoModal = (slider) => {
        setSelectedSlider(slider);
        handleShowInfo();
    };
    // modal info

    const deleteSlider = (slider) => {
        Swal.fire({
            title: `Czy chcesz usunąć ten Slider?`,
            text: "Nie będziesz mógł cofnąć tej akcji!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Usuń",
            cancelButtonText: "Anuluj",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("adminpanel.slider.delete", slider.id));
            }
        });
    };

    const showSuccess = () => {
        Swal.fire({
            title: 'Sukces!',
            text: flash.success,
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
        })
    }

    return (
        <AdminLayout user={auth}>
            <Head title="Slider" />

            <h1 className="h1 mb-4">Slider</h1>

            <div className="stats">
                <div className="admin-box d-flex align-items-center justify-content-between">
                    <p className="chart-title h4">Wszystkie slidery</p>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            position: "relative",
                        }}
                    >
                        <PieChart
                            data={[{ value: slidersCount, color: "#4CAF50" }]}
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
                            {slidersCount}
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
                    placeholder="Nazwa slidera"
                />
            </div>

            <div className="admin-box">
                <div className="row m-0 d-flex justify-content-end">
                    <Link className="btn btn-primary w-max" href={route('adminpanel.slider.create')}>
                        Dodaj slider
                        {" "}
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </div>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Zdjęcie</th>
                            <th scope="col">Tytuł</th>
                            <th scope="col">Tekst 1</th>
                            <th scope="col">Tekst 2</th>
                            <th scope="col">Włączony</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliders.data.map((slider, index) => (
                            <tr key={slider.id} style={{ height: "100px" }}>
                                <th scope="row">{index + 1}</th>
                                <td style={{ width: "100px" }}>
                                    <img src={`/storage/${slider.image_path}`} alt="" style={{ width: "80px", height: "80px", objectFit: "cover" }}/>
                                </td>
                                <td>
                                    {slider.title}
                                </td>
                                <td>
                                    {slider.text1}
                                </td>
                                <td>
                                    {slider.text2}
                                </td>
                                <td style={{ width: "50px" }}>
                                    {slider.displayed}
                                </td>
                                <td
                                    style={{ height: "80px" }}
                                >
                                    <div className="d-flex gap-2 justify-content-end align-items-center" style={{ height: '100%' }}>
                                        <Button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => {
                                                showInfoModal(slider);
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
                                                "adminpanel.slider.edit",
                                                slider.id
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
                                            onClick={() => deleteSlider(slider)}
                                        >
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination links={sliders.links} />
            </div>

            <SliderInfoModal
                showInfo={showInfo}
                handleCloseInfo={handleCloseInfo}
                slider={selectedSlider}
            />
        </AdminLayout>
    );
}
