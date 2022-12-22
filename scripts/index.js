const { useTemplate, generateOutputFromTemplate } = require("./engine");

const commonHeaderOutput = generateOutputFromTemplate(
    "../templates/commonHeader.html"
);

const commonFooterOutput = generateOutputFromTemplate(
    "../templates/commonFooter.html"
);

const home = {
    name: "Ishaan Kamra",
    restaurant: "Chilli's",
    commonHeader: commonHeaderOutput,
    commonFooter: commonFooterOutput,
};

const about = {
    name: "Ishaan Kamra",
    commonHeader: commonHeaderOutput,
    commonFooter: commonFooterOutput,
};

useTemplate("../templates/home.html", home);

useTemplate("../templates/about.html", about);
