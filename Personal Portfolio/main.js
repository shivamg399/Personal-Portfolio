var typed = new Typed('#element', {
    strings: ['Freelancer', 'Web Designer', 'Web Developer.'],
    typeSpeed: 50,
});


document.getElementById('download-cv').addEventListener('click', function () {
    // Replace with the path to your CV file
    var fileUrl = 'https://drive.google.com/file/d/1yCnFhkn8I-PD09LaU6g5lhA8VQ85kfx2/view?usp=drive_link';

    // Create a link element
    var a = document.createElement('a');
    a.href = fileUrl;

    // Set the file name you want for your download
    a.download = 'ShivamGupta-cv.pdf';

    // Append the element to the body
    document.body.appendChild(a);

    // Click the element to trigger the download
    a.click();

    // Clean up
    document.body.removeChild(a);
});


function emailSend() {

    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name " + userName +
        "<br/> Phone " + phone +
        "<br/> Email " + email;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "shivamguptadgp@gmail.com",
        Password: "044AB872E58D4F0DA0823002679EE5403FD5",
        To: 'shivamhub399@gmail.com',
        From: "shivamguptadgp@gmail.com",
        Subject: "This is the subject",
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Secussful", "You clicked the button!", "success");
            }
            else {
                swal("Error", "You clicked the button!", "error");
            }
        }
    );
}
