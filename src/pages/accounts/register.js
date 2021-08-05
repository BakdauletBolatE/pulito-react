import React,{Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Register extends Component {
    state={
        username: '',
        email: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    onChange = e => this.setState({[e.target.name]: e.target.value })
  
    render() {
        const {username, email, password} = this.state;
        return (
             <Fragment>
                   <ul className="list-group container">
                    <form onSubmit={this.onSubmit}>
                        <div className="mb-3">
                            <label for="name" className="form-label">Имя</label>
                            <input type="text" value={username} onChange={this.onChange} className="form-control" id="name"/>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Почта</label>
                            <input type="email" value={email} onChange={this.onChange}  className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Пароль</label>
                            <input type="password" value={password} onChange={this.onChange} className="form-control" id="password" />
                        </div>
                        <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Регистрация</button>
                        <div>У вас уже есть аккаунт ? <Link to='/login'>Логин</Link> </div> 
                        </div>
                    </form> 
                    
                    </ul>
            </Fragment>
        );
    } 
}


export default Register;