function emailSend(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ahmedalmosannaf217@gmail.com",
        Password : "0D6055B5C0E9AF99B991FD3B6418036790C3",
        To : 'ahmedalmosanuf@gmail.com',
        From : "ahmedalmosannaf217@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}