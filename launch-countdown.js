$('body').append('<div id="launch_date">');
$('#launch_date').css({'user-select':'none','position':'fixed','bottom':'0','left':'0','padding':'.5em','background':'#FFEB3B','font-size':'12px','opacity':'.6','z-index':'9999','font-family':'Arial'});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {'days': days};
}

function initializeClock(id, endtime) {
    function updateClock() {
        var t = getTimeRemaining(endtime);
        $('#'+id).text('Launch in '+t.days+' Days');
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 3600000);
}
var date = $('[data-launch]').data();
var deadline = new Date(Date.parse(new Date(date)) );
initializeClock('launch_date', deadline);
