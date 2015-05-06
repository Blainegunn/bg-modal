 module.exports = {
  modal: function(){
    setTimeout(function(){

      var signInPage = window.location.href.includes('/sign_in');
      var counter = 0; 
      var seshLengthOrg = 15  //document.getElementById('timeOutTime').attributes[1].value;
      var seshLength = seshLengthOrg;  
      var timeCountDown = 10;
      var oddNum = seshLength - timeCountDown;  
      var countdownNum = seshLength - oddNum;
      var body = document.getElementsByTagName('body')[0];
      var modalBackground = document.createElement('div');
      var modalDialog = document.createElement('div');
      var modalBody = document.createElement('div');
      var modalContent = document.createElement('div');
      var modalHeader = document.createElement('div');
      var modalTitle = document.createElement('h4');
      var modalFooter = document.createElement('div'); 
      var closeBtn = document.createElement('button');
      var continueBtn = document.createElement('button');

      continueBtn.id="timeBtn"; 
      modalBackground.id="myModal";

      modalDialog.className="modal-dialog";
      continueBtn.className="btn btn-primary btn-lg btn-block"; //btn-block

      modalFooter.className="modal-footer";
      modalBackground.className="modal";
      modalContent.className="modal-content";
      modalHeader.className="modal-header";
      modalBody.className="modal-body";
      closeBtn.className="close";
      modalTitle.className="modal-title"

      closeBtn.type='button';

      modalBackground.style.position="absolute";
      modalBackground.style.backgroundColor="#000";
      modalBackground.style.opacity=".7"

      modalDialog.style.zIndex="33333";
      modalDialog.style.top="-75%";
      modalDialog.style.display='none';



      continueBtn.innerText="Continue";
      modalBody.innerText= "Your session will timeout in " + timeCountDown + " seconds, if you wish to remain logged in please click 'Continue'. "
      modalTitle.innerText="Session Timeout"
      closeBtn.innerHTML="<span aria-hidden='true'>×</span>" 

      //building the modal 

      body.appendChild(modalDialog)
      body.insertBefore(modalBackground, body.firstChild);
      modalDialog.appendChild(modalContent);
      modalContent.appendChild(modalHeader);
      modalHeader.appendChild(modalTitle);
      modalTitle.appendChild(closeBtn);
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);
      modalFooter.appendChild(continueBtn);

      //modalBackground.style.display='block';

      var sesh = setInterval(function(){
        counter += 1;
        if(signInPage){
          return;
        };

        //countdown
        if(counter >= seshLength - timeCountDown){
          modalBackground.style.display='block';
          modalDialog.style.display='block';
          modalBody.innerText = modalBody.innerText='Your session will timeout in ' + timeCountDown + ' seconds, if you wish to remain logged in please click "Continue". \n \n ';
          timeCountDown -= 1;
        };

        //final timeout
        if(counter == seshLength){
          window.location.href = '/sign_in';
        };
      }, 1000);

      var continueBtnFunc = function(){
        var xmlhttp;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST","/session/refresh",true);
        xmlhttp.send();   
      };
      
      continueBtn.onclick = function(){
        modalDialog.style.display="none";
        modalBackground.style.display="none";
        seshLength = seshLengthOrg;
        counter = 0;
        timeCountDown = 10;
        continueBtnFunc();
      };

      closeBtn.onclick = function(){
        modalDialog.style.display="none";
        modalBackground.style.display="none";
      };
    },500)
    
    return 
  }
 }