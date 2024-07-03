import { useForm } from '@inertiajs/react';
import { InputField } from '../../Components/FieldInput';
import { useEffect } from 'react';
import Modal from '../../Components/Modal';
import LoadingButton from '../../Components/Button/LoadingButton';

const ImportExcel = ({ showModal, setShowModal }) => {
    const { setData, post, processing, errors, recentlySuccessful } = useForm({
        file: null, // Update the field name to match the controller
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/products/import`, {
            preserveScroll: true,
            forceFormData: true, // Ensure the file is sent as FormData
        });
    };

    useEffect(() => {
        if (recentlySuccessful) setShowModal(false);
    }, [recentlySuccessful, setShowModal]);

    return (
        <Modal title="Import Product" showModal={showModal} setShowModal={setShowModal}>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="file"
                        label="File Excel"
                        id="file-excel-import"
                        error={errors?.file} // Ensure error message field matches
                        onChange={(e) => setData('file', e.target.files[0])} // Update field name
                        required
                    />
                    <Modal.Footer>
                        <LoadingButton type="button" onClick={() => setShowModal(false)} loading={processing}>
                            Tutup
                        </LoadingButton>
                        <LoadingButton type="submit" loading={processing}>
                            Simpan
                        </LoadingButton>
                    </Modal.Footer>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default ImportExcel;