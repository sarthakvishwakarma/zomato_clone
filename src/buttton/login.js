import React from 'react';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            loginModalIsOpen: false,
            isloggedIn: false,
            loggedInUser: undefined,
        };
    }

    Handlelogin = () => {
        this.setState({ loginModalIsOpen: true });
    };

    handlecancel = () => {
        this.setState({ loginModalIsOpen: false });
    };

    responseGoogle = (response) => {
     console.log(response);
    };

    render() {
        const { loginModalIsOpen} = this.state;
        return (
            <div>
               
                    <div onClick={this.Handlelogin}>Login</div>
            
                <Modal isOpen={loginModalIsOpen} style={customStyles}>
                    <div>
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <div>
                        <button>Login</button>
                        <button onClick={this.handlecancel}>Cancel</button>
                    </div>
                    <GoogleLogin
                        clientId="431082843708-3a08f4n1aslcsmho4aa6icebk485dj1k.apps.googleusercontent.com"
                        buttonText="Continue With Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </Modal>
            </div>
        );
    }
}

export default Login;
