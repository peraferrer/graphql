##POC GraphQL
#####Nota: son las primeras pruebas que hacemos con GraphQL !!

####Como utilizarlo:
1. Correr con: ```npm start```
2. Ingresar a [http://localhost:4000/graphql](http://localhost:4000/graphql)
3. Consultar un post especifico
    ```javascript
    query {
      post(id:1) {
        id
        title
      }
    }```
4. Crear un post
    ```javascript
    mutation {
      createPost(post: {title:"Algo"}) {
        id
        title
      }
    }```
5. Consultar todos los posts
    ```javascript
    query {
      posts {
        id
        title
      }
    }```
6. Podemos hacer mas de una consulta en el mismo request
    ```javascript
    query {
      post(id:1) {
        id
        title
      }
      posts {
        id
        title
      }
    }```