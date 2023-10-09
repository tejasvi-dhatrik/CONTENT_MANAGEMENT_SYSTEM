document.addEventListener('DOMContentLoaded', () => {
    const Form = document.getElementById('Form');
    const displayTitl = document.getElementById('title-display');
    const displayCont = document.getElementById('content-display');
    const displayImg = document.getElementById('image-display');
    const displayVid = document.getElementById('video-display');
  
      Form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const image = document.getElementById('image').files[0];
      const video = document.getElementById('video').files[0];
  
      displayTitl.textContent = title;
      displayCont.textContent = content;
      displayImg.src = URL.createObjectURL(image);
      displayVid.src = URL.createObjectURL(video);
  
      document.getElementById('submitted-content').style.display = 'block';
      Form.reset();
    });
  });
