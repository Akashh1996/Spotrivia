const client_id = "6dd53f640f744c90aa476660c29f5c28";
const _client_secret_id = "eddbd7dbd35346909f066ecb0c159aae";
let token;
let artistsList;





class SpotifyStore {
    async getToken() {
        try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic ' + btoa(client_id + ':' + _client_secret_id)
                },
                body: 'grant_type=client_credentials'
            });
            const data = await response.json();
            return (token = data.access_token);
        } catch (tokenError) {}
    }


    async getArtist() {
        const response = await fetch(
            `https://api.spotify.com/v1/playlists/0RpInrqv6wPGycePgfdEKv/tracks?market=ES&offset=0`, //poner tu ID
            {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            },
        );
        const artists = await response.json();
        return (artistsList = artists.items);


    }



}