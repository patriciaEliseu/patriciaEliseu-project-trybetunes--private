import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      usuario: '',
      carregaTela: false,
    };
  }

  componentDidMount = async () => {
    this.setState({
      carregaTela: true,
    });
    const usuarioAPI = await getUser();
    this.setState({ usuario: usuarioAPI.name, carregaTela: false });
    // console.log(usuarioAPI);
  }

  render() {
    const { usuario, carregaTela } = this.state;
    return (
      <header
        data-testid="header-component"
      >
        {
          carregaTela ? <Loading /> : (

            <h3 data-testid="header-user-name">{ usuario }</h3>
          )
        }
        <Link data-testid="link-to-search" to="/search">search</Link>
        <Link data-testid="link-to-favorites" to="/favorites">favorites</Link>
        <Link data-testid="link-to-profile" to="/profile">profile</Link>

      </header>
    );
  }
}

export default Header;
