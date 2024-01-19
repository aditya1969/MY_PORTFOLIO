function contactMe() {
    alert('Feel free to reach out!'); 
}
document.addEventListener('DOMContentLoaded', function () {
    var skillsSection = document.getElementById('skills-section');

    var programmingLanguages = ['C And C++', 'Java','C#','HTML5', 'CSS', 'JavaScript'];
    appendSkillsSection('Programming Languages', programmingLanguages);

    var frameworksAndLibraries = ['React', 'Node.js'];
    appendSkillsSection('Frameworks and Libraries', frameworksAndLibraries);
    
    var tools = [ 'VS Code','MySQL-Server',''];
    appendSkillsSection('Tools', tools);

    function appendSkillsSection(title, skills) {
        var skillsList = document.createElement('ul');
        skillsList.innerHTML = '<h2>' + title + '</h2>';
        skills.forEach(function (skill) {
            var skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillsList.appendChild(skillItem);
        });
        skillsSection.appendChild(skillsList);
    }
});