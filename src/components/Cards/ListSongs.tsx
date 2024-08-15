const ALBUMS = [
    {
      name: 'Desde el Fin del Mundo',
      artist: 'Duki',
      total_songs: '18',
      cover: 'https://i.scdn.co/image/ab67616d0000b273305240b65c28020de3aac8eb',
    },
    {
      name: 'Romance',
      artist: 'Luis Miguel',
      total_songs: '12',
      cover: 'https://i.scdn.co/image/ab67616d0000b273d1cbd51f69cb9803ea603c66',
    },
    {
      name: '24K Magin',
      artist: 'Bruno Mars',
      total_songs: '9',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/2/2b/Bruno_Mars_-_24K_Magic_%28Official_Album_Cover%29.png',
    },
  ];
  
  export default function AlbumList() {
    return (
      <div>
        {ALBUMS.map((album) => {
          return (
            <article className="album-container">
              <img className="cover" src={album.cover} />
              <p className="album-title">{album.name}</p>
              <p className="album-artist">
                {album.artist}
                <br />
                {album.total_songs} canciones
              </p>
            </article>
          );
        })}
      </div>
    );
  }
  