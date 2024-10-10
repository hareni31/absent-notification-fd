const students = [
    { id: 1, name: "Student 1", parentEmail: "parent1@example.com" },
    { id: 2, name: "Student 2", parentEmail: "parent2@example.com" },
    { id: 3, name: "Student 3", parentEmail: "parent3@example.com" },
   ];
   // Populate the student dropdown list
   const studentDropdown = document.getElementById("studentName");
   students.forEach(student => {
    const option = document.createElement("option");
    option.value = student.id;
    option.text = student.name;
    studentDropdown.appendChild(option);
   });
   // Function to mark a student as absent and notify the parent
   function markAbsent() {
    const selectedStudentId = studentDropdown.value;
    const selectedStudent = students.find(student => student.id ===
   parseInt(selectedStudentId));
   
   
    if (selectedStudent) {
    const parentEmail = selectedStudent.parentEmail;
    alert(`Notification sent to parent (${parentEmail}): ${selectedStudent.name} is absent
   today.`);
    } else {
    alert("Please select a student.");
    }
   }