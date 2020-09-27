const path = require("path");
const fs = require("fs");

const tempDir = path.resolve(__dirname, "../HtmlTemps");

const render = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
    
    return renderMain(html.join(""));

};

const renderManager = manager => {
    let template = fs.renderFileSync(path.resolve(tempDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficenumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.renderFileSync(path.resolve(tempDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "github", manager.getGithub());
    return template;
};

const renderIntern = intern => {
    let template = fs.renderFileSync(path.resolve(tempDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "school", manager.getSchool());
    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(tempDir, "main.html"), "utf8");
    return replacePlaceholders(template, "crew", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{" + placeholder + "}}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;