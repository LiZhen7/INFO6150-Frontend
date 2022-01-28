# INFO6150 Web UI/UX Final 

Name: Zhen Li  NUID: 001543167

## About the project

This project is about digtal video game: "League of Legends". I set up a fake website about this game which imitate the official website. It has six views. Two of them are related to form. Below is a brief description of each view.

### Header

-When the page down to 640px or less, the navigation button on the left will become a drop-down menu.
-Use fetchLogout in fake-services.
-When user log in succeed, the navigation button(login and register) on the right will become "Hello, username!" and a logout button. After click the logout button, they will recover.
-The skip link is after "Privacy".

### Home

-There are tabs about news on the top right.
-There are some cards at the bottom. When you hover on cards, they will show a overlay with some text.

### Champions

-There are tabs about champions in this page.
-There are many cards for each tab. When you hover on cards, they will have some minor changes

### About

-No interactions. Just a page that describes the topic and purpose of the website

### Privacy

-Have accordion at the bottom.

### Login

-Use fetchLogin in fake-services.
-These two fields must be filled or the login button will disabled.
-If login success, a "login success" notice will appear and login button wil be replaced by the loading indicator for 3s. After that, it will turn to "Home" page. Meanwhile, the login and register navigation button on the top right corner will be replaced by "Hello, username(your input)" and a logout button.
-If login failed, the error message will appear on the form.("No such user" and "Invalid password").

### Register

-Use fetchRegister in fake-services.
-Email is the field that can prevent the form from submitting with invalid data.
-These three fields must be filled or the register button will disabled.
-If register sucess, a "register sucessfully" notic will appear.
-If register failed, a "User exists" error notice will appear.

### Images

-The images in "Home" and "Champions" are from League of Legends offical website https://www.leagueoflegends.com/en-us/
-The images in "About" are from League of Legends offical Facebook account https://www.facebook.com/leagueoflegends
-The license terms: https://merch.riotgames.com/en-us/terms/