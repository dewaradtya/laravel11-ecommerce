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
import { rupiah } from '../../utils';
import UpdateStock from './UpdateStock';

const Index = ({ products, units }) => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState({ modal: false, product: null });
    const [showUpdateStockModal, setShowUpdateStockModal] = useState(false);
    const [loadingButton, setLoadingButton] = useState(null);

    const handleEditButton = (product) => {
        setShowUpdateModal({ modal: true, product: product });
    };

    const handleDeleteButton = (id) => {
        router.delete(`/products/${id}`, {
            preserveScroll: true,
            onStart: () => setLoadingButton(id),
            onFinish: () => setLoadingButton(null)
        });
    };

    const columns = useMemo(
        () => [
            {
                label: 'Nomor Model',
                name: 'model_number'
            },
            {
                label: 'Nama Produk',
                name: 'name'
            },
            {
                label: 'Harga Beli',
                name: 'purchase_price',
                renderCell: (row) => rupiah(row.purchase_price)
            },
            {
                label: 'Harga Jual',
                name: 'price',
                renderCell: (row) => rupiah(row.price)
            },
            {
                label: 'Stok',
                name: 'stock'
            },
            {
                label: 'Satuan',
                name: 'unit'
            },
            {
                label: 'Aksi',
                name: 'aksi',
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
                    </>
                )
            }
        ],
        [loadingButton]
    );

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Produk</h1>

                <div className="d-flex gap-2">
                    <SplitButton color="primary" text="Tambah" icon={<FaPlus />} onClick={() => setShowCreateModal(true)} />
                    <SplitButton color="success" text="Stok" icon={<FaPlus />} onClick={() => setShowUpdateStockModal(true)} />
                </div>
            </div>

            <Table columns={columns} rows={products.data} />
            <Pagination links={products.links} />

            {showCreateModal && <Create showModal={showCreateModal} setShowModal={setShowCreateModal} units={units} />}
            {showUpdateModal.modal && (
                <Update
                    showModal={showUpdateModal.modal}
                    setShowModal={setShowUpdateModal}
                    units={units}
                    product={showUpdateModal.product}
                />
            )}
            {showUpdateStockModal && (
                <UpdateStock showModal={showUpdateStockModal} setShowModal={setShowUpdateStockModal} products={products.data} />
            )}
        </>
    );
};

Index.layout = (page) => <MainLayout children={page} title="Product Page" />;

export default Index;