
let deferredPrompt;
const banner = document.getElementById("banner");
showInstallPromotion()
{
  banner.style.display="block";
}

window.addEventListener('beforeinstallprompt', (e) => {
  
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();

  banner.addEventListener('click', (e) =>{

    banner.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });


});