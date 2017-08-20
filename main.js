// Initialize Firebase
var config = {
  apiKey: "AIzaSyBhgQfvoOje-u5miWM2Rj4XH2gtf0EuS3c",
  authDomain: "contactform-e0244.firebaseapp.com",
  databaseURL: "https://contactform-e0244.firebaseio.com",
  projectId: "contactform-e0244",
  storageBucket: "contactform-e0244.appspot.com",
  messagingSenderId: "618394904313"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit

document.getElementById("contactForm").addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal("name");
    console.log(name)
    var company = getInputVal("company");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");

    // Save message
    saveMessage(name,company,email,phone,message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3s
    setTimeout(()=>{
        document.querySelector('.alert').style.display = 'none';
    },3000)

    // Reset form
    document.getElementById('contactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,company,email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message:message
    });
}