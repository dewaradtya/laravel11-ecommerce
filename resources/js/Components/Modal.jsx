import { useEffect, useRef } from 'react';

const Modal = ({ title, children, showModal, setShowModal }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && event.target.classList.contains('modal')) {
                modalRef.current.classList.add('scale-up');
                setTimeout(() => {
                    if (modalRef.current) modalRef.current.classList.remove('scale-up');
                }, 300);
                return false;
            }
        };

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal, setShowModal]);

    return (
        <div
            className={`modal fade ${showModal ? 'show d-block' : 'd-none'}`}
            id="staticBackdrop"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            aria-modal={showModal ?? false}
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" ref={modalRef}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {title}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setShowModal(false)}
                        ></button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

const Body = ({ children }) => {
    return <div className="modal-body">{children}</div>;
};

const Footer = ({ children, className = '' }) => {
    return <div className={`modal-footer ${className}`}>{children}</div>;
};

Modal.Body = Body;
Modal.Footer = Footer;
export default Modal;
