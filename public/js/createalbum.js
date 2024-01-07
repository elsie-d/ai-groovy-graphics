const createBtn = document.getElementById('create-btn');
  const isLoggedIn = 'logged_in' ;

  createBtn.addEventListener ('click', () => {
    if (isLoggedIn) {
      window.location.href = '/profile';
    } else {
      window.location.href = '/login';
    }
  });

 