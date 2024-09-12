function changeName(element){
    element.textContent = "ABDULLAH" 
}


function resetName(element){
    element.textContent = "RICHARD" 
}

function changeLName(element){
    element.textContent = "ALJOHANI" 
}

function resetLName(element){
    element.textContent = "SANCHEZ" 
}

function changeLogo(element){
    element.src = "me.jpg"
}

function resetLogo(element){
    element.src = "https://i.pinimg.com/474x/b4/3a/89/b43a892e3f68c50a5b7ce996aa41a1af.jpg"
}


function changeNumber(element){
    element.textContent = "+966 53 820 7721"
}
function resetNumber(element){
    element.textContent = "+123 456 7890"
}

function changeNumberRefe(element){
    element.textContent = "Phone: +966 53 820 7721"
}
function resetNumberRefe(element){
    element.textContent = "Phone: +123 456 7890"
}


function changeEmail(element){
    element.textContent = "Abdallahjhn1@gmaill.com"
}
function resetEmail(element){
    element.textContent = "hello@realygreatsite.com"
}

function changeEmailRefe(element){
    element.textContent = "Email: Abdallahjhn1@gmaill.com"
}
function resetEmailRefe(element){
    element.textContent = "Email: hello@realygreatsite.com"
}



function changeAddress(element){
    element.textContent = "Riyadh - Al Yarmuk"
}
function resetAddress(element){
    element.textContent = "123 Anywhere St. Any City"
}

function changeSite(element){
    element.textContent = "www.AbdallahJhn.com"
}
function resetSite(element){
    element.textContent = "www.realygreatsite.com"
}

function changeEdu(element){
    element.innerHTML = '<h5>2018 - 2024</h5><h4>TABIAH UNVERSITY</h4><li><h4>Bachelor of COMPUTER SECINCE</h4></li>'
}
function resetEdu(element){
    element.innerHTML = '<h5>2029 - 2030</h5><h4>WARDIERE UNIVERSITY</h4><li><h4>Master of Bussiness Management</h4></li><h5>2025 - 2029</h5><li><h4>Bachelor of Bussiness</h4></li><li><h4>GPA: 3.8 /4.0</h4></li>'
}


function changeSkill(element) {
    const skills = ['Project Management', 'Communication Skills', 'Teamwork', 'Leadership', 'React', 'JavaScript'];

    element.innerHTML = '';

   
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        element.appendChild(li);
    });
}

function resetSkill(element) {
    const originalSkills = [
        'Project Management',
        'Public Relations',
        'Teamwork',
        'Time Management',
        'Leadership',
        'Effective Communication',
        'Critical Thinking'
    ];

    element.innerHTML = '';

    originalSkills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        element.appendChild(li);
    });
}

function changeLanguage(element) {
    const languages = ['Arabic (Native)', 'English (Good)'];

    element.innerHTML = '';

    languages.forEach(language => {
        const li = document.createElement('li');
        li.textContent = language;
        element.appendChild(li);
    });
}

function resetLanguage(element) {
    const originalLanguages = [
        'English (Fluent)',
        'French (Fluent)',
        'German (Basics)',
        'Spanish (Intermediate)'
    ];

    // Clear existing <li> elements
    element.innerHTML = '';

    // Add original <li> elements
    originalLanguages.forEach(language => {
        const li = document.createElement('li');
        li.textContent = language;
        element.appendChild(li);
    });
}

function changeMajor(element){
    element.textContent = "FULL STACK"

}
function resetMajor(element){
    element.textContent = "MARKETING MANAGER"
}

function changeProfile(element){
    element.textContent = "As a recent computer science graduate, I am an aspiring web developer eager to apply my technical skills and creative problem-solving mindset to impactful projects. I have a strong foundation in programming and web development, and I'm fascinated by transforming ideas into functional, user-friendly websites and applications."

}
function resetProfile(element){
    element.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud"
}

function changeTitleMajor(element){
    element.textContent = 'Web Developer'
}
function resetTitleMajor(element){
    element.textContent = 'Marketing Manager & Specialist'
}

function changeTitleMajor2(element){
    element.textContent = 'Designer & Explainer of DSGC'
}
function resetTitleMajor2(element){
    element.textContent = 'Marketing Manager & Specialist'
}

function changeTitleMajor3(element){
    element.textContent = 'Volunteer at the Prophet\'s Mosque'
}
function resetTitleMajor3(element){
    element.textContent = 'Marketing Manager & Specialist'
}


function changeDate(element){
    element.textContent = 'Feb 2024 - April 2024'
}
function resetDate(element){
    element.textContent = '2029 - present'
}


function changeDate2(element){
    element.textContent = 'Sep 2021 - May 2023'
}
function resetDate2(element){
    element.textContent = '2025- 2029'
}


function changeDate3(element){
    element.textContent = 'Mar 2024 - April 2024'
}
function resetDate3(element){
    element.textContent = '2024 - 2025'
}




const originalContent = '• Develop and execute comprehensive marketing strategies and campaigns that align with the company\'s goals and objectives.<br>• Lead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.<br>• Monitor brand consistency across marketing channels and materials.';

function changeTextExperience(element) {
    element.querySelector('p').innerHTML = '• Collaborated with a team to develop a website using PHP and MySQL, leveraging version control with Git and GitHub to enhance the online presence of the association.<br>• Conducted API testing using Postman to check if the data was being retrieved correctly from the database.';
}

function resetTextExperience(element) {
    element.querySelector('p').innerHTML = originalContent; // Reset to original content
}

function changePlace(element){
    element.textContent = "Al Madinah"
}
function resetPlace(element){
    element.textContent = "Borcelle Studio"
}

function resetPlace2(element){
    element.textContent = "Fauget Studio"
}

function resetPlace3(element){
    element.textContent = "Studio Shodwe"
}

function changeTextExperience2(element) {
    element.querySelector('p').innerHTML = '• Designed promotional materials and assets for the Majd initiative and other club/event activities.';
}

function resetTextExperience2(element) {
    let original = '• Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI.<br>• Oversee market research to identify emerging trends, customer needs, and competitor strategies.<br>• Monitor brand consistency across marketing channels and materials. Studio Shodwe'
    element.querySelector('p').innerHTML = original; 
}

function changeTextExperience3(element) {
    element.querySelector('p').innerHTML = '• Organized and assisted worshipers with disabilities, demonstrating adaptability, flexibility, and strong communication skills. ';
}

function resetTextExperience3(element) {
    let original = '• Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives. <br>• Monitor and maintain brand consistency across all marketingchannels and materials. '
    element.querySelector('p').innerHTML = original; 
}
