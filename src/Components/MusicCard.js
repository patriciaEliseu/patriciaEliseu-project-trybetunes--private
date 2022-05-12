import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { resumo, nome } = this.props;
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

      </>
    );
  }
}

MusicCard.propTypes = {
  resumo: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default MusicCard;
