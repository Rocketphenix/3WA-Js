import { Admin } from "./Admin.js";

let admin = new Admin("joe", "ma", 1250);

console.log(admin.fullname());

console.log(admin.canEditArticles());

admin.job = "prof";
console.log(admin.job);

console.log(admin.age);
