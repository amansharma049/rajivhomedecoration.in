function sendEmail() {
            let name = document.getElementById('name').value;
            let mobile = document.getElementById('mobile').value;
            let mail = document.getElementById('emails').value;
            let message = document.getElementById('mess').value;
            let add = document.getElementById('address').value;
            Email.send({
                // Host: "smtp.elasticemail.com",
                // Username: "rajivhomedecoration@gmail.com",
                // Password: "9F085F1BA4CAEF2ED37182A8EA2F72703940",

                SecureToken: "be5ffeb7-c702-409a-9710-eb4d2c2b630b",
                To: 'rajivhomedecoration@gmail.com',
                From: "rajivhomedecoration@gmail.com",
                Subject: "You Got New Message From your site",
                Body: "Name: "+ name
                +"<br/> Mobile No.: "+ mobile
                + "<br/> Email: " + mail
                + "<br/> Message: " + message
                + "<br/> Address: " + add
            }).then(
                swal("Form Submit Successfully!", "We will contact you soon!", "success")
            );
        }