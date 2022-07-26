// DATA
let stateData=[]
let workData = [];
let playData = [];
let studyData = [];
let exerciseData = [];
let socialData = [];
let selfData = [];

// FUNCTIONS
const upData = (selectDats,day) =>{
    fetch('../data.json').then(res => {
        let db = res.json();
        return  db;
    }).then(data => {
        if (selectDats === 'daily') {
            workData = data[0].timeframes.daily;
            playData = data[1].timeframes.daily;
            studyData = data[2].timeframes.daily;
            exerciseData = data[3].timeframes.daily;
            socialData = data[4].timeframes.daily;
            selfData = data[5].timeframes.daily;     
        }else if(selectDats === 'weekly'){
            workData = data[0].timeframes.weekly;
            playData = data[1].timeframes.weekly;
            studyData = data[2].timeframes.weekly;
            exerciseData = data[3].timeframes.weekly;
            socialData = data[4].timeframes.weekly;
            selfData = data[5].timeframes.weekly;  
        }else if (selectDats === 'monthly') {
            workData = data[0].timeframes.monthly;
            playData = data[1].timeframes.monthly;
            studyData = data[2].timeframes.monthly;
            exerciseData = data[3].timeframes.monthly;
            socialData = data[4].timeframes.monthly;
            selfData = data[5].timeframes.monthly; 
            
        }
        changeValors(day);

    })
}
const changeValors = (time) => {
    
    //Work
    document.getElementById('work-hr').innerHTML= workData.current + 'hrs';
    document.getElementById('work-p').innerHTML= 'Last '+ time + ' - ' + workData.previous + 'hrs';
    
    //Play
    document.getElementById('play-hr').innerHTML= playData.current + 'hrs';
    document.getElementById('play-p').innerHTML= 'Last '+ time + ' - ' + playData.previous + 'hrs';
    
    //Study
    document.getElementById('study-hr').innerHTML= studyData.current + 'hrs';
    document.getElementById('study-p').innerHTML= 'Last '+ time + ' - ' + studyData.previous + 'hrs';
    
    //Exercise
    document.getElementById('exercise-hr').innerHTML= exerciseData.current + 'hrs';
    document.getElementById('exercise-p').innerHTML= 'Last '+ time + ' - ' + exerciseData.previous + 'hrs';
    
    //Social
    document.getElementById('social-hr').innerHTML= socialData.current + 'hrs';
    document.getElementById('social-p').innerHTML= 'Last '+ time + ' - ' + socialData.previous + 'hrs';
    
    //Self
    document.getElementById('self-hr').innerHTML= selfData.current + 'hrs';
    document.getElementById('self-p').innerHTML= 'Last '+ time + ' - ' + selfData.previous + 'hrs';
}
//NAV

const dailyNav = document.getElementById('daily');
const weeklyNav = document.getElementById('weekly');
const monthlyNav = document.getElementById('monthly');

dailyNav.addEventListener('click', async () => {
    dailyNav.style.color= 'hsl(236, 100%, 87%)';
    weeklyNav.style.color= 'hsl(235, 45%, 61%)';
    monthlyNav.style.color= 'hsl(235, 45%, 61%)';
    await upData('daily', 'Day');
});

weeklyNav.addEventListener('click', async () => {
    weeklyNav.style.color= 'hsl(236, 100%, 87%)';
    dailyNav.style.color= 'hsl(235, 45%, 61%)';
    monthlyNav.style.color= 'hsl(235, 45%, 61%)';
    await upData('weekly','Week');
});

monthlyNav.addEventListener('click', async () => {
    monthlyNav.style.color= 'hsl(236, 100%, 87%)';
    weeklyNav.style.color= 'hsl(235, 45%, 61%)';
    dailyNav.style.color= 'hsl(235, 45%, 61%)';
    await upData('monthly','Month');
});


upData('daily','Day');
dailyNav.style.color= 'hsl(236, 100%, 87%)';
