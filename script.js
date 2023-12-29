function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tabcontent');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  const tab = document.querySelector(`#${tabId}`);
  tab.classList.add('active');

  const tabContent = document.querySelector(`#${tabId}.tabcontent`);
  tabContent.style.display = 'block';
}
