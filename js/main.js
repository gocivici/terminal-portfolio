

$("p").hide();
var e = "user";
var audio = new Audio('portal-still-alive.mp3');

var App = {
    echo: function(text) {
        this.echo(text);

        if(ga != undefined) ga('send', 'event', 'echo', 'text', text);
    },
    help: function() {
      showHelp(this);

        if(ga != undefined) ga('send', 'event', 'help');
    },

        ls: function() {
            this.error('<ls> is not available. I guess you want to list available commands with <help>:');
             showHelp(this);
        if(ga != undefined) ga('send', 'event', 'ls');
    },
    whoareyou: function() {
        this.echo("\n");
        this.echo("Hi! I'm Görkem,");
        this.echo("I love to build stuff!, I'm also an ameteur astronomer who likes to explore the nightsky.");
        this.echo("I usually use microcontollers on my projects, mostly arduinos. And I'm familiar with web development.");
        this.echo("My skills:");
        this.echo("\t[[b;#44D544;]Matlab]:           [################################       ]")
        this.echo("\t[[b;#44D544;]HTML/CSS/JS]:      [#############################          ]")
        this.echo("\t[[b;#44D544;]C]:                [##############################         ]")
        this.echo("\t[[b;#44D544;]Python]:           [###################################    ]")
        this.echo("Other skills:");
        this.echo("\t[[b;#44D544;]Adobe Permier]:    [##########################             ]")
        this.echo("\t[[b;#44D544;]Cinema 4D]:        [#####################                  ]")
        this.echo("\t[[b;#44D544;]Fusion 360]:       [########################               ]")

        this.echo("\n\n");

        if(ga != undefined) ga('send', 'event', 'whoareyou');
    },
    contact: function() {
        this.echo("Contact info:")
        this.echo("Email: gocivici@gmail.com");
        this.echo("Twitter: @gocivici");

        if(ga != undefined) ga('send', 'event', 'contact');
    },
      api: function() {
        this.echo("api: //TODO ")
        if(ga != undefined) ga('send', 'event', 'api');
    },
       blog: function() {
        if(ga != undefined) ga('send', 'event', 'blog');
        this.echo("Loading the blog... \n")
        setTimeout(function(){ document.location.href = 'https://gocivici.com/blog'; }, 2500);
    },
       publications: function() {
        if(ga != undefined) ga('send', 'event', 'publications');
        this.echo("Loading scholar citations...  \n")
        setTimeout(function(){ document.location.href = 'https://scholar.google.com/citations?user=qdtZ5DMAAAAJ&hl=sv'; }, 2500);
    },
        thecakeisalie: function() {

document.getElementById('texteru').style.display="block"

          $( function() {
    			$( '.type-text' ).each( function() {
    				var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
    				var thing = $( this ).empty().attr( 'title', '' ).teletype( {
    					text: items.split( ';' ),
    					typeDelay: 70,
    					backDelay: 0,
    					delay: 3000,
    					preserve: false,
    					loop: 1,
              humanise:false,
    					callbackType: function( letter, current, teletype ) {
    						if ( current.index == 2 && current.position == 13 ) {
    							teletype.setCursor( '_' );
    						}
    					},
    					callbackNext: function( current, teletype ) {
    						if ( current.index == 3 ) {
    							teletype.setCursor( '▋' );
    						}
    					}
    				} );
    			} );
    		} );

          audio.play();
          setTimeout(func1,16000);
          setTimeout(func2,29000);
          setTimeout(func3,39000);
          setTimeout(func4,62000);
          setTimeout(func5,67000);
          setTimeout(func6,73000);
          setTimeout(func7,80000);
          setTimeout(func9,90000);
          setTimeout(func8,120000);
          setTimeout(func10,129000);
          setTimeout(func11,179000);
          function func1()
{
	document.getElementById('apertur').style.display="block";
}
function func2()
{
document.getElementById('dead').style.display="block";
document.getElementById('apertur').style.display="none";
}


function func3()
{
document.getElementById('dead').style.display="none";
document.getElementById('atom').style.display="block";
}
function func4()
{
document.getElementById('atom').style.display="none";
document.getElementById('heart').style.display="block";
}
function func5()
{
document.getElementById('heart').style.display="none";
document.getElementById('pieces').style.display="block";
}
function func6()
{
document.getElementById('pieces').style.display="none";
document.getElementById('fire').style.display="block";
}
function func7()
{
document.getElementById('fire').style.display="none";
document.getElementById('happy').style.display="block";
}
function func8()
{
document.getElementById('apertur').style.display="none";
document.getElementById('mesa').style.display="block";
}
function func9()
{
document.getElementById('happy').style.display="none";
document.getElementById('apertur').style.display="block";
}
function func10()
{
document.getElementById('mesa').style.display="none";
document.getElementById('cake').style.display="block";
}
function func11()
{
location.reload();
}

    },
          projects: function() {
        this.echo("Loading projects page...\n")
       setTimeout(function(){ document.location.href = 'https://gorkem.cc/projects.html'; }, 1200);
        if(ga != undefined) ga('send', 'event', 'projects');
    },
        publicPGPkey: function() {
        showPGP(this);
        if(ga != undefined) ga('send', 'event', 'publicPGPkey');
    },

         pics: function() {
         this.echo("Loading flickr photostream...\n")
        setTimeout(function(){ document.location.href = 'https://www.flickr.com/photos/gocivici'; }, 1200);

    },
        share: function() {
        this.echo("share: //TODO")
        if(ga != undefined) ga('send', 'event', 'share');
    },
         cv: function() {
        this.echo("Seriously, you came this far asking for a CV?")
        this.error("Try again, please.");
        if(ga != undefined) ga('send', 'event', 'cv');
    },
        su: function(user) {
        this.echo("Seriously, [[b;#44D544;]"+user+"]!? I like you. Who are you?")
        if(ga != undefined) ga('send', 'event', 'su');
    },
    sudo: function() {
        this.echo("Daaamnnn boi/gurl, I like you..")
        if(ga != undefined) ga('send', 'event', 'su');
    },
    about: function() {
        this.echo("\tThis page was built with <a href='http://terminal.jcubic.pl/' target='_blank' style=''>jQuery Terminal Emulator</a> plugin, and hosted by <a href='aws.amazon.com' target='_blank' style=''>Amazon S3<a/>. Source code is available on my <a href='https://github.com/gocivici' target='_blank'>GitHub</a>.<br/>This page is under development..", {raw:true});

        if(ga != undefined) ga('send', 'event', 'about');
    },
    id: function(){
        this.echo("uid=1000(tui) gid=1000(tui)");
        if(ga != undefined) ga('send', 'event', 'id','id');
    },
    startx: function() {
      this.echo("Starting graphical interface...\n")
     setTimeout(function(){ document.location.href = 'https://gorkem.cc'; }, 1200);

        if(ga != undefined) ga('send', 'event', 'startx');
    }
}



window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

jQuery(document).ready(function($) {



           $('body').terminal(App, {
         greetings: "[[b;#44D544;]                                                    \n"+
        "   _____            _                    ____           _               _   \n"+
        "  / ____| * *      | |                  |  _ \\         | |             | |  \n"+
        " | |  __  ___  _ __| | _____ _ __ ___   | |_) | ___ ___| | ___   _ _ __| |_ \n"+
        " | | |_ |/ _ \\| '__| |/ / _ \\ '_ \\` _\\  |  _ < / _ \\_  / |/ / | | | '__| __|\n"+
        " | |__| | (_) | |  |   <  __/ | | | | | | |_) | (_) / /|   <| |_| | |  | |_ \n"+
        "  \\_____|\\___/|_|  |_|\\_\\___|_| |_| |_| |____/ \\___/___|_|\\_\\___|_|_|   \\__|\n"+
        "                                                                     v1.09.8\n\n"+
                    "]\n\n[[;#44D544;]Welcome stranger,\ntype] [[b;#fff;]help] [[b;#44D544;]to list available commands,\n][[b;#fff;]whoareyou] [[b;#44D544;]to read something about me,\nor ][[b;#fff;]about][[b;#44D544;] to learn about this webpage. ]\n\n",
                prompt: function(p){
            var path = '~'
            p("[[b;#44D544;]"+ e + ":" + path + "# ]");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true
        });




});

function showPGP(consoleObj)
{
consoleObj.echo("-----BEGIN PGP PUBLIC KEY BLOCK-----\n"+
"Version: Mailvelope v0.8.0\n"+
"Comment: Email security by Mailvelope - http://www.mailvelope.com\n"+

"xsBNBFNBPl0BCAClQAECgqAl3OhTZo5o4DL8PHphMzALz/xZF+8ys3h9VRPZ\n"+
"WrhzdhCj4celvy9uhfE22e8CBGpSwY1p/CkpilgZX1j/Ur9t1jZgoOGKFkR4\n"+
"tRM9cTGQHh+LvpBjnShkV8zlYc2+2GqgPN6Dijqi0N0Pq/TnNcPF0etPZZ/t\n"+
"Vq8rueaXKEDRkHICNcIYK2d0UML/6ai/pvmrCvKZZWqju+GcNDkhpU82lWtv\n"+
"x6o/J4BUVGCnqePR40ZrpxOk65X7dmC0edZhCtZp0Aiyeh7I8Pu8sPmTiF4/\n"+
"f3t+uGAmRkT+19QOnVsx9sHnDK5hBUNL+OBW0MiMPx8jqbX4G5DPzIjLABEB\n"+
"AAHNH05pY29sbyBQYXRlcm5vc3RlciA8aGlAYWR2YS5pbz7CwHIEEAEIACYF\n"+
"AlNBPmkGCwkIBwMCCRAm2a02Gx6G4wQVCAIKAxYCAQIbAwIeAQAAdcQH+wWJ\n"+
"cjvVbKo/Ss56lWO5PXIfz1+fbjLwxX8o12p/bzu55fWW07g5WBFE0CQK1W/i\n"+
"QVsN505QPhNkFhWTPR7paQmvjilSVoN8mKQfnrMO8bRyb03WCnUNsd4GzO4D\n"+
"hV5rErnPw49jZGfh2OuDHxxspw2XgmYwmV04GY/xN64ZToLGbBtw/DOXP01U\n"+
"XwiJoxYVCt4l85qJ3jikSkN3U95hUQdQyAixD2zFwdBqWuMzOw/sMLh8i7Ok\n"+
"JHPu69bzvd3j38S8sy+4p9YK7/seAW3SfuzsfaaOlKIWMxR4LwrXjJ46KMV7\n"+
"+7ixA4Km7Uf9G0sD9L9BCg8sbwSmYJ3T/IAvxxzOwE0EU0E+aQEIAORiRlgw\n"+
"9E8R0ns81lon3TUxb2iexdLKKZpkduc4zHS3zL/XQyLoP9hjsdh/AKQQpc57\n"+
"GApIsUWgGycKDyIJDB0bw+7tp8nQrfy/01Rt70gpxo6t1ZaufmQtuuQUZ5Uv\n"+
"YGk/QTv54WDKHxDG9qTlVRD30Zf4hrkfFV/3KTyyjMZX24UQ4ByZgJsPlz/s\n"+
"LhbZ+ZJrdhospoYaBZD8uAte5Kp7FeyOgWhP0YZu1L4zSWTlffWBz5wUejZk\n"+
"5qHNXvZSRQ+Nbgr2IrWE8SW3HYw3AZELMoqNx177vdHKpJhQZLX8zgURHUPx\n"+
"e2KrL1vqBhxL976NkhkXxOAt6+DxnhAfekcAEQEAAcLAXwQYAQgAEwUCU0E+\n"+
"agkQJtmtNhsehuMCGwwAAC+yB/0X0Mj8zRI632vUm1lDyncz9wckG0vOzQkf\n"+
"BCYgv/RHxsTqqQjdeh6lovuOqPhVjCBe2qiLk6AzQN6Z+CMiXxdatppBjTEm\n"+
"c8/8MXFFleK/DUInCX01WMF7z+GZ2hM4oejM9FM3G+Ic+ILvgMSpjCv/ZwCx\n"+
"Pl9Mommy7cbpB+ERlVoKullu/4g+9l7sjJQu1wRwiaMcTyB9DRrlHiOMvEKW\n"+
"BgH1y5PCIXHHzBH0iPb236Kw5cgVqTMjBffKW2EM8Q9ix+zwNtuFcPuUoLEt\n"+
"CBkch/bN/E7ZfPPLjjmrWcQ+roQekYz9h4LW8Z/bcI5MsV57UOwNzdEY8Z+p\n"+
"5PchLxtG"+
"=NUbL"+
"-----END PGP PUBLIC KEY BLOCK-----");
}

function showHelp(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#44D544;]whoareyou]         short bio about me");
        consoleObj.echo("\t[[b;#44D544;]startx]            switch to graphical interface");
        consoleObj.echo("\t[[b;#44D544;]blog]              open blog ");
        consoleObj.echo("\t[[b;#44D544;]projects]          list some projects i've been working on");
        consoleObj.echo("\t[[b;#44D544;]contact]           get in touch");
        consoleObj.echo("\t[[b;#44D544;]pics]              take a look at my flickr photostream");
        consoleObj.echo("\t[[b;#44D544;]thecakeisalie]     just try it.(works best on Chrome)");
        consoleObj.echo("\t[[b;#44D544;]clear]             clear the console");
        consoleObj.echo("\t[[b;#44D544;]help]              this help screen.");
        consoleObj.echo("");
        consoleObj.echo("[[b;#ffff00;]TIP:] press <tab> to trigger autocompletion");
        consoleObj.echo("[[b;#ffff00;]TIP2]: you can use the up and down keys to see previous commands");
}
//var offset = $('.terminal').offset();
//var y_pos = offset.top;
//console.log(y_pos);
//function bottom() {
//    document.getElementById("texteru").scrollIntoView();
//};
//bottom();
