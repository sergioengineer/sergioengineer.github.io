
var dr;
const banner = document.getElementById("banner");
function showInstallPromotion()
{
  banner.style.display="block";
}

window.addEventListener('beforeinstallprompt', (e) => {
  
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  dr = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();

  banner.addEventListener('click', (e) =>{

    banner.style.display = 'none';
    dr.prompt();
    dr.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
     dr = null;
    });
  });


});
