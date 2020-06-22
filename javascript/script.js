
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

if(sPage == "contact.html"){
    window.addEventListener('load',function(){
        initializeV();
        function initializeV(){
                //note: I can't use window.parent becuase the code snippet loads on a different frame than the parent page. See the other snippet for a practical example. This snippet is meant to merely illustrate the effect.
                //1% of the parent viewport width (same as 1vw):
                var vw = window.innerWidth/100;
                //1% of the viewport height (same as 1vh):
                var vh = window.innerHeight/100;
        
            //this is where the magic happens. Simply set width/height/whatever to a multiple of vw/vh and add 'px'. Dimensions must be in pixels since the vw/vh measurement is based on pixels.
            document.getElementById('iframe').style.width = 100*vw+'px';
                //assign width and height to your v unit elements here
        }
        
        window.addEventListener('resize',function(){
            //when the browser window is resized; recalculate
            initializeV();
        });
    });
}