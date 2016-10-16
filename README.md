##POC GraphQL
#####Nota: son las primeras pruebas que hacemos con GraphQL !!

####Como utilizarlo:
Correr con: ```npm start```
Ingresar a [http://localhost:4000/graphql](http://localhost:4000/graphql)

> Consultar posts

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

> Crear un post

```javascript
mutation {
  createPost(post: {title:"Algo"}) {
    id
    title
  }
}
```