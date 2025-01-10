export const generateIpInfoCard = (elementContainer, data) => {
  elementContainer.innerHTML = '';

  elementContainer.appendChild(createSection('Ip address', data.ip));
  elementContainer.appendChild(createSection('Location', data.location.city));
  elementContainer.appendChild(
    createSection('Timezone', data.location.timezone),
  );
  elementContainer.appendChild(createSection('ISP', data.isp));
};

const createSection = (title, value, hasBorder = true) => {
  const section = document.createElement('div');

  if (hasBorder) section.classList.add('border-r', 'border-gray-300', 'pr-8');

  const titleElement = document.createElement('p');
  titleElement.id = 'ip-title';
  titleElement.textContent = title;

  const valueElement = document.createElement('p');
  valueElement.id = 'ip-info';
  valueElement.textContent = value;

  section.append(titleElement, valueElement);

  return section;
};
