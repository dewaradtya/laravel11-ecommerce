import MainLayout from '../../Layouts/MainLayout';
import { useMemo, useState } from 'react';
import Create from './Create';
import Update from './Update';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import SplitButton from '../../Components/Button/SplitButton';
import BadgeButton from '../../Components/Button/BadgeButton';
import { FaPlus } from 'react-icons/fa';
import { router } from '@inertiajs/react';

const Index = ({ customers }) => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState({ modal: false, customer: null });
    const [loadingButton, setLoadingButton] = useState(null);

    const handleEditButton = (customer) => {
        setShowModalUpdate({ modal: true, customer: customer });
    };

    const handleDeleteButton = (id) => {
        router.delete(`/customer/${id}`, {
            preserveScroll: true,
            onStart: () => setLoadingButton(id),
            onFinish: () => setLoadingButton(null)
        });
    };

    const columns = useMemo(
        () => [
            {
                label: 'Nama',
                name: 'name'
            },
            {
                label: 'PIC',
                name: 'pic'
            },
            {
                label: 'No. Telepon',
                name: 'telp'
            },
            {
                label: 'Aksi',
                name: 'aksi',
                rowSpan: 2,
                renderCell: (row) => (
                    <>
                        <BadgeButton
                            onClick={() => handleDeleteButton(row.id)}
                            text={`${loadingButton === row.id ? 'loading...' : 'hapus'}`}
                            color="danger"
                            disabled={loadingButton !== null}
                        />
                        <BadgeButton
                            onClick={() => handleEditButton(row)}
                            text="edit"
                            color="warning"
                            disabled={loadingButton !== null}
                        />
                        {row.identity && (
                            <BadgeButton
                                onClick={() => console.log('lihat bukti')}
                                text="lihat bukti"
                                color="dark"
                                disabled={loadingButton !== null}
                            />
                        )}
                    </>
                )
            }
        ],
        [loadingButton]
    );

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Customer</h1>

                <SplitButton color="primary" text="Tambah" icon={<FaPlus />} onClick={() => setShowModalCreate(true)} />
            </div>

            <Table columns={columns} rows={customers.data} />
            <Pagination links={customers.links} />

            {showModalCreate && <Create showModal={showModalCreate} setShowModal={setShowModalCreate} />}
            {showModalUpdate.modal && (
                <Update showModal={showModalUpdate.modal} setShowModal={setShowModalUpdate} customer={showModalUpdate.customer} />
            )}
        </>
    );
};

Index.layout = (page) => <MainLayout children={page} title="Customer Page" />;

export default Index;
