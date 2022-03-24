# Blog WebApp using GraphQl

# How to run the project 
  
  open terminal 
  ## _ _npm i
  
  open db/connection.js
  instead of this __postgres://postgres@localhost:5432/postgres__ put your local db connection for run the project 
  
  create two tables 
  Schema as follows
  
  __posts__
  _ _id (primary key - __int__)
  title (title of the post - __varchar__)
  content (content of the post - __varchar__)
  status (status of post (draft / post ) of the post - __varchar__)
  userId (userId of the User - __int__ ( forein key )) _ _
  
  __users__
  _ _id (primary key - __int__)
  name (name of the user - __varchar__)
  email (email of the user - __varchar__)
  password (password of user - __varchar__)
  
  
  ## node index.js
  
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
