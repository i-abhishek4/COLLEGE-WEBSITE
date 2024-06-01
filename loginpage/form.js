document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const rollno = document.getElementById('rollno').value;
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const course = document.getElementById('course').value;
    const attendance = document.getElementById('attendance').value;
    const cgpa = document.getElementById('cgpa').value;

    if (!rollno || !name || !year || !course || !attendance || !cgpa) {
        alert("Please fill in all required fields.");
        return;
    }

    let data =
        `Roll No: ${rollno}\r\n` +
        `Name: ${name}\r\n` +
        `Year: ${year}\r\n` +
        `Course: ${course}\r\n` +
        `Attendance %: ${attendance}\r\n` +
        `CGPA: ${cgpa}\r\n`;

    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
});
