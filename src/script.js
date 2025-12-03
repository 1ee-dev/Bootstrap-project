const copyBtns = document.querySelectorAll('.copyBtn');
copyBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget;
    const tooltip = currentBtn.nextElementSibling;
    tooltip.classList.remove('d-none');
    tooltip.classList.add('d-inline-block');
    setTimeout(() => {
      tooltip.classList.remove('d-inline-block');
      tooltip.classList.add('d-none');
    }, 1000);
  });
});
