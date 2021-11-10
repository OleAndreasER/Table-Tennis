// Year and information control
const previousYearEl = document.getElementById('previousYear');
    previousYearEl.addEventListener('click', changeYear);
const nextYearEl = document.getElementById('nextYear');
    nextYearEl.addEventListener('click', changeYear);
const currentYearEl = document.getElementById('currentYear');
    currentYearEl.innerText = new Date().getFullYear();
const galleryEl = document.getElementById('social-gatherings-gallery');
const galleryContainerEl = document.getElementById('social-gatherings-gallery-container');



const dateObj = (day,month,year) => ({day: day, month: month, year: year});
// All social events has to be added here. The imgName attribute should only contain the file name + file type, and not the path
const social_events = [
    {eventType: "gathering", date: dateObj(7,07,2021), name: "Speedmatch", text: "All table tennis-tables were in use today! The one who got the point kept the table, the looser had to find another available table and play with the one who won there. Every round was unique, it was intense and a good practice for us all!", imgName: "speedrun.jpg"},
    {eventType: "tournament", date: dateObj(1,09,2021), name: "Kiev", text: "We got invited to a tournament in Kiev - Ukraine, to play against the table tennis group representing the best in the city - Kiev Table Tennis. It was a close and nerve wracking match, and ended as a tie!", imgName: "kiev.jpg", teamName: 'NTNUI Table Tennis', opposingTeam: 'Kiev Table Tennis', score: '11,11'},
    {eventType: "tournament", date: dateObj(01,02,2021), name: "NTNUI Table Tennis", text: "First tournament in over a year! We got together and played out to see who would come out of top after a lazy lockdown. Congratulations to Kari Nordmann for an amazing perfomance and the win! Well played to every participant!", imgName: "tryout.jpg", teamName: 'Kari Nordmann', opposingTeam: 'Ola Nordmann', score: '11,10'},
    {eventType: "gathering", date: dateObj(13,01,2021), name: "Pong n' pizza", text: "Due to the pandemic there were no events in 2020, but finally, this wednesday after class, every member in NTNUI Table Tennis gathered to play table tennis and eat some tasty pizza! It was a lovely evening with good laughter and some sick plays.", imgName: "tabletennis_table.jpg"},
    {eventType: "tournament", date: dateObj(10,05,2019), name: "Michail Giannakos outclassed previous World Champion Ma Long", text: "In the final at the Table Tennis World Championship in Trondheim, Michail Giannakos outclassed previous champion Ma Long in a short and dominant match. We at NTNUI Table Tennis are proud to announce we have a World Champion in our group!", imgName: "michail.jpg", teamName: 'Michail Giannakos', opposingTeam: 'Ma Long', score: '11,0'},
    {eventType: "tournament", date: dateObj(20,03,2019), name: "China", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", imgName: "china.jpg", teamName: 'NTNUI Table Tennis', opposingTeam: '乒乓球', score: '11,0'},
    {eventType: "tournament", date: dateObj(20,03,2019), name: "China", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, quisquam ipsum officiis mollitia repellat at sequi, odit magnam, saepe recusandae praesentium repudiandae. Illo nihil et culpa totam consequuntur perferendis.", imgName: "equipment.jpg", teamName: 'NTNUI Table Tennis', opposingTeam: 'NK PlingPong', score: '11,0'}
];



function createCollapsibles() {
    // Check if an notice element is in the container

    if(document.getElementById('notice')) {
        galleryEl.removeChild(document.getElementById('notice'));
    }

    social_events.forEach(event =>  {
        if(event.date.year == Number(currentYearEl.innerText)) {
            // Create button
            let buttonEl = document.createElement('button');
            buttonEl.classList.add('collapsible');
            buttonEl.innerHTML = event.name;
            galleryEl.appendChild(buttonEl);


            // Create content wrapper
            let contentEl = document.createElement('div');
            contentEl.classList.add('module', 'collapsible-content');
                // Create element that devides the content wrapper in two, one left side, one right side
                let splitEl = document.createElement('div');
                splitEl.classList.add('split');
            contentEl.appendChild(splitEl);




            // Add stored information
            // Create left side div
            let leftDivEl = document.createElement('div');

                //Add the date
                let dateEl = document.createElement('p');
                dateEl.classList.add('social-gatherings-date');
                dateEl.innerText = 'Date: ' + event.date.day + '.' + event.date.month + '.' + event.date.year;

                // Add a title
                let titleEl = document.createElement('h3');
                titleEl.innerText = event.name;

                // Add the description
                let textEl = document.createElement('p');
                textEl.innerText = event.text;

            // Append them to the left div
            leftDivEl.appendChild(dateEl);
            leftDivEl.appendChild(titleEl);
            leftDivEl.appendChild(textEl);

            // Continue with layout if the event is "tournament"
            if(event.eventType == 'tournament') {
                buttonEl.innerHTML += ' | Tournament';

                let resultContainerEl = document.createElement('table');

                let resultTeamsContainerEl = document.createElement('tr');
                let teamEl = document.createElement('td');
                teamEl.innerText = event.teamName;
                let opposingTeamEl = document.createElement('td');
                opposingTeamEl.innerText = event.opposingTeam;

                let resultScoresContainerEl = document.createElement('tr');
                let teamResultEl = document.createElement('td');
                let result = event.score.split(',');
                teamResultEl.innerText = result[0];
                let dividerEl = document.createElement('td');
                dividerEl.innerHTML = '-';
                let opposingTeamScoreEl = document.createElement('td');
                opposingTeamScoreEl.innerText = result[1];

                resultTeamsContainerEl.appendChild(teamEl);
                resultTeamsContainerEl.append(document.createElement('td')); // Empty td element to structure the table correctly
                resultTeamsContainerEl.appendChild(opposingTeamEl);

                resultScoresContainerEl.appendChild(teamResultEl);
                resultScoresContainerEl.appendChild(dividerEl);
                resultScoresContainerEl.appendChild(opposingTeamScoreEl);

                resultContainerEl.appendChild(resultTeamsContainerEl);
                resultContainerEl.appendChild(resultScoresContainerEl);

                leftDivEl.appendChild(resultContainerEl);
            }



            // Create right side div
            let rightDivEl = document.createElement('div');
            rightDivEl.classList.add('img-container');

                // Add an image
                let imgEl = document.createElement('img');
                imgEl.src = '../../bordtennis/media/gathering-images/' + event.imgName;
                imgEl.alt = 'Event picture';
                imgEl.height = '350';
                imgEl.loading = 'lazy'; // Lazy to make the site load faster, and keep the user from loading unnecessary data
                rightDivEl.appendChild(imgEl);



            // Add left and right div to divider
            splitEl.appendChild(leftDivEl);
            splitEl.appendChild(rightDivEl);



            // Last of all, add all of the content to the page
            galleryEl.appendChild(contentEl);
        }
    })


    if(document.getElementsByClassName('collapsible').length < 1) {
        noticed = document.createElement('div');
        noticed.classList = "width";
        noticed.id = 'notice';
        galleryEl.appendChild(noticed);
        notice = document.createElement('p');
        notice.innerText = 'There are no posted events from ' + currentYearEl.innerText;
        notice.style.textAlign = "center";
        noticed.appendChild(notice);
    }

    createCarousel();
}

function createCarousel() {
    // Count previous and nex year's number of events
    var countL = 0;
    var countR = 0;
    var minYr = Number(currentYearEl.innerText);
    var maxYr = minYr;

    social_events.forEach(event => {
        if (event.date.year == Number(currentYearEl.innerText) - 1) {
            countL++;
        } else if (event.date.year == Number(currentYearEl.innerText) + 1) {
            countR++;
        }
        if (event.date.year < minYr) {
            minYr = event.date.year;
        } else if (event.date.year > maxYr) {
            maxYr = event.date.year;
        }
    })

    // Edit right and left "carousel"
    let leftCarousel = document.getElementById("prev");
    let rightCarousel = document.getElementById("next");

    leftCarousel.style.backgroundColor = "var(--darkred)";
    rightCarousel.style.backgroundColor = "var(--darkred)";
    leftCarousel.style.boxShadow = "0 2px 6px rgb(0, 0, 0, 0.3)";
    rightCarousel.style.boxShadow = "0 2px 6px rgb(0, 0, 0, 0.3)";


    if (countL == 0) {
        leftCarousel.style.backgroundColor = "var(--white)";
    }
    if (countR == 0) {
        rightCarousel.style.backgroundColor = "var(--white)";
    }


    if(Number(currentYearEl.innerText) == minYr) {
        leftCarousel.style.boxShadow = "none";
    }
    if(Number(currentYearEl.innerText) == maxYr) {
        rightCarousel.style.boxShadow = "none";
    }
}



function addEventListeners() {
    // Script to animate collapsibles dropdown, as well as giving them eventlisteners
    document.querySelectorAll('.collapsible').forEach(button => {
        button.addEventListener('click', () => {
            const collapsibleContent = button.nextElementSibling;

            button.classList.toggle('collapsible-active');

            if(button.classList.contains('collapsible-active')) {
                collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
            }
            else {
                collapsibleContent.style.maxHeight = 0;
            }
        })
    });
}




function openFirstCollapsible() {
    // As long as there is a collapsible element, run click() event
    if(document.getElementsByClassName('collapsible')[0] != undefined) {
        document.getElementsByClassName('collapsible')[0].click();
    }
}



// Browse through the years of events
function changeYear(e) {
    let yearRef = Number(currentYearEl.innerText);

    if(e.target.id == 'nextYear') {
        // Dont do anything if you want to display a coming year (since no events have happened)
        social_events.forEach(event => { if(event.date.year > yearRef) yearRef = event.date.year;})
        if(Number(currentYearEl.innerText) == yearRef) {
            return;
        }

        currentYearEl.innerText = Number(currentYearEl.innerText, 10) + 1;
    }
    else if(e.target.id == 'previousYear') {
        // Dont do anything if there are no events from previous year with respect of the displayed year
        social_events.forEach(event => { if(event.date.year < yearRef) yearRef = event.date.year;})
        if(Number(currentYearEl.innerText) == yearRef) {
            return;
        }

        currentYearEl.innerText = Number(currentYearEl.innerText) - 1;
    }
    galleryEl.innerHTML = '';
    createCollapsibles();
    addEventListeners();
    openFirstCollapsible();
}



// First time script is run, perform functions
// Create collapsibles
createCollapsibles();
//Add Eventlisteners
addEventListeners();
// Open first collapsible once the document is loaded
window.addEventListener('load', openFirstCollapsible);
