# Blog WebApp using GraphQL

# How to run the project 
  
  open terminal <br/>
  ```npm i```
  
  open db/connection.js
  instead of this __postgres://postgres@localhost:5432/postgres__ put your local db connection for run the project 
  
  create two tables 
  Schema as follows
  
  __posts__
 ```
  id (primary key - int)
  title (title of the post - varchar)
  content (content of the post - varchar)
  status (status of post (draft / post ) of the post - varchar)
  userId (userId of the User - int ( forein key )) 
  ```
  __users__
  ```
  id (primary key - int)
  name (name of the user - varchar)
  email (email of the user - varchar)
  password (password of user - varchar)
  
  ```
  ```node index.js```
  
# Project endpoints

  __signup__
  ```
  localhost:6969/user
  body:
  {
    mutation{
      signup(name:"sohel", email:"abc@xyz.com", password:"pass")
  }
  response: token
  ```
  
  __login__
  ```
  localhost:6969/user
  body:
  {
    mutation{
      login(email:"abc@xyz.com", password:"pass")
  }
  response: token
  ```
  
  __create Post__
  ```
  localhost:6969/post
  header: x-access-token: token
  body:
  {
    mutation{
      createPost(title:"my blog","content":"it is the best blog", status:"post"){
        id
      }
  }
  
  ```
  
  __get all Post__
  ```
  localhost:6969/post
  header: x-access-token: token
  body:
  {
    query{
      getAllPost(){
        id
        title
        content
        status
      }
  }
  
  
  ```
  __get all Post for user__
  ```
  localhost:6969/post
  header: x-access-token: token
  body:
  {
    query{
      getByUserId(){
        id
        title
        content
        status
      }
  }
  ```
