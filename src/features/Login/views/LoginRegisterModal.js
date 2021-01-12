import React from "react";
import { Modal } from "antd";
import { connect } from 'react-redux';
import Login from '../Login';
import Register from '../Register';
import { toggleLoginModal } from '../ducks'

function LoginRegisterModal({ isCreateNew, isLoginModalOpen, toggleLoginModal }) {
    return (
        <Modal
            title="Sign In"
            visible={isLoginModalOpen}
            onCancel={toggleLoginModal}
            footer={null}
        >
            {isCreateNew ? <Register /> : <Login />}
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    isCreateNew: state.loginReducer.isCreateNew,
    isLoginModalOpen: state.loginReducer.isLoginModalOpen,
});

const mapDispatchToProps = {
    toggleLoginModal
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterModal);
