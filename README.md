##POC GraphQL
#####Nota: son las primeras pruebas que hacemos con GraphQL !!

####Como utilizarlo:
- Correr con: ```npm start```
- Ingresar a [http://localhost:4000/graphql](http://localhost:4000/graphql)
- Consultar un post especifico
```javascript
query {
  post(id:1) {
    id
    title
  }
}
```
- Crear un post
```javascript
mutation {
  createPost(post: {title:"Algo"}) {
    id
    title
  }
}
```
- Consultar todos los posts
- Podemos hacer mas de una consulta en el mismo request
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
}
```