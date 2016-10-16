##POC GraphQL
#####Nota: son las primeras pruebas que hacemos con GraphQL !!

####Como utilizarlo:
Correr con: ```npm start```
Ingresar a http://localhost:4000/graphql

> Consultar posts

```
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

```
mutation {
  createPost(post: {title:"Algo"}) {
    id
    title
  }
}
```