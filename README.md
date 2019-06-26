# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit https://www.techtonic.com we (the client) are asking to access the IP address associated with the URL. The browser connects to a DNS (domain name server) and retrieves the IP address for the web server that is hosting the site. Once the browser is connected to the web server it sends an HTTP (Hypertext transfer protocol) request for the desired web page. The web server then checks to see if that page exists and if so, it sends it to the browser and then the connection is closed. Then the browser loads and looks for other elements of the page it needs such as images or forms and such by making additional HTTP requests for each element and when each element is loaded the page is complete.

## From start to finish, how does data reach you to be rendered in the browser?

The browser reads bytes of data and are converted into a form it understands such as characters and then those characters are parsed into tokens. Without tokenization all we would see is a bunch of HTML that won't be recognizable to the end user. Once we have all our tokens for the site they are converted into nodes which get linked into a tree like data structure called the DOM(Document Object Model) This is just for the HTML though, Next is the CSS(cascading style sheets) which undergoes the same process as HTML only it ends up in a tree structure called the CSSOM(Cascading style sheet object model) this tree will contain how the HTML should look in the browser. Now that we have our two data structures the browser engine puts them into a render tree and performs the layout which measures the size and position of each element and shows it to the user! When we introduce JavaScript and the browser encounters a <script></script> tag the DOM pauses loading until the script is finished being parsed and tokenized just as the HTML and CSS are. This is handy in knowing so that you don't place script tags all over your site creating a long load time.

## What code is rendered in the browser?

HTML is rendered in the browser. CSS styles the HTML and JavaScript provides functionality.

## What is the server-side code’s main function?

The main function of server-side code is used to facilitate permanent storage with things like databases or files and will also render pages to the client as well as process user-input. Some examples are user validation, navigating to other pages and retrieving data.

## What is the client-side code’s main function?

Client-side code is mainly used for the clients browser to interact with the pages HTML elements such as tables or buttons. CSS is also used in the client side to determine how the page should be styled. This is good for dynamically showing or hiding elements based on user input and displaying to the user when he or she does not have the correct input known as validation controls.

## What is runtime?

runtime is the software or instructions that get executed while a program is running which include instructions you didn't write outright but are necessary for the execution of the code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One. This is client based so it's dependent on the user.

## How many instances of the server-side code are available at any given time?

As many as needed for each user accessing the site.

## How many instances of the databases connected to the server application are created?

One and once you exit the page the connection to the database is closed but the info you placed will be stored in the database for later use by the user.
