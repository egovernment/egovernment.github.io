'use strict';

var provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');

provider.setCustomParameters({
  'allow_signup': 'false'
});

function userConnexion() {
	this.checkSetup();

	this.emailInput = "guest@eregistrations.org";
	//this.passwordInput = document.getElementById('login-password-input');
	this.passwordInput = "";

	//this.signInButton = document.getElementsByClassName('btn-login');
	this.signInButton = document.getElementById('login-modal-button');
	this.signOutButton = document.getElementById('btn-logout');

	/*for(var i = 0; i< this.signInButton.length; i++) {
		this.signInButton[i].addEventListener('click', this.signIn.bind(this));
	}*/

	/*for (var elem in this.signInButton) {
		elem.addEventListener('click', this.signIn.bind(this));
	}*/

	/*this.signInButton.forEach(function(elem) {
		elem.addEventListener('click', this.signIn.bind(this));
	})*/
	/*Array.filter( this.signInButton, function(elem) {
		return elem.addEventListener('click', this.signIn.bind(this));
	})*/
	this.signInButton.addEventListener('click', this.signIn.bind(this));
	this.signOutButton.addEventListener('click', this.signOut.bind(this));
	//this.signInmodalButton.addEventListener('click', this.openSignInForm.bind(this));

	this.initFirebase();
}

userConnexion.prototype.initFirebase = function() {
	$(".user-waiter").removeClass('hidden');
	$(".user-only").addClass('hidden');
	$('.login-error').addClass('hidden');
	this.autoConnect = true;
	this.auth = firebase.auth();
	this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
}

userConnexion.prototype.signIn = function() {
	//this.auth.signInWithPopup(provider);
	console.log();
	$('.login-error').addClass('hidden');
	this.autoConnect = false;
	this.passwordInput = $('#login-password-input').val();
	this.userInput = $('#login-user-input').val();

	if(this.passwordInput != '' && this.userInput == "unctad") {
		this.auth.signInWithEmailAndPassword(this.emailInput, this.passwordInput).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			if(errorCode == "auth/wrong-password") {
				$('.login-error').removeClass('hidden');
			}
		});;
	}else{
		$('.login-error').removeClass('hidden');
	}
	/*firebase.auth().signInWithPopup(provider).then(function(result) {
		var user = result.user;
		console.log(user);
	}).catch(function(error) {
		console.log(error);
		var errorCode = error.code;
		var errorMessage = error.message;
		var email = error.email;
		var credential = error.credential;
	});*/
}

userConnexion.prototype.signOut = function() {
	this.auth.signOut();
	$("#btn-logout").toggleClass('hidden');
	$("#btn-login").toggleClass('hidden');
	$(".user-waiter").removeClass('hidden');
	$(".user-only").addClass('hidden');

}

userConnexion.prototype.onAuthStateChanged = function(user) {
	$(".user-waiter").removeClass('hidden');
	$(".user-only").addClass('hidden');
	$('.login-error').addClass('hidden');
	console.log(user);
	if(user) {
		console.log("user logged");
		$("#btn-logout").toggleClass('hidden');
		$("#btn-login").toggleClass('hidden');
		$(".user-waiter").addClass('hidden');
		$(".user-only").removeClass('hidden');

		/*if(user.displayName != undefined && user.displayName != "undefined") {
			this.userName.textContent = user.displayName;
		}else{
			this.userName.textContent = "User logged";
		}*/
		$('#login-modal').modal('hide');
	}else{
		console.log("user not logged");
		$(".user-only").addClass('hidden');
		$(".user-waiter").removeClass('hidden');
		if(this.autoConnect == false) {
			$('.login-error').removeClass('hidden');
		}
	}
}

userConnexion.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely. ' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty. ' +
        'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
        'displayed there.');
  }
};

window.onload = function() {
  window.userConnexion = new userConnexion();
};
