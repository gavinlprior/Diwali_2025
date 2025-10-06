# Welcome to the ReadMe file for the Northampton Bid Diwali puppet characters mini app. 2025

A series of buttons that, when individually pressed gives a sound bite for the given puppets history.
For each puppet there are three languages that the user can listen to the sound bite in which are: English, Hindi, and Gujarati.  Each language can be accessed by the user simply by pressing the associated (toggle) language button on the top right of the screen.  All of the button characters description and the associated characters sound bite is then changed to the currently selected language.
The sound bite can be stopped mid flow by pressing the 'Stop' button that is overlayed onto the currently playing characters button.  Notice that nothing else can be accessed on the screen other than the 'Stop' button at this point to focus on what is playing and also to avoid any selections made by mistake (easily done on a mobile phone screen with thumbs/fingers).

> [!IMPORTANT]
*****TO DO WHEN INSTALLING THE FILES TO YOUR SERVER/DOMAIN*****
>
> When deploying files to server or a deeper folder structure, the existing relative file paths (like "style.css" or "Images/logo1.png") will often break.  To resolve this, the <base> tag (found at the top of Index.html file) tells the browser: "All relative file paths in this document should start from this specific URL." This makes the project portable and robust without having to adjust all of the relative paths in all the files which would be painful!
So, you must update the href attribute on the <base> tag (which can be found at the top of the projects Index.html file) to the exact path where your project's top-level folder (the one containing index.html, style.css, and your asset folders) lives on the new domain.
>For example, if the new URL is https://anotherdomain.com/resources/diwali/2025/index.html, you would set the href to:
>
> base href="/resources/diwali/2025/"
>
> This will now correctly resolve to the files, regardless of how deep index.html itself is moved.  This needs to be done otherwise it won't work(!).


-Please ensure, when replacing any files that the naming is replaced exactly like for like (capitals and lowercase need to be the same)

-Audio files to be mp3 for size.  Please view below for the correct/current order of characters.  Any character(s) added or changed please add details below.

-If any characters are changed or the order is changed in any way, the change must also be reflected in the 'script.js' file as the button language descriptions are held there.

-File/folder structure is as follows:

>
index.html\
script.js\
style.css\
-ButtonAudio\
   --en (English soundbites here)\
   --guj (Gujarati soundbites here)\
   --hi (Hindi soundbites here)\
-ButtonIcons\
-Images\
   --footer_logos\
\
en = English\
guj = Gujarati\
hi = Hindi\

=====

Character order for all:\
01: Lord Ram\
02: Mata Sita\
03: Hanumanji\
04: Jatayu\
05: Laxmiji\
06: Ravana\
07: Ganesha\
08: Harminder\
09: Diya\
fullStory: The Story of Diwali\
