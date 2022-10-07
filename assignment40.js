function make_album(artist, album, tracks = 0)
{
    return {
        artist: artist,
        album: album,
        tracks: tracks
    }
}

console.log(make_album('Junaid Jamshed','Dil Dil Pakistan'))
console.log(make_album('Nusrat Fateh Ali Khan','Mustt Mustt'))
console.log(make_album('Jal','Aadat'))
console.log(make_album('Strings','Dhaani', tracks = 9))