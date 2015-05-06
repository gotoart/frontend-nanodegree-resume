var name = "Konstantin Rusanov";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Head of SEM";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole).prepend(formattedName);


var arry1 = ["a"];
console.log(formattedName, formattedRole, arry1.length);