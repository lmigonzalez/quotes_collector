# <center> Quotes Collector </center>


## A brief description: ##
This is a Full Stack App where you have the option to get some great quotes. You can copy and share quotes white a single click. But it doesn't stop there. The fun part comes when you register and log in. Once you log in, you can submit and give likes to quotes. You can go to your profile and edit or delete any quote you have previously created. If you leave the website and come back in another moment, you won't have to log in since I configured the section to last one year unless you're logged out. User Data and Quote data get saved in a MongoDB database.

**Backend link hosted in Heroku:** [Quotes Collector Backend](https://epic-quotes-backend.herokuapp.com/api/quote/quotes)

 *-If you would like to see the code I use in the backend please contact me and I will gladly provide it to you. The Repo is private for security reasons.*
## The techs I use: ##

### Front-End: ###
-React.js
-React Router
-Content API
-Axios
-CSS
-Bootstrap

### Backend: ###
-Node.js
-Express
-MongoDB
-Mongoose
-JWT

### A brief tour of the website: ###
This is the homepage, the first page you see when you enter the website. From here, you can share and copy every quote:

![alt text](/src/readmeImg/home.png)

When you click the share icon, it takes you to your Twitter account so you can easily share the quote:

![alt text](/src/readmeImg/twitter.png)

If you go to log in, you can log in with your account. If you haven't created one, you can click on the create account link and create a new one. You can use a demo email, but it must be an email since the form has validation. Once registered, it will take you to the login page.

![alt text](/src/readmeImg/login.png)

![alt text](/src/readmeImg/signup.png)

Once logged in, you will be redirected to the homepage, and from there, you can see all quotes you have liked. And create new ones.

![alt text](/src/readmeImg/homelogin.png)

You also will be provided with a profile where you can navigate to see all quotes you have created previously and delete or edit them.

![alt text](/src/readmeImg/profile.png)

![alt text](/src/readmeImg/update.png)

This website also has a 404 page.

![alt text](/src/readmeImg/404.png)