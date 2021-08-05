import React,{Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Login extends Component {

    state={
        username: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("S")
    }

    onChange = e => this.setState({[e.target.name]: e.target.value })
    
    render() {
        const {username, password} = this.state;
        return (
             <Fragment>
                   <ul className="list-group container">
                       <form onSubmit={this.onSubmit}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Имя</label>
                                <input type="text" value={username} onChange={this.onChange} class="form-control" id="name" placeholder="bakosh@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Пароль</label>
                                <input type="password" value={password} onChange={this.onChange} class="form-control" id="password" />
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit">Логин</button>
                                <div>У вас нету аккаунта ? <Link to='/register'>Регистрация</Link> </div> 
                            </div>
                       </form>
            
                    </ul>
            </Fragment>
        );
    } 
}


export default Login;