let startMinute = 5
let time = startMinute * 60
const countEl = document.getElementById('time')
let interval
let minutes
let seconds
function startTimer()
{
    interval = setInterval(updateCounter,1000);

    function updateCounter()
    {
        if(countEl.textContent=='00:00')
        {
            alert('Timeout')
            clearInterval(interval)
        }
        else
        {
            minutes = Math.floor(time/60)
            seconds = time % 60
            if(minutes<10)
            {
                if(seconds<10)
                {
                    countEl.innerHTML = `0` + `${minutes}:`+`0`+`${seconds}`
                }
                else
                {
                    countEl.innerHTML = `0` + `${minutes}:${seconds}`
                }

            }
            else
            {
                countEl.innerHTML = `${minutes}:${seconds}`
            }



            time--
        }
    }

}
function restartTimer()
{

    minutes = 5
    seconds = 0
    countEl.innerHTML = '05:00 '
    clearInterval(interval)
    startMinute = 5
    time = startMinute * 60

}