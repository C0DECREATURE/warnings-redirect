// self executing function to set up warnings redirect
(function(){
	// EDIT THIS TO THE FILE PATH FOR THE WARNINGS FOLDER
	let warningsURL = '/warnings';
	
	// get a usable name for this warnings folder
	// this is what will be used for the localStorage showWarnings setting
	let warningsName = warningsURL.replaceAll('/','');
	
	let urlParams = new URL(window.location.href).searchParams;
	let showWarnings = urlParams.get('showWarnings');
	// redirect to warnings page if criteria are met
	if (
		// if user hasn't asked not to be shown warnings again
		localStorage.getItem(`showWarnings${warningsName}`) != 'false'
		&& sessionStorage.getItem(`showWarnings${warningsName}`) != 'false'
		// AND this page wasn't specifically loaded without warnings
		&& (!showWarnings || showWarnings != 'false')
		// AND user is not the Neocities screenshot bot
		&& navigator.userAgent.toLowerCase() != 'screenjesus'
	) {
		// pass on the current URL. this is where the user will be sent after viewing the warnings
		let redirect = window.location.pathname + window.location.search;
		// send the user to the warnings page
		window.location.href = `${warningsURL}?redirect=${redirect}`;
	} else if (showWarnings && showWarnings == 'false')	{
		// if showWarnings search parameter is set to false, clear it from the URL
		// this makes sure that if a user copies the link from their browser to send to someone else,
		// the warnings will still be shown to the new user
		const url = new URL(location);
		url.searchParams.delete("showWarnings");
		history.pushState({}, "", url);
	}
})();