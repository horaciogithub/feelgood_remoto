export function PostData(type, userData) {

    let BaseUrl = 'http://serviciowebfeelgood.000webhostapp.com/api/';

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ...PERSONAL ACCESS TOKEN HERE...'
            },

            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })

            .catch((error) => {
                reject(error)
            })
    })
}