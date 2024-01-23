class students{
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.course=[]
      
    }
    enroll(course){
        this.course.push(course)
        console.log(`${this.name} has enroll in ${course}`);
    }
    showcourse(){
        console.log(`${this.name}'s enrolled courses: ${this.course.join(',')}`)
    }
}
class Admission{
    constructor() {
        this.students = [];
    }

    enrollStudent(student) {
        this.students.push(student);
        console.log(`${student.name} has been enrolled.`);
    }

    assignCourse(student, course) {
        if (student instanceof students && student.email && course) {
            student.enroll(course);
        } else {
            console.log('Invalid student or course information.');
        }
    }

    showEnrolledStudents() {
        console.log('Enrolled students:');
        this.students.forEach(student => {
            console.log(`- ${student.name} (${student.email})`);
        });
    }
}
const admissionOffice = new Admission();

const student1 = new students('Mithun', 'mithun@pw.live');
const student2 = new students('Farman', 'farman@pw.live');

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);
admissionOffice.assignCourse(student1, 'Full Stack Web Development'); 
admissionOffice.assignCourse(student2, 'Data Science Masters');

student1.showcourse(); 
student2.showcourse(); 

admissionOffice.showEnrolledStudents();