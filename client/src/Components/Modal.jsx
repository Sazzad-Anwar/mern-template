const Modal = ({ children, showUserDetailsModal }) => {
    return (
        <div
            className={`fixed z-10 inset-0 overflow-y-auto ease-in-out duration-300 ${
                showUserDetailsModal ? 'visible opacity-100' : 'invisible opacity-0'
            } `}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="
                    flex
                    items-center
                    justify-center
                    min-h-screen
                    pt-4
                    px-4
                    pb-20
                    text-center
                    sm:block sm:p-0
                "
            >
                <div
                    className="fixed inset-0 bg-gray-500 dark:bg-transparent bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>

                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>

                {/* <!-- modal body --> */}
                <div
                    className="
                        inline-block
                        align-bottom
                        bg-white
                        dark:bg-gray-800
                        rounded-lg
                        text-left
                        overflow-hidden
                        shadow-xl
                        transform
                        transition-all
                        sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
                    "
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
