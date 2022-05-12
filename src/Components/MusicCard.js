import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong /* getFavoriteSongs */ } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      favorita: false,
      carregaTela: false,
    };
  }

  checkOnChange = ({ target }) => {
    // console.log('eu', target.checked);
    const { musica } = this.props;
    this.setState({
      favorita: target.checked,
    }, async () => {
      const { favorita } = this.state;
      if (favorita === true) {
        // console.log('eu2', trackId);
        this.setState({
          carregaTela: true,
        });
        await addSong(musica);
        this.setState({
          carregaTela: false,
        });
      }
    });
  };

  render() {
    const { resumo, nome, trackId } = this.props;
    const { favorita, carregaTela } = this.state;
    // console.log(musica);
    return (
      <>
        <p>{ nome }</p>
        <audio
          data-testid="audio-component"
          src={ resumo }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        {
          carregaTela ? <Loading /> : (
            <label htmlFor={ trackId }>
              Favorita
              <input
                name="inputFavorita"
                id={ trackId }
                data-testid={ `checkbox-music-${trackId}` }
                type="checkbox"
                checked={ favorita }
                onChange={ this.checkOnChange }
              />
            </label>

          )
        }
      </>
    );
  }
}

MusicCard.propTypes = {
  resumo: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  musica: PropTypes.string.isRequired,
};

export default MusicCard;
