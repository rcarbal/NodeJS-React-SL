import React from 'react';

class Footer extends React.Component {

    state = {
        active: ''
    }

    adminLogin() {
        this.setState({active: 'login'})
    }

    render() {

        console.log(this.state.active)
        return(
            <footer className="site-footer">
                <div className="container">
                    <div className="site-footer-inner has-top-divider">
                        <a href='/' className="brand row d-flex justify-content-center" style={{marginBottom: '12px'}}>
                            <span className="fa-stack">
                                <i className="far fa-circle fa-stack-2x"></i>
                                <i className="far fa-paper-plane fa-stack-1x"></i>
                            </span>
                        </a>
                        <div className="row d-flex justify-content-center" style={{marginBottom: '12px'}}>
                            &copy; 2019 SmoothLegal, all rights reserved
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <button onClick={this.adminLogin.bind(this)}>Admin login</button>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;
