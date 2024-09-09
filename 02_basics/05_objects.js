const course = {
    coursename:"JS in Hindi",
    price:"999",
    courseInstructor:"chandan"
}
// console.log(course.courseInstructor);

//instruction or extraction
// const{courseInstructor} = course
// console.log(courseInstructor);

//detraction object
const{courseInstructor: instructor} = course
console.log(instructor);

//JSON
// {
//     "name": "chandan",
//     "coursename": "JS in Hindi",
//     "price": "999",
// }

//api array format
[
    {},
    {},
    {}
]