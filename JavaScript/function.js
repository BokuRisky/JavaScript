(function()
    {
    'use strict';
    var myBirthTime = new Date(1993,11,25)
    function updateParagraph()
        {
        var now = new Date();
        var days = (now.getTime() - myBirthTime.getTime()) / (ss1000 * 60 * 60 * 24) ; 
        //var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
        document.getElementById('birth-time').innerText = '生まれてから' + days + '日経過';
        }
    setInterval(updateParagraph,50);
    }   
)
();