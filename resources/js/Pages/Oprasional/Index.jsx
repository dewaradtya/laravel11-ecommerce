import MainLayout from '../../Layouts/MainLayout';
import { useMemo, useState } from 'react';
import Create from './Create';
import Update from './Update';
import Table from '../../Components/Table';
import Pagination from '../../Components/Pagination';
import SplitButton from '../../Components/Button/SplitButton';
import BadgeButton from '../../Components/Button/BadgeButton';
import { FaPlus } from 'react-icons/fa';
import { formatDate, rupiah } from '../../utils';
import { router } from '@inertiajs/react';

const Index = ({ oprasionals }) => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState({ modal: false, oprasional: null });
    const [loadingButton, setLoadingButton] = useState(null);

    const handleEditButton = (oprasional) => {
        setShowModalUpdate({ modal: true, oprasional: oprasional });
    };

    const handleDeleteButton = (id) => {
        router.delete(`/oprasional/${id}`, {
            preserveScroll: true,
            onStart: () => setLoadingButton(id),
            onFinish: () => setLoadingButton(null)
        });
    };

    const columns = useMemo(
        () => [
            {
                label: 'Tanggal',
                name: 'date',
                rowSpan: 2,
                renderCell: (row) => formatDate(row.date)
            },
            {
                label: 'Detail',
                name: 'description',
                rowSpan: 2
            },
            {
                label: 'Nilai',
                name: 'amount',
                rowSpan: 2,
                renderCell: (row) => rupiah(row.amount)
            },
            {
                label: 'Pajak',
                colSpan: 2,
                groupColumn: [
                    {
                        label: 'Nilai',
                        name: 'tax_value',
                        renderCell: (row) => (row.tax ? rupiah(row.amount / row.tax.tax_value) : '-')
                    },
                    {
                        label: 'Persen',
                        name: 'tax',
                        renderCell: (row) => (row.tax ? row.tax.tax + '%' : '-')
                    }
                ]
            },
            {
                label: 'Dana',
                name: 'funding',
                rowSpan: 2
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
                        {row.proof && (
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
                <h1 className="h3 mb-0 text-gray-800">Oprasional</h1>

                <SplitButton color="primary" text="Tambah" icon={<FaPlus />} onClick={() => setShowModalCreate(true)} />
            </div>

            <Table columns={columns} rows={oprasionals.data} />
            <Pagination links={oprasionals.links} />

            {showModalCreate && <Create showModal={showModalCreate} setShowModal={setShowModalCreate} />}
            {showModalUpdate.modal && (
                <Update
                    showModal={showModalUpdate.modal}
                    setShowModal={setShowModalUpdate}
                    oprasional={showModalUpdate.oprasional}
                />
            )}
        </>
    );
};

Index.layout = (page) => <MainLayout children={page} title="Oprasional Page" />;

export default Index;
