const copyBtns = document.querySelectorAll('.copyBtn');
copyBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget;
    const tooltip = currentBtn.nextElementSibling;
    tooltip.classList.remove('d-none');
    setTimeout(() => {
      tooltip.classList.add('d-none');
    }, 1000);
  });
});
