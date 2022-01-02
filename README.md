Readme - Idle game

-Idle Game- is project created by Jack Ewers.
The project is similar to other games of the genre, although all lines are written uniquely for the project, syntax and functions may be similar to other projects written by the creator, or have passing similarities to files found on Github / Stack overflow.

This Code is free use, however credit where credit is due, (Just create a hidden element in your HTML code with "@the_guy_with_the_holes") like so ; <footer hidden> @the_guy_with_the_holes</footer> (you can use whatever element suits your needs, footer is not required). This is basic protection for you if the copyright status changes.

Please note that if you plan to monetise the game, you must change some of the functions, and create new additions to the code. Along with replacing image libs, as these are not owned by the creator.
Monetary use of the logo is okay so long as it is not claimed to be created by the user. Please follow previous rules for credit distribution.

INDEX ;
### 
0. Scope
1. Functions
# 1.a, Ingame buttons
# 1.b, Menus
# 1.c, Servers
# 1.d, Math
1.2. Classes & alignmennt

2. Libs

3. Development

4. Pricing structure

5. Future Development
###

0. Scope :::
The scope of the -idle game- is as such that origin clicks should be the key focus. allowing functions that auto update to process data handling is the supportive feature.

.Users - See,
.Dev - See,
.Blocks - See,; 1.a, 1.b, 
.$ - See,; 1.d, 4, 5.
 
1. Functions :::
The idea behind functions was initially  simple one, we have a master Func (Inc&set), which took an input, "++" incremented it on click, rounded the results, then pooped out a rounded score.
Rounding function; Score = Math.round(Score);

Having the numbers for score and click as variables, allowed for subsequent functions to alter the base(Inc&set) will still maintaining their native process ex;

func increaseINC{
    if (click = true){
        score += click;     // Where score/click == var;
        score = Math.round(score);
        Inc&Set();
        innerText = score; }
    else{
        console.log('Nothing happened'); }}

Functions like this are simple to compose and allow for later alterations that keep the base funcions intact.

#Prestige is set as a constant and looks like prestige = { level:playerprestig(0), prog:prestigeprogress{0}, cap:prestgreq{0},}

The foundation for more advanced functions willl stem from "Fireball"'s Main function ("FireballCast"+"Fireballupg"+"FireballStatusCheck").

1.1 Ingame buttons 

a. fireball; 
status = basicbitch("null"), 1x, 3x, 5x,7x and M ("Mayhem").
once upgraded these statuses will be followed by a number ie ; 1x20 or 7x180.
the first two digits represent status and the second two represent upgrade level. 
value can be pulled from fire.level;

b. Menu splitting will be a priority function, main menu should be 5 (menu) blocks and ( See :: a ) buttons.

c. Servers will need to scale > 1000 conc users. Most user data should be able to store in JSON webtokens, however, adding extra data managment such as SQL will create later benefits to both user and developer.
 
1.2. Classes
Class delegation

<>Wrap is Body>Main>fieldset
inner html is div>div>div, representing, (Upper keys, Main score area and then the #lower-buttons)
<> GameBtn represents ALL onscreen game keys.
seperate styling is used with psuedo elements Ex; #div .GameBtn {style}
<>#Prestige represents all prestige elements minus the data displaying current




2. Libs :::
Libs for idle game include (free) software; 
*VS Studio, 
*Procreate,  
*TXTwrap
Hosted images can be found on github @ -REDACTED-

Game Images: 
1.Lower Button images/
#lowerbuttons - image set can found through "../Logs/"
Meaning Logs is a sibling of the main code host.

3. Development :::
Development began on the project mid way through november 2021, although The covid-19 pandemic hindered a lot of companies projects and individuals work flow, this was not the case in Australia. 

-Idle Game- was created as a passion project, To
A, See if it could be done. 
B, to increase the creators profeciancy in Javascript & Typescript. 
C, Create an enjoyable game that is reminiscant of the founders taste

As the project grew in size and scope (feature creep), the need for documenting code increased exponetially. As a result, this readme was created on 9/12/2021 to allow for work on multiple projects, without completly losing understanding of base functions.

Development of the game was done using VS studio code for text editing. Images and backgrounds were created using Procreate on IOS. Finilazation of code was converted to -REDACTED-.


4. $$$

5. Future development;
<input> FINISH ME
.upgrade menu
.upgrade functions
.