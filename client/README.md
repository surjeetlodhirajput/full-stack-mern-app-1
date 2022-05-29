# Getting Started App 
# you can start the project using the command
## `npm start`
#project folder structure
root
||--------------src
||               ||-api
||               ||-assest
||               ||-component
||               ||-pages
||
||---------public
||
||
# project routes

App
|----Wepage for adding users(`serverAdress/`)
|
|----wepgae for finding user(`serverAdress/user/email`)

# About webpage1
form-control div
|
|--- # error handler
|
|--- # form(handleSubmit)
|     | 
|     |---input Fields
|               |-name(show error if length<2>)
|               |-email(verfiy email or not)
|               |-contact(check length of number)
|               |-courselevel
|               |-country(check is list is empty)
|               |-DOB(dob should not be more than today)
|               
|
|
|---navLink for (https://localhost:3000/find) path

# About webpage 2
container div
|---error handler
|
|---search
|       |-input email
|       |-button(handleSubmit)
|      
|
|--- data
|       |-name
|       |-email
|       |-contact
|       |-courselevel
|       |-country
|       |-DOB
|
|
|---navLink for (https://localhost:3000/) path

#   about css files
form.css
output.css
index.css
App.css

#project working 
##on page one use should be able to enter the details and if details are according to norm user details will be added in database and if user is not selecting the correct details error will be shown on pages

#on page two user would be able to find the details of any user by entering his/her email and if email is right details will be shown or else error will be shown
