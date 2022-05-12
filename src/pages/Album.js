import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import getMusics from '../services/musicsAPI';
import MusicCard from '../Components/MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      // informacaoAlbum: {},
      artista: '',
      album: '',
      listaMusicas: [],
      carregaTela: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    // console.log('judas2', id);
    this.setState({
      carregaTela: true,
    });
    const listaAlbuns = await getMusics(id);
    const informacao = listaAlbuns[0];
    console.log('judia', listaAlbuns);
    // const todasMusicas = listaAlbuns.splice(1);
    // console.log('judia 2', todasMusicas);
    this.setState({
      listaMusicas: listaAlbuns,
      carregaTela: false,
      // informacaoAlbum: listaAlbuns[0],
      artista: informacao.artistName,
      album: informacao.collectionName,
    });

    // this.setState({ listaAlbuns });
    // console.log('judas1', listaAlbuns[0]);
    // muda estado ({ informaçaoAlbum: listaAlbusn[0]})
    // meuEstado.informaçaoAlbum.artistName
    // meuEstado.informaçaoAlbum.collectionName

    // muda estado ({ listaMusicas: todasMusica})
  }

  render() {
    const { artista, album,
      listaMusicas, carregaTela } = this.state;
    //  console.log(informacaoAlbum);
    //  console.log(listaMusicas);
    return (
      <div data-testid="page-album">
        <Header />
        {
          carregaTela ? <Loading /> : (
            <>
              <h3 data-testid="artist-name">{ artista }</h3>
              <h3 data-testid="album-name">
                { album }
              </h3>
              {
                listaMusicas.slice(1).map((musica) => (
                  <MusicCard
                    // musica={ musica }
                    nome={ musica.trackName }
                    key={ musica.trackId }
                    resumo={ musica.previewUrl }
                  />

                ))
              }
            </>
          )
        }

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default Album;
