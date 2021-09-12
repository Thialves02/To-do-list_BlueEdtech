export const Api = {
    url:'http://localhost:3001/tasks',
    buildGetRequest: () => fetch(Api.url),
    buildGetById:(id) => fetch(Api.url + '/FindById/' + id),
    buildPost: (body) => {
        return fetch(Api.url + '/add', {
          method: 'POST',
          headers: new Headers({
            "Content-type": "application/json"
          }),
          body: JSON.stringify(body)
        })
      },
    buildPut:(body,id) => {
      return fetch(Api.url + '/update/' + id, {
        method: 'PUT',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    }
}